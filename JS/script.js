// CODDING CHALANGE ONE PART 2

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphines = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphines, scoreKoalas);

// const checkWinner = function (avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphines win 🏆 ${avgDolhins} vs. ${avgKoalas}`);
//     } else if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Koalas win 🏆 ${avgKoalas} vs. ${avgDolhins}`);
//     }
//     else {
//         console.log('No team wins');
//     }
// }
// checkWinner(scoreDolphines, scoreKoalas);
// checkWinner(555, 111);

// scoreDolphines = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphines, scoreKoalas);
// checkWinner(scoreDolphines, scoreKoalas);

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(44, 23, 71));

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolhins, avgKoalas);

const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins > 2 * avgKoalas) {
        console.log(`Dolphines win ${avgDolhins} 🏆 vs. Koalas ${avgKoalas}`);
    } else if (avgDolhins > 2 * avgKoalas) {
        console.log(`Koalas win ${avgKoalas} 🏆 vs. Dolphines ${avgDolhins}`);
    } else {
        console.log('No team winer');
    }
}
checkWinner(avgDolhins, avgKoalas);

checkWinner(555, 111);
avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolhins, avgKoalas);
checkWinner(avgDolhins, avgKoalas);