// ---------------------------------------------------------------------------
// Leaderboard data
//
// This file holds ALL the match data. To update the board, edit this file only
// — you never need to touch index.html. index.html loads this file first, then
// reads the four values defined below (singles, doubles, indivDoubles,
// lastUpdated).
//
// Each entry looks like:
//   {name, prev, score, why, last, guest, results:[ {d, o, s, p, t, win}, ... ]}
//     prev  = previous rank (number) or null if new / unranked
//     guest = true/false (hidden unless "Show guests" is checked)
//     results[].t = "league" or "practice"; results[].win = true/false
//
// After editing, also bump `lastUpdated` at the bottom.
// ---------------------------------------------------------------------------

const singles = [
  {name:"Logan Roschman", prev:3, score:18.8, why:"10/28 L Alves 6-7 7-6 1-0", last:"10/28 L Alves 6-7 7-6 1-0", guest:false, results:[
    {d:"10/28", o:"Leandro Alves (league)", s:"6-7, 7-6, 1-0", p:12, t:"league", win:false},
    {d:"10/21", o:"Ryan Lewitt (league)", s:"6-3, 6-3", p:21, t:"league", win:true},
    {d:"10/14", o:"Oliver Matheus (league)", s:"6-2, 6-3", p:24, t:"league", win:true}
  ]},
  {name:"Jonathan Jaffe", prev:4, score:15.5, why:"10/28 L Levine 0-6 4-6", last:"10/28 L Levine 0-6 4-6", guest:false, results:[
    {d:"10/28", o:"Charlie Levine (league)", s:"0-6, 4-6", p:6, t:"league", win:false},
    {d:"10/21", o:"Gonzalo García (league)", s:"6-4, 6-1", p:24, t:"league", win:true},
    {d:"10/14", o:"Andres Rojas (league)", s:"6-4, 7-6", p:21, t:"league", win:true},
    {d:"10/3", o:"Aidan (practice)", s:"6-1", p:14, t:"practice", win:true},
    {d:"10/3", o:"Justin (practice)", s:"7-5", p:6, t:"practice", win:false}
  ]},
  {name:"Justin Legido", prev:1, score:13.1, why:"Recent practice wins", last:"10/31 W Aidan 6-2 6-2", guest:false, results:[
    {d:"10/31", o:"Aidan (practice)", s:"6-2, 6-2", p:16, t:"practice", win:true},
    {d:"10/24", o:"Aidan (practice)", s:"6-4", p:12, t:"practice", win:true},
    {d:"10/3", o:"Jonathan (practice)", s:"7-5", p:12, t:"practice", win:true},
    {d:"10/3", o:"Tyler (practice)", s:"3-2 forfeit", p:14, t:"practice", win:true},
    {d:"9/26", o:"Carlos (practice)", s:"6-4", p:12, t:"practice", win:true},
    {d:"9/26", o:"Juan (practice)", s:"6-1, 6-0", p:14, t:"practice", win:true}
  ]},
  {name:"Tyler Crowe", prev:2, score:8.2, why:"Guest", last:"10/10 W Kevin 6-4", guest:true, results:[
    {d:"10/10", o:"Kevin (practice)", s:"6-4", p:12, t:"practice", win:true},
    {d:"10/3", o:"Justin (practice)", s:"3-2 forfeit", p:4, t:"practice", win:false}
  ]},
  {name:"Kevin Rodengen", prev:5, score:10.4, why:"Practice results", last:"10/10 L Tyler 6-4", guest:false, results:[
    {d:"10/10", o:"Tyler (practice)", s:"6-4", p:6, t:"practice", win:false},
    {d:"9/23", o:"Parker (practice)", s:"6-1", p:14, t:"practice", win:true},
    {d:"9/23", o:"Carlos (practice)", s:"6-3", p:12, t:"practice", win:true}
  ]},
  {name:"Carlos Gomez", prev:6, score:12.6, why:"Practice singles results", last:"10/3 W Patrick 6-0", guest:false, results:[
    {d:"10/3", o:"Patrick (practice)", s:"6-0", p:14, t:"practice", win:true},
    {d:"9/29", o:"Nick (practice)", s:"7-5, 6-4", p:12, t:"practice", win:true},
    {d:"9/26", o:"Will (practice)", s:"6-4", p:12, t:"practice", win:true},
    {d:"9/23", o:"Aidan (practice)", s:"6-3", p:12, t:"practice", win:true}
  ]},
  {name:"Will Kuehne", prev:7, score:7.5, why:"Practice singles results", last:"10/24 W Juan 7-6", guest:false, results:[
    {d:"10/24", o:"Juan (practice)", s:"7-6 (10-6)", p:10, t:"practice", win:true},
    {d:"9/26", o:"Juan (practice)", s:"0-6, 6-2", p:6, t:"practice", win:false},
    {d:"9/26", o:"Carlos (practice)", s:"6-4", p:6, t:"practice", win:false}
  ]},
  {name:"Aidan Veres", prev:8, score:12.6, why:"Practice singles results", last:"10/31 L Justin 6-2 6-2", guest:false, results:[
    {d:"10/31", o:"Justin (practice)", s:"6-2, 6-2", p:4, t:"practice", win:false},
    {d:"10/24", o:"Juan (practice)", s:"6-1", p:14, t:"practice", win:true},
    {d:"10/24", o:"Justin (practice)", s:"6-4", p:6, t:"practice", win:false},
    {d:"10/10", o:"Juan (practice)", s:"4-3", p:6, t:"practice", win:false},
    {d:"10/7", o:"Jose (practice)", s:"6-2", p:14, t:"practice", win:true},
    {d:"10/3", o:"Jonathan (practice)", s:"6-1", p:4, t:"practice", win:false}
  ]},
  {name:"Nick Velar", prev:9, score:6.0, why:"Limited singles data", last:"9/29 L Carlos 7-5 6-4", guest:false, results:[
    {d:"9/29", o:"Carlos (practice)", s:"7-5, 6-4", p:6, t:"practice", win:false}
  ]},
  {name:"Sterling Savill", prev:10, score:7.0, why:"Limited singles data", last:"No recent singles", guest:false, results:[
  ]},
  {name:"Juan Gomez", prev:11, score:6.8, why:"Recent practice results", last:"10/24 L Will 7-6", guest:false, results:[
    {d:"10/24", o:"Will (practice)", s:"7-6 (10-6)", p:6, t:"practice", win:false},
    {d:"10/24", o:"Aidan (practice)", s:"6-1", p:4, t:"practice", win:false},
    {d:"10/10", o:"Aidan (practice)", s:"4-3", p:12, t:"practice", win:true},
    {d:"9/26", o:"Will (practice)", s:"0-6, 6-2", p:8, t:"practice", win:true},
    {d:"9/26", o:"Justin (practice)", s:"6-1, 6-0", p:4, t:"practice", win:false}
  ]},
  {name:"Alec Bryant", prev:12, score:12.0, why:"10/3 W Adam 5-2", last:"10/3 W Adam 5-2", guest:false, results:[
    {d:"10/3", o:"Adam (practice)", s:"5-2", p:12, t:"practice", win:true}
  ]},
  {name:"Michael Adler", prev:13, score:0, why:"No singles data", last:"No singles results", guest:false, results:[
  ]},
  {name:"Patrick Rubenstein", prev:14, score:4.0, why:"Limited singles data", last:"10/3 L Carlos 6-0", guest:false, results:[
    {d:"10/3", o:"Carlos (practice)", s:"6-0", p:4, t:"practice", win:false}
  ]},
  {name:"Adam D'Anna", prev:15, score:4.0, why:"10/3 L Alec 5-2", last:"10/3 L Alec 5-2", guest:false, results:[
    {d:"10/3", o:"Alec (practice)", s:"5-2", p:4, t:"practice", win:false}
  ]},
  {name:"Parker Long", prev:16, score:4.0, why:"Practice singles results", last:"9/23 L Kevin 6-1", guest:false, results:[
    {d:"9/23", o:"Kevin (practice)", s:"6-1", p:4, t:"practice", win:false},
    {d:"9/23", o:"Aidan (practice)", s:"6-1", p:4, t:"practice", win:false}
  ]},
  {name:"Jose (guest)", prev:null, score:4.0, why:"Guest", last:"10/7 L Aidan 6-2", guest:true, results:[
    {d:"10/7", o:"Aidan (practice)", s:"6-2", p:4, t:"practice", win:false}
  ]}
];

