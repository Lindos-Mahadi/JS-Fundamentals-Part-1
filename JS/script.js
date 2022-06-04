// THE CONDITIONAL TERNARY OPERATOR

const age = 13;
// age >= 15 ? console.log('I would like to drink 🍹') : console.log('You should drink a class of watter 🤽');

const drink = age >= 18 ? 'Wine 🍷' : 'Water 🤽';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Wine 🍷';
} else {
    drink2 = 'Water 🤽';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'Water 🤽'}`);