// JETC Leaderboard preview data.
// PLAYERS and MATCHES are the scored data. HISTORICAL_RESULTS are display-only:
// every historical record has countsForScore=false and is never passed to the scoring engine.
const PLAYERS = [
  {
    "id": "logan-roschman",
    "name": "Logan Roschman",
    "shortName": "Logan",
    "guest": false,
    "rosterOrder": 1,
    "aliases": []
  },
  {
    "id": "jonathan-jaffe",
    "name": "Jonathan Jaffe",
    "shortName": "Jonathan",
    "guest": false,
    "rosterOrder": 2,
    "aliases": []
  },
  {
    "id": "justin-legido",
    "name": "Justin Legido",
    "shortName": "Justin",
    "guest": false,
    "rosterOrder": 3,
    "aliases": []
  },
  {
    "id": "tyler-crowe",
    "name": "Tyler Crowe",
    "shortName": "Tyler",
    "guest": true,
    "rosterOrder": 4,
    "aliases": []
  },
  {
    "id": "kevin-rodengen",
    "name": "Kevin Rodengen",
    "shortName": "Kevin",
    "guest": false,
    "rosterOrder": 5,
    "aliases": []
  },
  {
    "id": "carlos-gomez",
    "name": "Carlos Gomez",
    "shortName": "Carlos",
    "guest": false,
    "rosterOrder": 6,
    "aliases": []
  },
  {
    "id": "will-kuehne",
    "name": "Will Kuehne",
    "shortName": "Will",
    "guest": false,
    "rosterOrder": 7,
    "aliases": [
      "William Kuehne",
      "William"
    ]
  },
  {
    "id": "aidan-veres",
    "name": "Aidan Veres",
    "shortName": "Aidan",
    "guest": false,
    "rosterOrder": 8,
    "aliases": []
  },
  {
    "id": "nick-velar",
    "name": "Nick Velar",
    "shortName": "Nick",
    "guest": false,
    "rosterOrder": 9,
    "aliases": [
      "Nicholas Velar",
      "Nicholas"
    ]
  },
  {
    "id": "sterling-savill",
    "name": "Sterling Savill",
    "shortName": "Sterling",
    "guest": false,
    "rosterOrder": 10,
    "aliases": []
  },
  {
    "id": "juan-gomez",
    "name": "Juan Gomez",
    "shortName": "Juan",
    "guest": false,
    "rosterOrder": 11,
    "aliases": []
  },
  {
    "id": "alec-bryant",
    "name": "Alec Bryant",
    "shortName": "Alec",
    "guest": false,
    "rosterOrder": 12,
    "aliases": []
  },
  {
    "id": "michael-adler",
    "name": "Michael Adler",
    "shortName": "Mike",
    "guest": false,
    "rosterOrder": 13,
    "aliases": [
      "Michael"
    ]
  },
  {
    "id": "patrick-rubenstein",
    "name": "Patrick Rubenstein",
    "shortName": "Patrick",
    "guest": false,
    "rosterOrder": 14,
    "aliases": []
  },
  {
    "id": "adam-danna",
    "name": "Adam D'Anna",
    "shortName": "Adam",
    "guest": false,
    "rosterOrder": 15,
    "aliases": []
  },
  {
    "id": "parker-long",
    "name": "Parker Long",
    "shortName": "Parker",
    "guest": false,
    "rosterOrder": 16,
    "aliases": []
  },
  {
    "id": "jose-guest",
    "name": "Jose (guest)",
    "shortName": "Jose",
    "guest": true,
    "rosterOrder": 17,
    "aliases": [
      "Jose"
    ]
  }
];