const doubles = [
  {name:"Nick Velar / Michael Adler", prev:1, score:20.8, why:"League doubles wins", last:"10/28 W Ma/Escallon", guest:false, results:[
    {d:"10/28", o:"Ma/Escallon (league)", s:"6-4, 4-6, 1-0", p:15, t:"league", win:true},
    {d:"10/21", o:"Mazuera/Vilchez (league)", s:"6-0, 6-4", p:24, t:"league", win:true},
    {d:"10/14", o:"Sanabria/Ugerman (league)", s:"6-2, 6-2", p:24, t:"league", win:true}
  ]},
  {name:"Aidan Veres / Carlos Gomez", prev:3, score:12.0, why:"10/28 W Brownstein/Shelton 7-6 7-6", last:"10/28 W Brownstein/Shelton", guest:false, results:[
    {d:"10/28", o:"Brownstein/Shelton (league)", s:"7-6, 7-6", p:12, t:"league", win:true}
  ]},
  {name:"Will Kuehne / Justin Legido", prev:2, score:11.0, why:"10/21 W Alonso/Ely", last:"10/21 W Alonso/Ely", guest:false, results:[
    {d:"10/21", o:"Alonso/Ely (league)", s:"6-3, 6-7, 1-0 (TB 10-2)", p:10, t:"league", win:true},
    {d:"9/26", o:"Carlos/Juan (practice)", s:"6-2", p:14, t:"practice", win:true}
  ]},
  {name:"Justin Legido / Sterling Savill", prev:4, score:7.8, why:"10/28 L Levine/Baseman 4-6 1-6", last:"10/28 L Levine/Baseman", guest:false, results:[
    {d:"10/28", o:"Levine/Baseman (league)", s:"4-6, 1-6", p:4, t:"league", win:false}
  ]},
  {name:"Carlos Gomez / Patrick Rubenstein", prev:5, score:7.5, why:"10/14 L Kaine/Sutker", last:"10/14 L Kaine/Sutker", guest:false, results:[
    {d:"10/14", o:"Kaine/Sutker (league)", s:"1-6, 6-0, 1-0", p:6, t:"league", win:false},
    {d:"10/3", o:"Tyler/Justin (practice)", s:"6-4", p:12, t:"practice", win:true}
  ]},
  {name:"Sterling Savill / Juan Gomez", prev:6, score:7.2, why:"10/14 W Hernandez/Homes", last:"10/14 W Hernandez/Homes", guest:false, results:[
    {d:"10/14", o:"Hernandez/Homes (league)", s:"6-2, 5-7, 1-0", p:10, t:"league", win:true}
  ]},
  {name:"Nick Velar / Sterling Savill", prev:null, score:8.0, why:"10/7 W Will/Justin 7-6", last:"10/7 W Will/Justin", guest:false, results:[
    {d:"10/7", o:"Will/Justin (practice)", s:"7-6 (10-5)", p:12, t:"practice", win:true}
  ]},
  {name:"Aidan Veres / Justin Legido", prev:null, score:7.8, why:"10/7 W Sterling/Jose 6-2", last:"10/7 W Sterling/Jose", guest:false, results:[
    {d:"10/7", o:"Sterling/Jose (practice)", s:"6-2", p:14, t:"practice", win:true}
  ]},
  {name:"Aidan Veres / Will Kuehne", prev:null, score:11.6, why:"10/10 W Tyler/Juan 7-6", last:"10/10 W Tyler/Juan", guest:false, results:[
    {d:"10/10", o:"Tyler/Juan (practice)", s:"7-6 (10-4)", p:12, t:"practice", win:true},
    {d:"10/5", o:"Logan/Nick (practice)", s:"6-2, 0-6, 10-5", p:12, t:"practice", win:true}
  ]},
  {name:"Aidan Veres / Alec Bryant", prev:null, score:7.2, why:"10/3 W Adam/Jonathan 5-4", last:"10/3 W Adam/Jonathan", guest:false, results:[
    {d:"10/3", o:"Adam/Jonathan (practice)", s:"5-4", p:12, t:"practice", win:true}
  ]},
  {name:"Logan Roschman / Nick Velar", prev:null, score:6.0, why:"10/5 L Aidan/Will", last:"10/5 L Aidan/Will", guest:false, results:[
    {d:"10/5", o:"Aidan/Will (practice)", s:"6-2, 0-6, 10-5", p:6, t:"practice", win:false}
  ]},
  {name:"Tyler Crowe / Juan Gomez", prev:null, score:6.0, why:"Guest", last:"10/10 L Aidan/Will 7-6", guest:true, results:[
    {d:"10/10", o:"Aidan/Will (practice)", s:"7-6 (10-4)", p:6, t:"practice", win:false}
  ]},
  {name:"Tyler Crowe / Justin Legido", prev:null, score:6.0, why:"Guest", last:"10/3 L Patrick/Carlos 6-4", guest:true, results:[
    {d:"10/3", o:"Patrick/Carlos (practice)", s:"6-4", p:6, t:"practice", win:false}
  ]},
  {name:"Sterling Savill / Jose (guest)", prev:null, score:4.0, why:"Guest", last:"10/7 L Aidan/Justin 6-2", guest:true, results:[
    {d:"10/7", o:"Aidan/Justin (practice)", s:"6-2", p:4, t:"practice", win:false}
  ]}
];

