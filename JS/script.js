// LOGICAL OPERATORS

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
// const hasGoodVision = false; //C

// console.log(hasDriversLicense && hasGoodVision); // AND operator
console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("You can drive");
// } else {
//     console.log('Someone else should drive....');
// }

if (hasDriversLicense && hasGoodVision) {
    console.log("You can drive");
} else {
    console.log('Someone else should drive....');
}