// FUNCTIONS ARROWS EXPRESSION

const age2 = function age2(birthYear) {
    return 2022 - birthYear;
}
const calage2 = age2(1995);


const calAge3 = birthYear => 2022 - birthYear;
const age3 = calAge3(1994);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${birthYear} years`;
}
console.log(yearUntilRetirement(1991, 'lindos'));
console.log(yearUntilRetirement(1991, 'mahadi'));