const indivDoubles = [
  {name:"Michael Adler", prev:null, score:20.8, why:"Strong with Nick", last:"10/28 W", guest:false, results:[
    {d:"10/28", o:"w/ Nick vs Ma/Escallon", s:"6-4, 4-6, 1-0", p:15, t:"league", win:true},
    {d:"10/21", o:"w/ Nick vs Mazuera/Vilchez", s:"6-0, 6-4", p:24, t:"league", win:true},
    {d:"10/14", o:"w/ Nick vs Sanabria/Ugerman", s:"6-2, 6-2", p:24, t:"league", win:true}
  ]},
  {name:"Nick Velar", prev:null, score:18.4, why:"Multiple wins", last:"10/28 W", guest:false, results:[
    {d:"10/28", o:"w/ Mike vs Ma/Escallon", s:"6-4, 4-6, 1-0", p:15, t:"league", win:true},
    {d:"10/21", o:"w/ Mike vs Mazuera/Vilchez", s:"6-0, 6-4", p:24, t:"league", win:true},
    {d:"10/14", o:"w/ Mike vs Sanabria/Ugerman", s:"6-2, 6-2", p:24, t:"league", win:true},
    {d:"10/7", o:"w/ Sterling vs Will/Justin", s:"7-6", p:10, t:"practice", win:true},
    {d:"10/5", o:"w/ Logan vs Aidan/Will", s:"6-2, 0-6, 10-5", p:6, t:"practice", win:false}
  ]},
  {name:"Aidan Veres", prev:null, score:12.0, why:"Several pairings", last:"10/28 W", guest:false, results:[
    {d:"10/28", o:"w/ Carlos vs Brownstein/Shelton", s:"7-6, 7-6", p:12, t:"league", win:true},
    {d:"10/10", o:"w/ Will vs Tyler/Juan", s:"7-6", p:12, t:"practice", win:true},
    {d:"10/7", o:"w/ Justin vs Sterling/Jose", s:"6-2", p:14, t:"practice", win:true},
    {d:"10/5", o:"w/ Will vs Logan/Nick", s:"6-2, 0-6, 10-5", p:12, t:"practice", win:true},
    {d:"10/3", o:"w/ Alec vs Adam/Jonathan", s:"5-4", p:12, t:"practice", win:true}
  ]},
  {name:"Will Kuehne", prev:null, score:11.5, why:"Mixed", last:"10/21 W", guest:false, results:[
    {d:"10/21", o:"w/ Justin vs Alonso/Ely", s:"6-3, 6-7, 1-0", p:10, t:"league", win:true},
    {d:"10/10", o:"w/ Aidan vs Tyler/Juan", s:"7-6", p:12, t:"practice", win:true},
    {d:"10/5", o:"w/ Aidan vs Logan/Nick", s:"6-2, 0-6, 10-5", p:12, t:"practice", win:true},
    {d:"9/26", o:"w/ Justin vs Carlos/Juan", s:"6-2", p:14, t:"practice", win:true}
  ]},
  {name:"Alec Bryant", prev:null, score:6.0, why:"Single result", last:"10/3 W", guest:false, results:[
    {d:"10/3", o:"w/ Aidan vs Adam/Jonathan", s:"5-4", p:12, t:"practice", win:true}
  ]},
  {name:"Justin Legido", prev:null, score:10.0, why:"Variable", last:"10/28 L", guest:false, results:[
    {d:"10/28", o:"w/ Sterling vs Levine/Baseman", s:"4-6, 1-6", p:4, t:"league", win:false},
    {d:"10/21", o:"w/ Will vs Alonso/Ely", s:"6-3, 6-7, 1-0", p:10, t:"league", win:true},
    {d:"10/7", o:"w/ Aidan vs Sterling/Jose", s:"6-2", p:14, t:"practice", win:true},
    {d:"10/3", o:"w/ Tyler vs Patrick/Carlos", s:"6-4", p:6, t:"practice", win:false},
    {d:"9/26", o:"w/ Will vs Carlos/Juan", s:"6-2", p:14, t:"practice", win:true}
  ]},
  {name:"Juan Gomez", prev:null, score:4.7, why:"Limited", last:"10/14 W", guest:false, results:[
    {d:"10/14", o:"w/ Sterling vs Hernandez/Homes", s:"6-2, 5-7, 1-0", p:12, t:"league", win:true},
    {d:"10/10", o:"w/ Tyler vs Aidan/Will", s:"7-6", p:6, t:"practice", win:false}
  ]},
  {name:"Carlos Gomez", prev:null, score:4.5, why:"Mixed", last:"10/28 W", guest:false, results:[
    {d:"10/28", o:"w/ Aidan vs Brownstein/Shelton", s:"7-6, 7-6", p:12, t:"league", win:true},
    {d:"10/14", o:"w/ Patrick vs Kaine/Sutker", s:"1-6, 6-0, 1-0", p:6, t:"league", win:false}
  ]},
  {name:"Sterling Savill", prev:null, score:8.6, why:"Variable", last:"10/28 L", guest:false, results:[
    {d:"10/28", o:"w/ Justin vs Levine/Baseman", s:"4-6, 1-6", p:4, t:"league", win:false},
    {d:"10/14", o:"w/ Juan vs Hernandez/Homes", s:"6-2, 5-7, 1-0", p:12, t:"league", win:true},
    {d:"10/7", o:"w/ Nick vs Will/Justin", s:"7-6", p:10, t:"practice", win:true},
    {d:"10/7", o:"w/ Jose vs Aidan/Justin", s:"6-2", p:4, t:"practice", win:false}
  ]},
  {name:"Patrick Rubenstein", prev:null, score:2.9, why:"Mostly losses", last:"10/14 L", guest:false, results:[
    {d:"10/14", o:"w/ Carlos vs Kaine/Sutker", s:"1-6, 6-0, 1-0", p:6, t:"league", win:false}
  ]},
  {name:"Tyler Crowe", prev:null, score:2.9, why:"Guest", last:"10/10 L", guest:true, results:[
    {d:"10/10", o:"w/ Juan vs Aidan/Will", s:"7-6", p:6, t:"practice", win:false},
    {d:"10/3", o:"w/ Justin vs Patrick/Carlos", s:"6-4", p:6, t:"practice", win:false}
  ]},
  {name:"Logan Roschman", prev:null, score:2.8, why:"Single loss", last:"10/5 L", guest:false, results:[
    {d:"10/5", o:"w/ Nick vs Aidan/Will", s:"6-2, 0-6, 10-5", p:6, t:"practice", win:false}
  ]},
  {name:"Jonathan Jaffe", prev:null, score:0, why:"No doubles results", last:"—", guest:false, results:[]},
  {name:"Kevin Rodengen", prev:null, score:0, why:"No doubles results", last:"—", guest:false, results:[]},
  {name:"Adam D'Anna", prev:null, score:0, why:"No doubles results", last:"—", guest:false, results:[]},
  {name:"Parker Long", prev:null, score:0, why:"No doubles results", last:"—", guest:false, results:[]},
  {name:"Jose (guest)", prev:null, score:2.0, why:"Guest", last:"10/7 L", guest:true, results:[
    {d:"10/7", o:"w/ Sterling vs Aidan/Justin", s:"6-2", p:4, t:"practice", win:false}
  ]}
];

// Shown in the header. Bump this whenever you update the data above.
const lastUpdated = "Updated 10/31 10:47 AM";
