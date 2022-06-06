// FUNCTIONS DECLARATION
function age1(birthYear) {
    return 2022 - birthYear;
}
const calAge1 = age1(1994);

// FUNCTIONS EXPRESSION
const age2 = function age2(birthYear) {
    return 2022 - birthYear;
}
const calAge2 = age2(1994);

console.log(calAge1, calAge2);
