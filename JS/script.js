// THE WHILE LOOP

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------Starting exercise ${exercise}`);
// }

// let rep = 1;

// while (rep <= 5) {
//     console.log(`Lifting weights repetion ${rep}`);

//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end.....');
}