// FUNCTIONS

function logger() {
    console.log('My name is Mahadi');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
    // return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0)); 

const appleOrangeJuice = fruitProcessor(3, 1);
console.log(appleOrangeJuice);