const MATCHES = [
  {
    "id": "2026-09-23-sgl-01",
    "date": "2026-09-23",
    "sequence": 1,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Aidan Veres"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Parker Long"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          1
        ]
      }
    ],
    "legacyScoreRaw": "6-1",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-09-23-sgl-01"
  },
  {
    "id": "2026-09-23-sgl-02",
    "date": "2026-09-23",
    "sequence": 2,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Carlos Gomez"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Aidan Veres"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          3
        ]
      }
    ],
    "legacyScoreRaw": "6-3",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-09-23-sgl-02"
  },
  {
    "id": "2026-09-23-sgl-03",
    "date": "2026-09-23",
    "sequence": 3,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Kevin Rodengen"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Carlos Gomez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          3
        ]
      }
    ],
    "legacyScoreRaw": "6-3",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-09-23-sgl-03"
  },
  {
    "id": "2026-09-23-sgl-04",
    "date": "2026-09-23",
    "sequence": 4,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Kevin Rodengen"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Parker Long"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          1
        ]
      }
    ],
    "legacyScoreRaw": "6-1",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-09-23-sgl-04"
  },
  {
    "id": "2026-09-26-dbl-01",
    "date": "2026-09-26",
    "sequence": 1,
    "format": "doubles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Will Kuehne"
          },
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Carlos Gomez"
          },
          {
            "name": "Juan Gomez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      }
    ],
    "legacyScoreRaw": "6-2",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-09-26-dbl-01"
  },
  {
    "id": "2026-09-26-sgl-02",
    "date": "2026-09-26",
    "sequence": 2,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Will Kuehne"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Juan Gomez"
          }
        ]
      }
    ],
    "winnerSide": 1,
    "sets": [
      {
        "games": [
          0,
          6
        ]
      }
    ],
    "legacyScoreRaw": "0-6 (set 1 of a split session; session score 0-6, 6-2 from Kuehne's perspective)",
    "sourceInstances": 2,
    "source": "legacy",
    "scoredAs": "split-set",
    "splitSessionId": "2026-09-26-kuehne-juan",
    "splitSetIndex": 1,
    "replacesLegacyMatchId": "2026-09-26-sgl-02",
    "notes": "Split practice session scored set-by-set per Aidan 2026-11-01. Set 1: Juan Gomez won 6-0. Set 2: William Kuehne won 6-2.",
    "legacyMatchId": "2026-09-26-sgl-02"
  },
  {
    "id": "2026-09-26-sgl-03",
    "date": "2026-09-26",
    "sequence": 3,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Will Kuehne"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Juan Gomez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      }
    ],
    "legacyScoreRaw": "6-2 (set 2 of a split session; session score 0-6, 6-2 from Kuehne's perspective)",
    "sourceInstances": 2,
    "source": "legacy",
    "scoredAs": "split-set",
    "splitSessionId": "2026-09-26-kuehne-juan",
    "splitSetIndex": 2,
    "replacesLegacyMatchId": "2026-09-26-sgl-02",
    "notes": "Split practice session scored set-by-set per Aidan 2026-11-01. Set 1: Juan Gomez won 6-0. Set 2: William Kuehne won 6-2.",
    "legacyMatchId": "2026-09-26-sgl-02"
  },
  {
    "id": "2026-09-26-sgl-04",
    "date": "2026-09-26",
    "sequence": 4,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Carlos Gomez"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Will Kuehne"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          4
        ]
      }
    ],
    "legacyScoreRaw": "6-4",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-09-26-sgl-03"
  },
  {
    "id": "2026-09-26-sgl-05",
    "date": "2026-09-26",
    "sequence": 5,
    "format": "singles",
    "context": "practice",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Juan Gomez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          1
        ]
      },
      {
        "games": [
          6,
          0
        ]
      }
    ],
    "legacyScoreRaw": "6-1, 6-0",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-09-26-sgl-04"
  },
  {
    "id": "2026-09-26-sgl-06",
    "date": "2026-09-26",
    "sequence": 6,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Carlos Gomez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          4
        ]
      }
    ],
    "legacyScoreRaw": "6-4",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-09-26-sgl-05"
  },
  {
    "id": "2026-09-29-sgl-01",
    "date": "2026-09-29",
    "sequence": 1,
    "format": "singles",
    "context": "practice",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Carlos Gomez"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Nick Velar"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          7,
          5
        ]
      },
      {
        "games": [
          6,
          4
        ]
      }
    ],
    "legacyScoreRaw": "7-5, 6-4",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-09-29-sgl-01"
  },
  {
    "id": "2026-10-03-dbl-01",
    "date": "2026-10-03",
    "sequence": 1,
    "format": "doubles",
    "context": "practice",
    "completion": "partial-set",
    "sides": [
      {
        "players": [
          {
            "name": "Aidan Veres"
          },
          {
            "name": "Alec Bryant"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Adam D'Anna"
          },
          {
            "name": "Jonathan Jaffe"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          5,
          4
        ]
      }
    ],
    "legacyScoreRaw": "5-4",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-03-dbl-01"
  },
  {
    "id": "2026-10-03-dbl-02",
    "date": "2026-10-03",
    "sequence": 2,
    "format": "doubles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Carlos Gomez"
          },
          {
            "name": "Patrick Rubenstein"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Tyler Crowe"
          },
          {
            "name": "Justin Legido"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          4
        ]
      }
    ],
    "legacyScoreRaw": "6-4",
    "sourceInstances": 4,
    "source": "legacy",
    "legacyMatchId": "2026-10-03-dbl-02"
  },
  {
    "id": "2026-10-03-sgl-03",
    "date": "2026-10-03",
    "sequence": 3,
    "format": "singles",
    "context": "practice",
    "completion": "partial-set",
    "sides": [
      {
        "players": [
          {
            "name": "Alec Bryant"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Adam D'Anna"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          5,
          2
        ]
      }
    ],
    "legacyScoreRaw": "5-2",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-03-sgl-03"
  },
  {
    "id": "2026-10-03-sgl-04",
    "date": "2026-10-03",
    "sequence": 4,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Carlos Gomez"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Patrick Rubenstein"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          0
        ]
      }
    ],
    "legacyScoreRaw": "6-0",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-03-sgl-04"
  },
  {
    "id": "2026-10-03-sgl-05",
    "date": "2026-10-03",
    "sequence": 5,
    "format": "singles",
    "context": "practice",
    "completion": "forfeit",
    "scoredAs": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Tyler Crowe"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [],
    "legacyScoreRaw": "3-2 forfeit",
    "sourceInstances": 2,
    "source": "legacy",
    "forfeitType": "voluntary",
    "stoppageScore": [
      3,
      2
    ],
    "notes": "Voluntary forfeit (quitting) per Aidan 2026-11-01: decisive single-set win/loss regardless of the 3-2 stoppage score.",
    "legacyMatchId": "2026-10-03-sgl-05"
  },
  {
    "id": "2026-10-03-sgl-06",
    "date": "2026-10-03",
    "sequence": 6,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Jonathan Jaffe"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          7,
          5
        ]
      }
    ],
    "legacyScoreRaw": "7-5",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-03-sgl-06"
  },
  {
    "id": "2026-10-03-sgl-07",
    "date": "2026-10-03",
    "sequence": 7,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Jonathan Jaffe"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Aidan Veres"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          1
        ]
      }
    ],
    "legacyScoreRaw": "6-1",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-03-sgl-07"
  },
  {
    "id": "2026-10-05-dbl-01",
    "date": "2026-10-05",
    "sequence": 1,
    "format": "doubles",
    "context": "practice",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Aidan Veres"
          },
          {
            "name": "Will Kuehne"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Logan Roschman"
          },
          {
            "name": "Nick Velar"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      },
      {
        "games": [
          0,
          6
        ]
      },
      {
        "games": [
          1,
          0
        ],
        "tiebreak": [
          10,
          5
        ],
        "matchTiebreak": true
      }
    ],
    "legacyScoreRaw": "6-2, 0-6, 10-5",
    "sourceInstances": 6,
    "source": "legacy",
    "legacyMatchId": "2026-10-05-dbl-01"
  },
  {
    "id": "2026-10-07-dbl-01",
    "date": "2026-10-07",
    "sequence": 1,
    "format": "doubles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Aidan Veres"
          },
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Sterling Savill"
          },
          {
            "name": "Jose (guest)"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      }
    ],
    "legacyScoreRaw": "6-2",
    "sourceInstances": 6,
    "source": "legacy",
    "legacyMatchId": "2026-10-07-dbl-01"
  },
  {
    "id": "2026-10-07-dbl-02",
    "date": "2026-10-07",
    "sequence": 2,
    "format": "doubles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Nick Velar"
          },
          {
            "name": "Sterling Savill"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Will Kuehne"
          },
          {
            "name": "Justin Legido"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          7,
          6
        ],
        "tiebreak": [
          10,
          5
        ]
      }
    ],
    "legacyScoreRaw": "7-6 (10-5)",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-07-dbl-02"
  },
  {
    "id": "2026-10-07-sgl-03",
    "date": "2026-10-07",
    "sequence": 3,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Aidan Veres"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Jose (guest)"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      }
    ],
    "legacyScoreRaw": "6-2",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-07-sgl-03"
  },
  {
    "id": "2026-10-10-dbl-01",
    "date": "2026-10-10",
    "sequence": 1,
    "format": "doubles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Aidan Veres"
          },
          {
            "name": "Will Kuehne"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Tyler Crowe"
          },
          {
            "name": "Juan Gomez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          7,
          6
        ],
        "tiebreak": [
          10,
          4
        ]
      }
    ],
    "legacyScoreRaw": "7-6 (10-4)",
    "sourceInstances": 6,
    "source": "legacy",
    "legacyMatchId": "2026-10-10-dbl-01"
  },
  {
    "id": "2026-10-10-sgl-02",
    "date": "2026-10-10",
    "sequence": 2,
    "format": "singles",
    "context": "practice",
    "completion": "partial-set",
    "sides": [
      {
        "players": [
          {
            "name": "Juan Gomez"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Aidan Veres"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          4,
          3
        ]
      }
    ],
    "legacyScoreRaw": "4-3",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-10-sgl-02"
  },
  {
    "id": "2026-10-10-sgl-03",
    "date": "2026-10-10",
    "sequence": 3,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Tyler Crowe"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Kevin Rodengen"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          4
        ]
      }
    ],
    "legacyScoreRaw": "6-4",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-10-sgl-03"
  },
  {
    "date": "2026-10-10",
    "format": "singles",
    "context": "practice",
    "completion": "partial-set",
    "sides": [
      {
        "players": [
          {
            "name": "Will Kuehne"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Nick Velar"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          5,
          3
        ]
      }
    ],
    "scoreRaw": "5-3",
    "notes": "From the canonical fall CSV (CSV names him Nicholas Velar; board name Nick Velar). Partial set classified on games reached (5-3 = competitive). Same-day sequence assigned after the existing 2026-10-10 records; no time is recorded and no same-day singles reference depends on the order.",
    "source": "canonical-csv",
    "sequence": 4,
    "legacyMatchId": null,
    "id": "2026-10-10-sgl-04"
  },
  {
    "id": "2026-10-14-dbl-01",
    "date": "2026-10-14",
    "sequence": 1,
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Sterling Savill"
          },
          {
            "name": "Juan Gomez"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Alejandro Jose Hernandez"
          },
          {
            "name": "Pedro Homes"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      },
      {
        "games": [
          5,
          7
        ]
      },
      {
        "games": [
          1,
          0
        ],
        "matchTiebreak": true
      }
    ],
    "legacyScoreRaw": "6-2, 5-7, 1-0",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-14-dbl-01"
  },
  {
    "id": "2026-10-14-dbl-02",
    "date": "2026-10-14",
    "sequence": 2,
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Carlos Gomez"
          },
          {
            "name": "Patrick Rubenstein"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Brad Kaine"
          },
          {
            "name": "Nolan Sutker"
          }
        ]
      }
    ],
    "winnerSide": 1,
    "sets": [
      {
        "games": [
          1,
          6
        ]
      },
      {
        "games": [
          6,
          0
        ]
      },
      {
        "games": [
          0,
          1
        ],
        "matchTiebreak": true
      }
    ],
    "legacyScoreRaw": "1-6, 6-0, 1-0",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-14-dbl-02"
  },
  {
    "id": "2026-10-14-dbl-03",
    "date": "2026-10-14",
    "sequence": 3,
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Nick Velar"
          },
          {
            "name": "Michael Adler"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Juan Sanabria"
          },
          {
            "name": "Damian Ugerman"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      },
      {
        "games": [
          6,
          2
        ]
      }
    ],
    "legacyScoreRaw": "6-2, 6-2",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-14-dbl-03"
  },
  {
    "id": "2026-10-14-sgl-04",
    "date": "2026-10-14",
    "sequence": 4,
    "format": "singles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Jonathan Jaffe"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Andres Rojas"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          4
        ]
      },
      {
        "games": [
          7,
          6
        ]
      }
    ],
    "legacyScoreRaw": "6-4, 7-6",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-10-14-sgl-04"
  },
  {
    "id": "2026-10-14-sgl-05",
    "date": "2026-10-14",
    "sequence": 5,
    "format": "singles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Logan Roschman"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Oliver Matheus"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      },
      {
        "games": [
          6,
          3
        ]
      }
    ],
    "legacyScoreRaw": "6-2, 6-3",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-10-14-sgl-05"
  },
  {
    "id": "2026-10-21-dbl-01",
    "date": "2026-10-21",
    "sequence": 1,
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Will Kuehne"
          },
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Rewal Alonso"
          },
          {
            "name": "Fernando Ely"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          3
        ]
      },
      {
        "games": [
          6,
          7
        ]
      },
      {
        "games": [
          1,
          0
        ],
        "tiebreak": [
          10,
          2
        ],
        "matchTiebreak": true
      }
    ],
    "legacyScoreRaw": "6-3, 6-7, 1-0 (TB 10-2)",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-21-dbl-01"
  },
  {
    "id": "2026-10-21-dbl-02",
    "date": "2026-10-21",
    "sequence": 2,
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Nick Velar"
          },
          {
            "name": "Michael Adler"
          }
        ]
      },
      {
        "players": [
          {
            "name": "David Mazuera"
          },
          {
            "name": "Daniel Vilchez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          0
        ]
      },
      {
        "games": [
          6,
          4
        ]
      }
    ],
    "legacyScoreRaw": "6-0, 6-4",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-21-dbl-02"
  },
  {
    "id": "2026-10-21-sgl-03",
    "date": "2026-10-21",
    "sequence": 3,
    "format": "singles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Jonathan Jaffe"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Gonzalo García"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          4
        ]
      },
      {
        "games": [
          6,
          1
        ]
      }
    ],
    "legacyScoreRaw": "6-4, 6-1",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-10-21-sgl-03"
  },
  {
    "id": "2026-10-21-sgl-04",
    "date": "2026-10-21",
    "sequence": 4,
    "format": "singles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Logan Roschman"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Ryan Lewitt"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          3
        ]
      },
      {
        "games": [
          6,
          3
        ]
      }
    ],
    "legacyScoreRaw": "6-3, 6-3",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-10-21-sgl-04"
  },
  {
    "date": "2026-10-21",
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Parker Long"
          },
          {
            "name": "Patrick Rubenstein"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Javier Irizarry"
          },
          {
            "name": "Luis Ardila"
          }
        ]
      }
    ],
    "winnerSide": 1,
    "sets": [
      {
        "games": [
          1,
          6
        ]
      },
      {
        "games": [
          0,
          6
        ]
      }
    ],
    "scoreRaw": "1-6, 0-6",
    "leagueLine": "D3",
    "notes": "From the canonical fall CSV: league D3 vs MUMidtown/Irizarry. Missing from every legacy board.",
    "source": "canonical-csv",
    "sequence": 5,
    "legacyMatchId": null,
    "id": "2026-10-21-dbl-05"
  },
  {
    "id": "2026-10-24-sgl-01",
    "date": "2026-10-24",
    "sequence": 1,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Aidan Veres"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Juan Gomez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          1
        ]
      }
    ],
    "legacyScoreRaw": "6-1",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-24-sgl-01"
  },
  {
    "id": "2026-10-24-sgl-02",
    "date": "2026-10-24",
    "sequence": 2,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Will Kuehne"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Juan Gomez"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          7,
          6
        ],
        "tiebreak": [
          10,
          6
        ]
      }
    ],
    "legacyScoreRaw": "7-6 (10-6)",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-24-sgl-02"
  },
  {
    "id": "2026-10-24-sgl-03",
    "date": "2026-10-24",
    "sequence": 3,
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "sides": [
      {
        "players": [
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Aidan Veres"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          4
        ]
      }
    ],
    "legacyScoreRaw": "6-4",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-24-sgl-03"
  },
  {
    "id": "2026-10-28-dbl-01",
    "date": "2026-10-28",
    "sequence": 1,
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Justin Legido"
          },
          {
            "name": "Sterling Savill"
          }
        ]
      },
      {
        "players": [
          {
            "name": "David Levine"
          },
          {
            "name": "James Baseman"
          }
        ]
      }
    ],
    "winnerSide": 1,
    "sets": [
      {
        "games": [
          4,
          6
        ]
      },
      {
        "games": [
          1,
          6
        ]
      }
    ],
    "legacyScoreRaw": "4-6, 1-6",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-28-dbl-01"
  },
  {
    "id": "2026-10-28-dbl-02",
    "date": "2026-10-28",
    "sequence": 2,
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Aidan Veres"
          },
          {
            "name": "Carlos Gomez"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Brian Brownstein"
          },
          {
            "name": "James Shelton"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          7,
          6
        ]
      },
      {
        "games": [
          7,
          6
        ]
      }
    ],
    "legacyScoreRaw": "7-6, 7-6",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-28-dbl-02"
  },
  {
    "id": "2026-10-28-dbl-03",
    "date": "2026-10-28",
    "sequence": 3,
    "format": "doubles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Nick Velar"
          },
          {
            "name": "Michael Adler"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Donny Ma"
          },
          {
            "name": "Santiago Moreno Escallon"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          4
        ]
      },
      {
        "games": [
          4,
          6
        ]
      },
      {
        "games": [
          1,
          0
        ],
        "matchTiebreak": true,
        "tiebreak": [
          10,
          7
        ]
      }
    ],
    "legacyScoreRaw": "6-4, 4-6, 1-0",
    "sourceInstances": 3,
    "source": "legacy",
    "legacyMatchId": "2026-10-28-dbl-03"
  },
  {
    "id": "2026-10-28-sgl-04",
    "date": "2026-10-28",
    "sequence": 4,
    "format": "singles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Jonathan Jaffe"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Charlie Levine"
          }
        ]
      }
    ],
    "winnerSide": 1,
    "sets": [
      {
        "games": [
          0,
          6
        ]
      },
      {
        "games": [
          4,
          6
        ]
      }
    ],
    "legacyScoreRaw": "0-6, 4-6",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-10-28-sgl-04"
  },
  {
    "id": "2026-10-28-sgl-05",
    "date": "2026-10-28",
    "sequence": 5,
    "format": "singles",
    "context": "league",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Logan Roschman"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Leandro Alves"
          }
        ]
      }
    ],
    "winnerSide": 1,
    "sets": [
      {
        "games": [
          6,
          7
        ]
      },
      {
        "games": [
          7,
          6
        ]
      },
      {
        "games": [
          0,
          1
        ],
        "matchTiebreak": true,
        "tiebreak": [
          7,
          10
        ]
      }
    ],
    "legacyScoreRaw": "6-7, 7-6, 1-0",
    "sourceInstances": 1,
    "source": "legacy",
    "legacyMatchId": "2026-10-28-sgl-05"
  },
  {
    "id": "2026-10-31-sgl-01",
    "date": "2026-10-31",
    "sequence": 1,
    "format": "singles",
    "context": "practice",
    "completion": "match",
    "sides": [
      {
        "players": [
          {
            "name": "Justin Legido"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Aidan Veres"
          }
        ]
      }
    ],
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          2
        ]
      },
      {
        "games": [
          6,
          2
        ]
      }
    ],
    "legacyScoreRaw": "6-2, 6-2",
    "sourceInstances": 2,
    "source": "legacy",
    "legacyMatchId": "2026-10-31-sgl-01"
  },
  {
    "date": "2026-10-31",
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "scoredAs": "split-set",
    "splitSessionId": "2026-10-31-rubenstein-kuehne",
    "sides": [
      {
        "players": [
          {
            "name": "Patrick Rubenstein"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Will Kuehne"
          }
        ]
      }
    ],
    "source": "canonical-csv",
    "splitSetIndex": 1,
    "winnerSide": 0,
    "sets": [
      {
        "games": [
          6,
          0
        ]
      }
    ],
    "scoreRaw": "6-0 (set 1 of a split session)",
    "notes": "From the canonical fall CSV. Split session scored set-by-set: set 1 Rubenstein won 6-0 (decisive).",
    "sequence": 2,
    "legacyMatchId": null,
    "id": "2026-10-31-sgl-02"
  },
  {
    "date": "2026-10-31",
    "format": "singles",
    "context": "practice",
    "completion": "single-set",
    "scoredAs": "split-set",
    "splitSessionId": "2026-10-31-rubenstein-kuehne",
    "sides": [
      {
        "players": [
          {
            "name": "Patrick Rubenstein"
          }
        ]
      },
      {
        "players": [
          {
            "name": "Will Kuehne"
          }
        ]
      }
    ],
    "source": "canonical-csv",
    "splitSetIndex": 2,
    "winnerSide": 1,
    "sets": [
      {
        "games": [
          3,
          6
        ]
      }
    ],
    "scoreRaw": "6-3 for Kuehne (set 2 of a split session; stored from Rubenstein's side as 3-6)",
    "notes": "Set 2: Kuehne won 6-3 (competitive). Stored from side 0 (Rubenstein) as 3-6.",
    "sequence": 3,
    "legacyMatchId": null,
    "id": "2026-10-31-sgl-03"
  }
];

