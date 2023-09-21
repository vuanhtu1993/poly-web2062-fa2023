const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Nueer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: [
        'Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'
    ],
    scorers: {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
    },
    date: 'Nov 19th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }

}

// Lab1.1
// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// 3
const allPlayers = [
    ...players1,
    ...players2
];
console.log(allPlayers);

// 4
const players1final = [
    ...players1,
    'Thiago',
    'Coutinho',
    'Perisic',
];
console.log(players1final);

// 5
const {
    odds: {
        team1,
        x: draw,
        team2
    }
} = game
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
    console.log(game.scored);
    console.log(`${
        players.length
    } goals were scored`);
};
printGoals(... game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// Lab1.2
// 1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goals ${
        i + 1
    }:${player}`);
}

// 2
let average = 0;
const odds = Object.values(game.odds);
for (const add of odds) {
    average += add;
}
average /= odds.length;
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${
        game[team]
    }`;
    console.log(`Odd of ${teamStr} ${odd}`);
}
