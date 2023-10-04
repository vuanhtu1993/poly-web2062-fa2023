const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  player: [
    [
      "Neuer",
      "Pavad",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Now 9th, 2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.player;
console.log(players1, players2);

//2
const [GK, ...fieldPlayers] = players1;
console.log(GK, fieldPlayers);

//3
const allPlayer = [...players1, ...players2];
console.log(allPlayer);

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

//printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
//printGoals("Davies", "Muller");
printGoals(...game.scored);

//7
team1 < team2 && console.log["Team 1 is more likely to win"];
team1 > team2 && console.log["Team 2 is more likely to win"];

//8
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//9
const odds = Object.values(game.odds);
let averago = 0;
for (const odd of odds) averago += odd;
averago /= odds.length;
console.log(averago);

//10
for (const [Team, odd] of Object.entries(game.odds)) {
  const teamStr = Team === "x" ? "draw" : `victory ${game[Team]}`;
  console.log(`Odd Of ${teamStr} ${odd}`);
}

const gameEvents = new Map([
  [17, "GOAL"],
  [35, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [89, "GOAL"],
  [90, "Yellow card"],
]);

//11
const events = [...new Set(gameEvents.values())];
console.log(events);

//12
gameEvents.delete(64);

//13
console.log(
  `An event happened, on average, event ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, event ${90 / gameEvents.size} minutes`
);

//14
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// //15
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     console.log(row, first, second);

//     const output = `${first} ${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"ok".repeat(i + 1)}`);
//   }
// });