const HISTORICAL_RESULTS = [
  {
    "id": "history-spring-2026-001",
    "sourceRow": 2,
    "date": "2026-02",
    "datePrecision": "month",
    "competition": "USTA 3.5 singles tournament, semifinal",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "James Shelton"
    ],
    "loser": [
      "Aidan Veres"
    ],
    "participants": [
      "James Shelton",
      "Aidan Veres"
    ],
    "score": "6-4, 6-4",
    "sourceOutcome": "L",
    "resultText": "James Shelton d. Aidan Veres",
    "notes": ""
  },
  {
    "id": "history-spring-2026-002",
    "sourceRow": 3,
    "date": "2026-04-15",
    "datePrecision": "day",
    "competition": "League, S2 (Jetc/Harris vs Ltc/Forman)",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Jeffrey Miller"
    ],
    "loser": [
      "Aidan Veres"
    ],
    "participants": [
      "Jeffrey Miller",
      "Aidan Veres"
    ],
    "score": "6-4, 6-0",
    "sourceOutcome": "L",
    "resultText": "Jeffrey Miller d. Aidan Veres",
    "notes": ""
  },
  {
    "id": "history-spring-2026-003",
    "sourceRow": 4,
    "date": "2026-04-15",
    "datePrecision": "day",
    "competition": "League, S1 (Jetc/Harris)",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Manny Ramirez"
    ],
    "loser": [
      "Nicholas Velar"
    ],
    "participants": [
      "Manny Ramirez",
      "Nicholas Velar"
    ],
    "score": "6-3, 6-3",
    "sourceOutcome": "L",
    "resultText": "Manny Ramirez d. Nicholas Velar",
    "notes": ""
  },
  {
    "id": "history-spring-2026-004",
    "sourceRow": 5,
    "date": "2026-04-15",
    "datePrecision": "day",
    "competition": "League, D2",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Justin Legido",
      "Brett Hattenbach"
    ],
    "loser": [
      "Francisco Vargas",
      "Khai Phan"
    ],
    "participants": [
      "Justin Legido",
      "Brett Hattenbach",
      "Francisco Vargas",
      "Khai Phan"
    ],
    "score": "6-2, 6-3",
    "sourceOutcome": "W",
    "resultText": "Justin Legido / Brett Hattenbach d. Francisco Vargas / Khai Phan",
    "notes": "Winner corrected by Aidan on 2026-11-01: Justin Legido and Brett Hattenbach won this match."
  },
  {
    "id": "history-spring-2026-005",
    "sourceRow": 6,
    "date": "2026-04-22",
    "datePrecision": "day",
    "competition": "League, S1 (Jetc/Harris vs WestonHill/Stillo)",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Jein Garcia"
    ],
    "loser": [
      "Aidan Veres"
    ],
    "participants": [
      "Jein Garcia",
      "Aidan Veres"
    ],
    "score": "6-1, 6-4",
    "sourceOutcome": "L",
    "resultText": "Jein Garcia d. Aidan Veres",
    "notes": ""
  },
  {
    "id": "history-spring-2026-006",
    "sourceRow": 7,
    "date": "2026-04-22",
    "datePrecision": "day",
    "competition": "League, S2",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Carlos Gomez"
    ],
    "loser": [
      "Luis Ponce"
    ],
    "participants": [
      "Carlos Gomez",
      "Luis Ponce"
    ],
    "score": "6-4, 6-1",
    "sourceOutcome": "W",
    "resultText": "Carlos Gomez d. Luis Ponce",
    "notes": ""
  },
  {
    "id": "history-spring-2026-007",
    "sourceRow": 8,
    "date": "2026-04-22",
    "datePrecision": "day",
    "competition": "League, S2",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Julio Cesar Hernandez Marles"
    ],
    "loser": [
      "William Kuehne"
    ],
    "participants": [
      "Julio Cesar Hernandez Marles",
      "William Kuehne"
    ],
    "score": "6-4, 6-2",
    "sourceOutcome": "L",
    "resultText": "JULIO CESAR HERNANDEZ MARLES d. William Kuehne",
    "notes": ""
  },
  {
    "id": "history-spring-2026-008",
    "sourceRow": 9,
    "date": "2026-04-22",
    "datePrecision": "day",
    "competition": "League, D1",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Jose Vera",
      "Alfonso Galindo"
    ],
    "loser": [
      "Justin Legido",
      "Ted Kim"
    ],
    "participants": [
      "Jose Vera",
      "Alfonso Galindo",
      "Justin Legido",
      "Ted Kim"
    ],
    "score": "6-0, 6-0",
    "sourceOutcome": "L",
    "resultText": "Jose Vera / Alfonso Galindo d. Justin Legido / Ted Kim",
    "notes": ""
  },
  {
    "id": "history-spring-2026-009",
    "sourceRow": 10,
    "date": "2026-04-29",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Oscar Munera"
    ],
    "loser": [
      "Nicholas Velar"
    ],
    "participants": [
      "Oscar Munera",
      "Nicholas Velar"
    ],
    "score": "6-3, 6-2",
    "sourceOutcome": "L",
    "resultText": "Oscar Munera d. Nicholas Velar",
    "notes": ""
  },
  {
    "id": "history-spring-2026-010",
    "sourceRow": 11,
    "date": "2026-04-29",
    "datePrecision": "day",
    "competition": "League, S2",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Guillermo Gonzalez"
    ],
    "loser": [
      "William Kuehne"
    ],
    "participants": [
      "Guillermo Gonzalez",
      "William Kuehne"
    ],
    "score": "6-1, 6-1",
    "sourceOutcome": "L",
    "resultText": "Guillermo Gonzalez d. William Kuehne",
    "notes": ""
  },
  {
    "id": "history-spring-2026-011",
    "sourceRow": 12,
    "date": "2026-04-29",
    "datePrecision": "day",
    "competition": "League, D1",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Hector Garcia",
      "Luciano Almada"
    ],
    "loser": [
      "Justin Legido",
      "Brett Hattenbach"
    ],
    "participants": [
      "Hector Garcia",
      "Luciano Almada",
      "Justin Legido",
      "Brett Hattenbach"
    ],
    "score": "6-1, 6-2",
    "sourceOutcome": "L",
    "resultText": "HECTOR GARCIA / Luciano Almada d. Justin Legido / Brett Hattenbach",
    "notes": ""
  },
  {
    "id": "history-spring-2026-012",
    "sourceRow": 13,
    "date": "2026-05-06",
    "datePrecision": "day",
    "competition": "League, S2 (Jetc/Harris vs C/Piccolo/Estrada)",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Alan Tsoi"
    ],
    "loser": [
      "Aidan Veres"
    ],
    "participants": [
      "Alan Tsoi",
      "Aidan Veres"
    ],
    "score": "6-2, 7-5",
    "sourceOutcome": "L",
    "resultText": "Alan Tsoi d. Aidan Veres",
    "notes": ""
  },
  {
    "id": "history-spring-2026-013",
    "sourceRow": 14,
    "date": "2026-05-06",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Carlos Gomez"
    ],
    "loser": [
      "Rafael Gordillo"
    ],
    "participants": [
      "Carlos Gomez",
      "Rafael Gordillo"
    ],
    "score": "7-5, 7-5",
    "sourceOutcome": "W",
    "resultText": "Carlos Gomez d. Rafael Gordillo",
    "notes": ""
  },
  {
    "id": "history-spring-2026-014",
    "sourceRow": 15,
    "date": "2026-05-06",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Rafael Rodriguez"
    ],
    "loser": [
      "William Kuehne"
    ],
    "participants": [
      "Rafael Rodriguez",
      "William Kuehne"
    ],
    "score": "6-3, 6-3",
    "sourceOutcome": "L",
    "resultText": "RAFAEL RODRIGUEZ d. William Kuehne",
    "notes": ""
  },
  {
    "id": "history-spring-2026-015",
    "sourceRow": 16,
    "date": "2026-05-06",
    "datePrecision": "day",
    "competition": "League, D2",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Carlos Mendoza",
      "Gustavo Maldonado"
    ],
    "loser": [
      "Justin Legido",
      "Brett Hattenbach"
    ],
    "participants": [
      "Carlos Mendoza",
      "Gustavo Maldonado",
      "Justin Legido",
      "Brett Hattenbach"
    ],
    "score": "6-3, 6-3",
    "sourceOutcome": "L",
    "resultText": "Carlos Mendoza / Gustavo Maldonado d. Justin Legido / Brett Hattenbach",
    "notes": ""
  },
  {
    "id": "history-spring-2026-016",
    "sourceRow": 17,
    "date": "2026-05-06",
    "datePrecision": "day",
    "competition": "League, D3",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Parker Long",
      "Mehdi Mohammadkhani"
    ],
    "loser": [
      "Marcelo Aguiar",
      "Fabio Santos"
    ],
    "participants": [
      "Parker Long",
      "Mehdi Mohammadkhani",
      "Marcelo Aguiar",
      "Fabio Santos"
    ],
    "score": "2-6, 6-4, 1-0",
    "sourceOutcome": "W",
    "resultText": "Parker Long / Mehdi Mohammadkhani d. Marcelo Aguiar / Fabio Santos",
    "notes": "Partnerships corrected by Aidan on 2026-11-01: Parker Long partnered Mehdi Mohammadkhani."
  },
  {
    "id": "history-spring-2026-017",
    "sourceRow": 18,
    "date": "2026-05-20",
    "datePrecision": "day",
    "competition": "League, S1 (Jetc/Harris vs Parkland/Danini)",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Aidan Veres"
    ],
    "loser": [
      "Leandro Alves"
    ],
    "participants": [
      "Aidan Veres",
      "Leandro Alves"
    ],
    "score": "2-6, 7-5, 1-0",
    "sourceOutcome": "W",
    "resultText": "Aidan Veres d. Leandro Alves",
    "notes": ""
  },
  {
    "id": "history-spring-2026-018",
    "sourceRow": 19,
    "date": "2026-05-20",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Miguel Florez Parra"
    ],
    "loser": [
      "Carlos Gomez"
    ],
    "participants": [
      "Miguel Florez Parra",
      "Carlos Gomez"
    ],
    "score": "6-4, 6-3",
    "sourceOutcome": "L",
    "resultText": "Miguel Florez Parra d. Carlos Gomez",
    "notes": ""
  },
  {
    "id": "history-spring-2026-019",
    "sourceRow": 20,
    "date": "2026-05-20",
    "datePrecision": "day",
    "competition": "League, S2",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "William Kuehne"
    ],
    "loser": [
      "Luis Ponce"
    ],
    "participants": [
      "William Kuehne",
      "Luis Ponce"
    ],
    "score": "4-6, 6-3, 1-0",
    "sourceOutcome": "W",
    "resultText": "William Kuehne d. Luis Ponce",
    "notes": ""
  },
  {
    "id": "history-spring-2026-020",
    "sourceRow": 21,
    "date": "2026-05-20",
    "datePrecision": "day",
    "competition": "League, D1",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Egor Frantsevskiy",
      "Alexey Rasskazov"
    ],
    "loser": [
      "Parker Long",
      "Daniel Zimmerman"
    ],
    "participants": [
      "Egor Frantsevskiy",
      "Alexey Rasskazov",
      "Parker Long",
      "Daniel Zimmerman"
    ],
    "score": "6-1, 6-1",
    "sourceOutcome": "L",
    "resultText": "Egor Frantsevskiy / Alexey Rasskazov d. Parker Long / Daniel Zimmerman",
    "notes": ""
  },
  {
    "id": "history-spring-2026-021",
    "sourceRow": 22,
    "date": "2026-05-27",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Carlos Gomez"
    ],
    "loser": [
      "William Kuehne"
    ],
    "participants": [
      "Carlos Gomez",
      "William Kuehne"
    ],
    "score": "6-0, 6-0",
    "sourceOutcome": "W",
    "resultText": "Carlos Gomez d. William Kuehne",
    "notes": ""
  },
  {
    "id": "history-spring-2026-022",
    "sourceRow": 23,
    "date": "2026-05-27",
    "datePrecision": "day",
    "competition": "League, D1 (Jetc/Harris vs Wrc/Thacker)",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Brad Kaine",
      "Miguel Agreda"
    ],
    "loser": [
      "Aidan Veres",
      "Nicholas Velar"
    ],
    "participants": [
      "Brad Kaine",
      "Miguel Agreda",
      "Aidan Veres",
      "Nicholas Velar"
    ],
    "score": "6-4, 7-5",
    "sourceOutcome": "L",
    "resultText": "Brad Kaine / Miguel Agreda d. Aidan Veres / Nicholas Velar",
    "notes": ""
  },
  {
    "id": "history-spring-2026-023",
    "sourceRow": 24,
    "date": "2026-05-27",
    "datePrecision": "day",
    "competition": "League, D2",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Alejandro Jose Hernandez",
      "Jesus Brito"
    ],
    "loser": [
      "Parker Long",
      "Cleveland Johnson"
    ],
    "participants": [
      "Alejandro Jose Hernandez",
      "Jesus Brito",
      "Parker Long",
      "Cleveland Johnson"
    ],
    "score": "6-2, 6-1",
    "sourceOutcome": "L",
    "resultText": "Alejandro Jose Hernandez / Jesus Brito d. Parker Long / Cleveland Johnson",
    "notes": ""
  },
  {
    "id": "history-spring-2026-024",
    "sourceRow": 25,
    "date": "2026-06-03",
    "datePrecision": "day",
    "competition": "League, S2 (Jetc/Harris vs Midtown/Sadoughi)",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Aidan Veres"
    ],
    "loser": [
      "Aldri Franco"
    ],
    "participants": [
      "Aidan Veres",
      "Aldri Franco"
    ],
    "score": "3-6, 6-3, 1-0",
    "sourceOutcome": "W",
    "resultText": "Aidan Veres d. Aldri Franco",
    "notes": ""
  },
  {
    "id": "history-spring-2026-025",
    "sourceRow": 26,
    "date": "2026-06-03",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Jose Li"
    ],
    "loser": [
      "Nicholas Velar"
    ],
    "participants": [
      "Jose Li",
      "Nicholas Velar"
    ],
    "score": "6-1, 6-2",
    "sourceOutcome": "L",
    "resultText": "Jose Li d. Nicholas Velar",
    "notes": ""
  },
  {
    "id": "history-spring-2026-026",
    "sourceRow": 27,
    "date": "2026-06-03",
    "datePrecision": "day",
    "competition": "League, D1",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Gustavo Molina",
      "Gabriel Luna"
    ],
    "loser": [
      "William Kuehne",
      "Justin Legido"
    ],
    "participants": [
      "Gustavo Molina",
      "Gabriel Luna",
      "William Kuehne",
      "Justin Legido"
    ],
    "score": "6-3, 6-4",
    "sourceOutcome": "L",
    "resultText": "Gustavo Molina / Gabriel Luna d. William Kuehne / Justin Legido",
    "notes": ""
  },
  {
    "id": "history-spring-2026-027",
    "sourceRow": 28,
    "date": "2026-06-03",
    "datePrecision": "day",
    "competition": "League, D2",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Cartos Soberon",
      "Saeid Sadoughi"
    ],
    "loser": [
      "Parker Long",
      "Daniel Zimmerman"
    ],
    "participants": [
      "Cartos Soberon",
      "Saeid Sadoughi",
      "Parker Long",
      "Daniel Zimmerman"
    ],
    "score": "6-1, 6-1",
    "sourceOutcome": "L",
    "resultText": "Cartos Soberon / Saeid Sadoughi d. Parker Long / Daniel Zimmerman",
    "notes": ""
  },
  {
    "id": "history-spring-2026-028",
    "sourceRow": 29,
    "date": "2026-06-08",
    "datePrecision": "day",
    "competition": "League, S1 (Jetc/Harris vs HeronBay/Kumar)",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Aidan Veres"
    ],
    "loser": [
      "Darren Banham"
    ],
    "participants": [
      "Aidan Veres",
      "Darren Banham"
    ],
    "score": "6-3, 6-3",
    "sourceOutcome": "W",
    "resultText": "Aidan Veres d. Darren Banham",
    "notes": ""
  },
  {
    "id": "history-spring-2026-029",
    "sourceRow": 30,
    "date": "2026-06-08",
    "datePrecision": "day",
    "competition": "League, S2",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Kar Cheg"
    ],
    "loser": [
      "Nicholas Velar"
    ],
    "participants": [
      "Kar Cheg",
      "Nicholas Velar"
    ],
    "score": "7-6, 6-4",
    "sourceOutcome": "L",
    "resultText": "Kar Cheg d. Nicholas Velar",
    "notes": ""
  },
  {
    "id": "history-spring-2026-030",
    "sourceRow": 31,
    "date": "2026-06-08",
    "datePrecision": "day",
    "competition": "League, D2",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Cole Jago",
      "Vishal Gadani"
    ],
    "loser": [
      "Justin Legido",
      "Brett Hattenbach"
    ],
    "participants": [
      "Cole Jago",
      "Vishal Gadani",
      "Justin Legido",
      "Brett Hattenbach"
    ],
    "score": "6-3, 6-3",
    "sourceOutcome": "L",
    "resultText": "Cole Jago / Vishal Gadani d. Justin Legido / Brett Hattenbach",
    "notes": ""
  },
  {
    "id": "history-spring-2026-031",
    "sourceRow": 32,
    "date": "2026-06-08",
    "datePrecision": "day",
    "competition": "League, D3",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "William Kuehne",
      "Praveen Viswanathan"
    ],
    "loser": [
      "Sharath Kumar",
      "Jim Wharton"
    ],
    "participants": [
      "William Kuehne",
      "Praveen Viswanathan",
      "Sharath Kumar",
      "Jim Wharton"
    ],
    "score": "6-0, 6-1",
    "sourceOutcome": "W",
    "resultText": "William Kuehne / Praveen Viswanathan d. Sharath Kumar / Jim Wharton",
    "notes": ""
  },
  {
    "id": "history-spring-2026-032",
    "sourceRow": 33,
    "date": "2026-06-10",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Juan Camilo Moya (DQ)"
    ],
    "loser": [
      "Carlos Gomez"
    ],
    "participants": [
      "Juan Camilo Moya (DQ)",
      "Carlos Gomez"
    ],
    "score": "6-3, 6-3",
    "sourceOutcome": "L",
    "resultText": "Juan Camilo Moya (DQ) d. Carlos Gomez",
    "notes": ""
  },
  {
    "id": "history-spring-2026-033",
    "sourceRow": 34,
    "date": "2026-06-10",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Justin Legido"
    ],
    "loser": [
      "Luis Alberto Gutierrez"
    ],
    "participants": [
      "Justin Legido",
      "Luis Alberto Gutierrez"
    ],
    "score": "7-5, 3-6, 1-0",
    "sourceOutcome": "W",
    "resultText": "Justin Legido d. Luis Alberto Gutierrez",
    "notes": ""
  },
  {
    "id": "history-spring-2026-034",
    "sourceRow": 35,
    "date": "2026-06-10",
    "datePrecision": "day",
    "competition": "League, S2",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "William Kuehne"
    ],
    "loser": [
      "Cruz Rotundo"
    ],
    "participants": [
      "William Kuehne",
      "Cruz Rotundo"
    ],
    "score": "2-6, 6-2, 1-0",
    "sourceOutcome": "W",
    "resultText": "William Kuehne d. Cruz Rotundo",
    "notes": ""
  },
  {
    "id": "history-spring-2026-035",
    "sourceRow": 36,
    "date": "2026-06-10",
    "datePrecision": "day",
    "competition": "League, D1",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Ivan Carrero",
      "James Baseman"
    ],
    "loser": [
      "Parker Long",
      "Jim Wharton"
    ],
    "participants": [
      "Ivan Carrero",
      "James Baseman",
      "Parker Long",
      "Jim Wharton"
    ],
    "score": "6-3, 6-0",
    "sourceOutcome": "L",
    "resultText": "Ivan Carrero / James Baseman d. Parker Long / Jim Wharton",
    "notes": ""
  },
  {
    "id": "history-spring-2026-036",
    "sourceRow": 37,
    "date": "2026-06-17",
    "datePrecision": "day",
    "competition": "League, S2",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Lester Suarez"
    ],
    "loser": [
      "Nicholas Velar"
    ],
    "participants": [
      "Lester Suarez",
      "Nicholas Velar"
    ],
    "score": "3-6, 6-2, 1-0",
    "sourceOutcome": "L",
    "resultText": "Lester Suarez d. Nicholas Velar",
    "notes": ""
  },
  {
    "id": "history-spring-2026-037",
    "sourceRow": 38,
    "date": "2026-06-17",
    "datePrecision": "day",
    "competition": "League, S1",
    "format": "singles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Dorian Pieters"
    ],
    "loser": [
      "William Kuehne"
    ],
    "participants": [
      "Dorian Pieters",
      "William Kuehne"
    ],
    "score": "6-1, 6-1",
    "sourceOutcome": "L",
    "resultText": "Dorian Pieters d. William Kuehne",
    "notes": ""
  },
  {
    "id": "history-spring-2026-038",
    "sourceRow": 39,
    "date": "2026-06-17",
    "datePrecision": "day",
    "competition": "League, D3 (Jetc/Harris vs Piccolo/Garcia)",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Jean Claude El Jerdi",
      "Jonnattan Diaz"
    ],
    "loser": [
      "Aidan Veres",
      "Phillip Harris"
    ],
    "participants": [
      "Jean Claude El Jerdi",
      "Jonnattan Diaz",
      "Aidan Veres",
      "Phillip Harris"
    ],
    "score": "6-1, 6-0",
    "sourceOutcome": "L",
    "resultText": "Jean Claude El Jerdi / Jonnattan Diaz d. Aidan Veres / Phillip Harris",
    "notes": ""
  },
  {
    "id": "history-spring-2026-039",
    "sourceRow": 40,
    "date": "2026-06-17",
    "datePrecision": "day",
    "competition": "League, D1",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Shane Wells",
      "Mario Garcia"
    ],
    "loser": [
      "Justin Legido",
      "Daniel Zimmerman"
    ],
    "participants": [
      "Shane Wells",
      "Mario Garcia",
      "Justin Legido",
      "Daniel Zimmerman"
    ],
    "score": "6-2, 6-1",
    "sourceOutcome": "L",
    "resultText": "Shane Wells / Mario Garcia d. Justin Legido / Daniel Zimmerman",
    "notes": ""
  },
  {
    "id": "history-spring-2026-040",
    "sourceRow": 41,
    "date": "2026-07-08",
    "datePrecision": "day",
    "competition": "Combo 7.5, D1",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Carlos Gomez",
      "Alejandro Zuniga"
    ],
    "loser": [
      "Mario Rosa",
      "Manolo Aguero"
    ],
    "participants": [
      "Carlos Gomez",
      "Alejandro Zuniga",
      "Mario Rosa",
      "Manolo Aguero"
    ],
    "score": "6-4, 6-3",
    "sourceOutcome": "W",
    "resultText": "Carlos Gomez / Alejandro Zuniga d. Mario Rosa / Manolo Aguero",
    "notes": ""
  },
  {
    "id": "history-spring-2026-041",
    "sourceRow": 42,
    "date": "2026-07-22",
    "datePrecision": "day",
    "competition": "Combo 7.5, D1",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Alex Anderson",
      "Donovan Lue"
    ],
    "loser": [
      "Carlos Gomez",
      "Diego Mazza"
    ],
    "participants": [
      "Alex Anderson",
      "Donovan Lue",
      "Carlos Gomez",
      "Diego Mazza"
    ],
    "score": "6-4, 6-1",
    "sourceOutcome": "L",
    "resultText": "Alex Anderson / Donovan Lue d. Carlos Gomez / Diego Mazza",
    "notes": ""
  },
  {
    "id": "history-spring-2026-042",
    "sourceRow": 43,
    "date": "2026-08-04",
    "datePrecision": "day",
    "competition": "Combo 7.5, D2",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Carlos Gomez",
      "Rafael Jacinto"
    ],
    "loser": [
      "Diego Mazza",
      "Walter Zucca"
    ],
    "participants": [
      "Carlos Gomez",
      "Rafael Jacinto",
      "Diego Mazza",
      "Walter Zucca"
    ],
    "score": "4-6, 6-4, 1-0",
    "sourceOutcome": "W",
    "resultText": "Carlos Gomez / Rafael Jacinto d. Diego Mazza / Walter Zucca",
    "notes": ""
  },
  {
    "id": "history-spring-2026-043",
    "sourceRow": 44,
    "date": "2026-08-27",
    "datePrecision": "day",
    "competition": "Combo 7.5, D2",
    "format": "doubles",
    "displayOnly": true,
    "countsForScore": false,
    "winner": [
      "Dorian Pieters",
      "Roberto Gentile"
    ],
    "loser": [
      "Carlos Gomez",
      "Javier Tejeda-Vera"
    ],
    "participants": [
      "Dorian Pieters",
      "Roberto Gentile",
      "Carlos Gomez",
      "Javier Tejeda-Vera"
    ],
    "score": "6-1, 6-2",
    "sourceOutcome": "L",
    "resultText": "Dorian Pieters / Roberto Gentile d. Carlos Gomez / Javier Tejeda-Vera",
    "notes": ""
  }
];

