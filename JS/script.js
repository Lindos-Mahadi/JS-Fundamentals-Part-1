// INTRODUCTION TO ARRAYS

const friends = ['Michael', 'Steven', 'Peter', 'Alamin', 'Monir', 'Shariar', 'Ratul'];
console.log(friends);
console.log(friends.length);
console.log(friends[2]);
console.log(friends[friends.length - 2]);

// ARRAY OBJECT
const year = new Array(2000, 2010, 2012, 2014, 206, 2018, 2020);
console.log(year);
year[1] = 2015; // input another value in array
console.log(year);

function calcAge(birthYear) {
    return 2022 - birthYear;
}
// const years = new Array(2000, 2010, 2012, 2014, 206, 2018, 2020);
const age = calcAge(year[0]);
const age1 = calcAge(year[1]);
const age2 = calcAge(year[year.length - 1]);
console.log([age, age1, age2]);

const ages = [calcAge(year[0]), calcAge(year[3]), calcAge(year[year.length - 1])];
console.log(ages);