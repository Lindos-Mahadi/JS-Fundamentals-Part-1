// LOOPING ARRAYS, BREAKING AND CONTINUING
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
    false
];

const types = [];

for (let index = 0; index < jonasArray.length; index++) {
    // const element = jonasArray[index];
    // reading from jonasArray
    console.log(jonasArray[index], typeof jonasArray[index]);
    types.push(typeof jonasArray[index]);
}
console.log(types);

const ages = [];
const years = new Array(2000, 2010, 2012, 2014, 206, 2018, 2020);
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("CONTINUE WITH ONLY STRINGS");
for (let index = 0; index < jonasArray.length; index++) {
    if (typeof jonasArray[index] !== 'string') continue;
    console.log(jonasArray[index], typeof jonasArray[index]);
}

// continue and break
console.log("BREAK WITH ONLY NUMBERS");
for (let index = 0; index < jonasArray.length; index++) {
    if (typeof jonasArray[index] == 'number') break;
    console.log(jonasArray[index], typeof jonasArray[index]);
}