const LAST_UPDATED = "Last update 11/01 11:28pm";

// Ranks/order from the current published boards. These are used only for
// movement arrows, deterministic tie-breaks, and the Compare view.
const CURRENT_PUBLISHED_RANKS = {
  "singles": {
    "Logan Roschman": 1,
    "Jonathan Jaffe": 2,
    "Justin Legido": 3,
    "Carlos Gomez": 4,
    "Alec Bryant": 5,
    "Kevin Rodengen": 6,
    "Aidan Veres": 7,
    "Tyler Crowe": 8,
    "Will Kuehne": 9,
    "Juan Gomez": 10,
    "Nick Velar": 11,
    "Patrick Rubenstein": 12,
    "Adam D'Anna": 13,
    "Parker Long": 14,
    "Jose (guest)": 15,
    "Sterling Savill": 16,
    "Michael Adler": 17
  },
  "doubles": {
    "Nick Velar / Michael Adler": 1,
    "Aidan Veres / Justin Legido": 2,
    "Tyler Crowe / Juan Gomez": 3,
    "Aidan Veres / Carlos Gomez": 4,
    "Aidan Veres / Alec Bryant": 5,
    "Will Kuehne / Justin Legido": 6,
    "Aidan Veres / Will Kuehne": 7,
    "Nick Velar / Sterling Savill": 8,
    "Sterling Savill / Juan Gomez": 9,
    "Carlos Gomez / Patrick Rubenstein": 10,
    "Logan Roschman / Nick Velar": 11,
    "Tyler Crowe / Justin Legido": 12,
    "Justin Legido / Sterling Savill": 13,
    "Sterling Savill / Jose (guest)": 14
  },
  "indivDoubles": {
    "Michael Adler": 1,
    "Nick Velar": 2,
    "Aidan Veres": 3,
    "Juan Gomez": 4,
    "Alec Bryant": 5,
    "Will Kuehne": 6,
    "Tyler Crowe": 7,
    "Justin Legido": 8,
    "Carlos Gomez": 9,
    "Sterling Savill": 10,
    "Patrick Rubenstein": 11,
    "Logan Roschman": 12,
    "Jose (guest)": 13,
    "Jonathan Jaffe": 14,
    "Kevin Rodengen": 15,
    "Adam D'Anna": 16,
    "Parker Long": 17
  }
};

