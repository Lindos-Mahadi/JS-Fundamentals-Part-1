// REVIEWING FUNCTIONS

const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has laready retired 💜`);
        return -1;
    }

}

console.log(yearsUntilRetirement(1994, 'lindos'));
console.log(yearsUntilRetirement(1954, 'lindos'));