// STRING AND TEMPLATE LITERALS

const firstName = 'lindos';
const job = 'developer';
const birthYear = 1994;
const year = 2022;

// DOUBLE STRING QUOTES AND SINGLE QUOTES
const fullSantence = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(fullSantence);

// BACK TICK
const fullSantenceNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(fullSantenceNew);

// MULTIPLE LINE WITH SINGLE QUOTE WITH NEW LINE
console.log('String withn\n\
multiple\n\
lines');

// TEMPLATE LITERALS
console.log(`String with 
multiple line
in JavaScript`);






