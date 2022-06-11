// LOOPING BACKWORDS AND LOOPS IN LOOPS

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
//     false
// ];

// // 0, 1,.....4
// // 4, 5,..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i], typeof jonas[i]);
// }

// LOOPS IN LOOP
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------Starting exercise ${exercise}`);

    // for (let rep = 1; rep < 6; rep++) {
    //     console.log(`Lifting weight repetation ${rep} 🥈`);
    // }

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: 🧯 Lifting weight repetation ${rep} 🥈`);
    }
}
