// JETC Leaderboard scoring engine (preview).
// Pure calculation: no page/DOM code. Works in a browser (window.JETCScoring)
// and in Node (module.exports).
(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.JETCScoring = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  const WEIGHTS = [1.0, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55];
  const DAY = 86400000;
  const SET_POINTS = {
    decisive: { win: 15, loss: 5 },
    competitive: { win: 13, loss: 7 },
    contested: { win: 11, loss: 9 },
  };
  const MATCH_POINTS = {
    decisive: { win: 16, loss: 4 },
    competitive: { win: 14, loss: 6 },
    contested: { win: 12, loss: 8 },
  };

  const round2 = (x) => Math.round(x * 100) / 100;
  const pairKey = (players) => [...players].sort().join(" / ");
  const sideNames = (side) => side.players.map((p) => p.name);
  const ageDays = (date, asOf) => (new Date(asOf) - new Date(date)) / DAY;

  function setCategory(games) {
    const loser = Math.min(...games);
    if (loser <= 2) return "decisive";
    if (loser === 6) return "contested";
    return "competitive"; // 6-3, 6-4, 7-5, and partial 5-3 / 5-4 / 4-3
  }

  function classify(match) {
    if (match.completion === "forfeit") {
      if (match.forfeitType === "injury" && match.stoppageScore) {
        const cat = setCategory(match.stoppageScore);
        return {
          category: cat,
          label: `injury forfeit, stoppage score ${match.stoppageScore.join("-")} classified as a ${cat} partial set`,
          ...SET_POINTS[cat],
        };
      }
      return {
        category: "decisive",
        label: "voluntary forfeit, scored as a decisive single set",
        ...SET_POINTS.decisive,
      };
    }
    if (match.completion === "single-set" || match.completion === "partial-set") {
      const cat = setCategory(match.sets[0].games);
      return {
        category: cat,
        label: `${cat} ${match.completion === "partial-set" ? "partial set" : "set"}`,
        ...SET_POINTS[cat],
      };
    }
    if (match.completion === "partial-match") {
      const agg = [0, 1].map((s) =>
        match.sets.reduce((n, set) => n + set.games[s], 0)
      );
      const margin = Math.abs(agg[0] - agg[1]);
      const cat = margin <= 2 ? "contested" : margin <= 4 ? "competitive" : "decisive";
      return {
        category: cat,
        label: `partial match scored as an aggregate-games set (${agg.join("-")} games, ${cat})`,
        ...SET_POINTS[cat],
      };
    }

    const won = [0, 1].map(
      (s) => match.sets.filter((set) => set.games[s] > set.games[1 - s]).length
    );
    const loserSets = Math.min(...won);
    const anyDecisive = match.sets.some(
      (set) => !set.matchTiebreak && setCategory(set.games) === "decisive"
    );
    // Margin-first categories (v3.2, Aidan's ruling): a match with no rout
    // set is contested when it was decided in a tiebreak/third set OR when
    // every set went to a tiebreak (e.g. 7-6, 7-6 in straight sets).
    const allTiebreakSets = match.sets
      .filter((set) => !set.matchTiebreak)
      .every((set) => setCategory(set.games) === "contested");
    let cat;
    if (loserSets === 0 && anyDecisive) cat = "decisive";
    else if (!anyDecisive && (loserSets > 0 || allTiebreakSets)) cat = "contested";
    else cat = "competitive";
    return { category: cat, label: `${cat} match`, ...MATCH_POINTS[cat] };
  }

  // Line multiplier (v3.2, Aidan's ruling): league results only, keyed to
  // the line actually played. #1 line 1.10, #2 line 1.00, #3 doubles 0.90.
  // Practice results have no lines and always use 1.
  const LINE_MULTIPLIERS = { 1: 1.1, 2: 1.0, 3: 0.9 };
  function lineMultiplier(match) {
    if (match.context !== "league") return 1;
    const m = LINE_MULTIPLIERS[match.line];
    return m == null ? 1 : m;
  }

  function setsLabel(match) {
    if (!match || !match.sets) return "";
    return match.sets
      .map((s) => {
        let t = s.games.join("-");
        if (s.matchTiebreak && s.tiebreak) t += ` (TB ${s.tiebreak.join("-")})`;
        else if (s.matchTiebreak) t += " (match TB)";
        else if (s.tiebreak) t += ` (${s.tiebreak.join("-")})`;
        return t;
      })
      .join(", ");
  }

  function shortDate(iso) {
    const parts = String(iso).split("-");
    return parts.length === 3 ? `${Number(parts[1])}/${Number(parts[2])}` : iso;
  }

  // Accepts either:
  //   calculateBoards(matches, players, options)
  // or:
  //   calculateBoards({ matches, players, asOf, currentPublishedRanks,
  //                     currentPublishedOrder, historicalResults })
  // historicalResults is accepted so callers can pass the whole data bundle,
  // but it is deliberately never read here: history cannot affect a score.
  function calculateBoards(input, playersInput, optionsInput) {
    let matches;
    let players;
    let options;
    if (Array.isArray(input)) {
      matches = input;
      players = playersInput || [];
      options = optionsInput || {};
    } else {
      const bundle = input || {};
      matches = bundle.matches || bundle.MATCHES || [];
      players = bundle.players || bundle.PLAYERS || [];
      options = bundle;
    }

    const asOf = options.asOf || options.AS_OF || "2026-10-31";
    const currentRanks = options.currentPublishedRanks || options.CURRENT_PUBLISHED_RANKS || {};
    const currentOrder = options.currentPublishedOrder || options.CURRENT_PUBLISHED_ORDER || {};

    const playerByName = new Map(players.map((p) => [p.name, p]));
    const isReg = (name) => playerByName.has(name);
    const guestByName = (name) => !!(playerByName.get(name) || {}).guest;

    const singlesRes = new Map();
    const pairRes = new Map();
    const indivRes = new Map();
    const pushTo = (map, key, r) => {
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(r);
    };

    function boardScore(map, key, scoreAsOf) {
      const rs = (map.get(key) || [])
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date) || b.sequence - a.sequence)
        .slice(0, 10);
      let num = 0;
      let den = 0;
      rs.forEach((r, i) => {
        const w = WEIGHTS[i] * (ageDays(r.date, scoreAsOf) > 56 ? 0.85 : 1);
        num += r.points * w;
        den += w;
      });
      return den ? num / den : 0;
    }

    const chronological = matches
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date) || a.sequence - b.sequence);

    for (const match of chronological) {
      const cls = classify(match);
      const pending = []; // Compute everything first; append after, so a match cannot adjust itself.

      if (match.format === "singles") {
        match.sides.forEach((side, s) => {
          const name = sideNames(side)[0];
          if (!isReg(name)) return;
          const won = s === match.winnerSide;
          const base = won ? cls.win : cls.loss;
          let points;
          let detail;
          if (match.context === "league") {
            const lm = lineMultiplier(match);
            points = base * 1.5 * lm;
            detail = {
              base,
              category: cls.label,
              leagueMultiplier: 1.5,
              line: match.line != null ? match.line : null,
              lineMultiplier: lm,
            };
          } else {
            const oppName = sideNames(match.sides[1 - s])[0];
            const ownBefore = boardScore(singlesRes, name, match.date);
            const oppBefore = isReg(oppName)
              ? boardScore(singlesRes, oppName, match.date)
              : 0;
            const mult = 1 + (0.15 * (oppBefore - ownBefore)) / 10;
            points = base * mult;
            detail = {
              base,
              category: cls.label,
              opponentMultiplier: mult,
              ownScoreBefore: ownBefore,
              opponentScoreBefore: oppBefore,
            };
          }
          pending.push(() =>
            pushTo(singlesRes, name, {
              matchId: match.id,
              date: match.date,
              sequence: match.sequence,
              points,
              ...detail,
              opponent: sideNames(match.sides[1 - s]).join(" / "),
              won,
            })
          );
        });
      } else {
        const pairPointsBySide = [null, null];
        const pairDetailBySide = [null, null];

        match.sides.forEach((side, s) => {
          const names = sideNames(side);
          if (!names.some(isReg)) return; // External side: not a board entity.
          const won = s === match.winnerSide;
          const base = won ? cls.win : cls.loss;
          let points;
          let detail;
          if (match.context === "league") {
            const lm = lineMultiplier(match);
            points = base * 1.5 * lm;
            detail = {
              base,
              category: cls.label,
              leagueMultiplier: 1.5,
              line: match.line != null ? match.line : null,
              lineMultiplier: lm,
            };
          } else {
            const key = pairKey(names);
            const oppNames = sideNames(match.sides[1 - s]);
            const ownBefore = (pairRes.get(key) || []).length
              ? boardScore(pairRes, key, match.date)
              : 0;
            let oppBefore = null;
            let refNote = null;
            const oppKey = pairKey(oppNames);
            if ((pairRes.get(oppKey) || []).length) {
              oppBefore = boardScore(pairRes, oppKey, match.date);
            } else if (oppNames.every((n) => (indivRes.get(n) || []).length)) {
              oppBefore =
                oppNames.reduce(
                  (sum, n) => sum + boardScore(indivRes, n, match.date),
                  0
                ) / oppNames.length;
              refNote =
                "opposing pair had no prior pairing score; used the average of the opponents' individual-doubles scores";
            } else {
              oppBefore = ownBefore;
              refNote =
                "no reference rating available for the opposing pair; multiplier set to 1.0";
            }
            const mult =
              refNote && oppBefore === ownBefore && refNote.startsWith("no reference")
                ? 1.0
                : 1 + (0.15 * (oppBefore - ownBefore)) / 10;
            points = base * mult;
            detail = {
              base,
              category: cls.label,
              opponentMultiplier: mult,
              ownScoreBefore: ownBefore,
              opponentScoreBefore: oppBefore,
              ...(refNote ? { referenceNote: refNote } : {}),
            };
          }
          pairPointsBySide[s] = points;
          pairDetailBySide[s] = detail;
        });

        match.sides.forEach((side, s) => {
          if (pairPointsBySide[s] === null) return;
          const names = sideNames(side);
          const key = pairKey(names);
          const pairPoints = pairPointsBySide[s];
          const detail = pairDetailBySide[s];
          pending.push(() =>
            pushTo(pairRes, key, {
              matchId: match.id,
              date: match.date,
              sequence: match.sequence,
              points: pairPoints,
              ...detail,
              opponent: sideNames(match.sides[1 - s]).join(" / "),
              won: s === match.winnerSide,
            })
          );

          names.forEach((name, idx) => {
            if (!isReg(name)) return;
            const partner = names[1 - idx];
            const ownBefore = boardScore(indivRes, name, match.date);
            const partnerBefore = boardScore(indivRes, partner, match.date);
            const partnerMult = 1 + (0.15 * (ownBefore - partnerBefore)) / 10;
            pending.push(() =>
              pushTo(indivRes, name, {
                matchId: match.id,
                date: match.date,
                sequence: match.sequence,
                points: pairPoints * partnerMult,
                base: detail.base,
                category: detail.category,
                ...(detail.leagueMultiplier
                  ? { leagueMultiplier: detail.leagueMultiplier }
                  : {}),
                ...(detail.lineMultiplier
                  ? { line: detail.line, lineMultiplier: detail.lineMultiplier }
                  : {}),
                ...(detail.opponentMultiplier
                  ? { opponentMultiplier: detail.opponentMultiplier }
                  : {}),
                ...(detail.referenceNote ? { referenceNote: detail.referenceNote } : {}),
                pairingPoints: pairPoints,
                partnerMultiplier: partnerMult,
                ownScoreBefore: ownBefore,
                partnerScoreBefore: partnerBefore,
                opponent: `w/ ${partner} vs ${sideNames(match.sides[1 - s]).join(" / ")}`,
                won: s === match.winnerSide,
              })
            );
          });
        });
      }

      pending.forEach((fn) => fn());
    }

    const matchById = new Map(matches.map((m) => [m.id, m]));

    function lastText(board, result) {
      if (!result) return "No scored results yet";
      const d = shortDate(result.date);
      const wl = result.won ? "W" : "L";
      if (board === "singles") {
        const match = matchById.get(result.matchId);
        const scoreText = result.sets || (match && match.legacyScoreRaw) || "";
        return `${d} ${wl} ${result.opponent}${scoreText ? ` ${scoreText}` : ""}`;
      }
      if (board === "doubles") return `${d} ${wl} ${result.opponent}`;
      return `${d} ${wl}`;
    }

    function buildBoard(board, map, entities) {
      for (const e of entities) {
        const rs = (map.get(e.key) || [])
          .slice()
          .sort((a, b) => b.date.localeCompare(a.date) || b.sequence - a.sequence);
        const scored = rs.slice(0, 10);
        const den = scored.reduce(
          (sum, r, i) =>
            sum + WEIGHTS[i] * (ageDays(r.date, asOf) > 56 ? 0.85 : 1),
          0
        );
        let score = 0;
        e.results = rs.map((r, i) => {
          const inWindow = i < 10;
          const w = inWindow
            ? WEIGHTS[i] * (ageDays(r.date, asOf) > 56 ? 0.85 : 1)
            : 0;
          const contribution = inWindow && den ? (r.points * w) / den : 0;
          if (inWindow) score += contribution;
          const { matchId, date, points, opponent, won, ...rest } = r;
          return {
            matchId,
            date,
            opponent,
            won,
            sets: setsLabel(matchById.get(matchId)),
            points: round2(points),
            ...(inWindow
              ? { weight: w, contribution: round2(contribution) }
              : { inWindow: false }),
            detail: rest,
          };
        });
        e.score = round2(score);
        e.last = lastText(board, e.results[0]);
      }

      const ranked = entities
        .slice()
        .sort(
          (a, b) =>
            b.score - a.score ||
            (a.previousRank ?? Infinity) - (b.previousRank ?? Infinity) ||
            a.order - b.order
        );
      ranked.forEach((e, i) => {
        e.rank = i + 1;
      });
      return ranked.map((e) => ({
        rank: e.rank,
        name: e.name,
        score: e.score,
        guest: e.guest,
        previousRank: e.previousRank ?? null,
        last: e.last,
        results: e.results,
      }));
    }

    const playerEntities = (board) =>
      players.map((p) => ({
        name: p.name,
        key: p.name,
        guest: !!p.guest,
        previousRank: (currentRanks[board] || {})[p.name] ?? null,
        order: (currentOrder[board] || []).indexOf(p.name) >= 0
          ? (currentOrder[board] || []).indexOf(p.name)
          : 1000 + (p.rosterOrder || 0),
      }));

    const pairEntities = () => {
      const entities = [];
      const seen = new Set();
      const add = (name, order) => {
        const names = name.split(" / ");
        const key = pairKey(names);
        if (seen.has(key)) return;
        seen.add(key);
        entities.push({
          name,
          key,
          guest: names.some(guestByName),
          previousRank: (currentRanks.doubles || {})[name] ?? null,
          order,
        });
      };
      (currentOrder.doubles || []).forEach((name, i) => add(name, i));
      // New pairings keep the order in which their first scored result was processed.
      let extra = 1000;
      for (const key of pairRes.keys()) {
        if (!seen.has(key)) {
          add(key, extra);
          extra += 1;
        }
      }
      return entities;
    };

    return {
      singles: buildBoard("singles", singlesRes, playerEntities("singles")),
      doubles: buildBoard("doubles", pairRes, pairEntities()),
      indivDoubles: buildBoard(
        "indivDoubles",
        indivRes,
        playerEntities("indivDoubles")
      ),
    };
  }

  return {
    WEIGHTS,
    SET_POINTS,
    MATCH_POINTS,
    setCategory,
    classify,
    setsLabel,
    calculateBoards,
  };
});
