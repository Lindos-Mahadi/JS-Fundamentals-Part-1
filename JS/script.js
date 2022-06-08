// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieaces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applesPieaces = cutFruitPieaces(apples);
    const orangesPieaces = cutFruitPieaces(oranges);

    const juice = `Juice with ${applesPieaces} piece of apple and ${orangesPieaces} pieace of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));