const CURRENT_PUBLISHED_ORDER = {
  "singles": [
    "Logan Roschman",
    "Jonathan Jaffe",
    "Justin Legido",
    "Tyler Crowe",
    "Kevin Rodengen",
    "Carlos Gomez",
    "Will Kuehne",
    "Aidan Veres",
    "Nick Velar",
    "Sterling Savill",
    "Juan Gomez",
    "Alec Bryant",
    "Michael Adler",
    "Patrick Rubenstein",
    "Adam D'Anna",
    "Parker Long",
    "Jose (guest)"
  ],
  "doubles": [
    "Nick Velar / Michael Adler",
    "Aidan Veres / Carlos Gomez",
    "Will Kuehne / Justin Legido",
    "Justin Legido / Sterling Savill",
    "Carlos Gomez / Patrick Rubenstein",
    "Sterling Savill / Juan Gomez",
    "Nick Velar / Sterling Savill",
    "Aidan Veres / Justin Legido",
    "Aidan Veres / Will Kuehne",
    "Aidan Veres / Alec Bryant",
    "Logan Roschman / Nick Velar",
    "Tyler Crowe / Juan Gomez",
    "Tyler Crowe / Justin Legido",
    "Sterling Savill / Jose (guest)"
  ],
  "indivDoubles": [
    "Michael Adler",
    "Nick Velar",
    "Aidan Veres",
    "Will Kuehne",
    "Alec Bryant",
    "Justin Legido",
    "Juan Gomez",
    "Carlos Gomez",
    "Sterling Savill",
    "Patrick Rubenstein",
    "Tyler Crowe",
    "Logan Roschman",
    "Jonathan Jaffe",
    "Kevin Rodengen",
    "Adam D'Anna",
    "Parker Long",
    "Jose (guest)"
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PLAYERS, MATCHES, HISTORICAL_RESULTS, LAST_UPDATED, CURRENT_PUBLISHED_RANKS, CURRENT_PUBLISHED_ORDER };
}
