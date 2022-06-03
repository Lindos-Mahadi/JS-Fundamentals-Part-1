// EQUALITY OPERATOR == VS ===

const age = 50;
if (age === 50) console.log('You just enough adult (strict)');

if (age == '50') console.log('You just enough adult (loose)');
if (age == 50) console.log('You just enough adult (loose)');
if (age === '50') console.log('You just enough adult (loose)');

// GET VALUE
// prompt('What is your favourite number ?');
// const getNumber = prompt('What is your favourite number ?');
// console.log(favourite);
// console.log(typeof favourite);


// convert string to number
const favourite = Number(prompt('What is your favourite number ?'));

// if (favourite === 20) {
//     console.log('Cool! ' + favourite + 'is an amazing number');
// } else if (favourite == 10) {
//     console.log('Cool! ' + favourite + ' is also an amazing number');
// } else {
//     console.log('No favourite number is found');
// }

if (favourite !== 20) {
    console.log('You dont like ' + favourite);
}