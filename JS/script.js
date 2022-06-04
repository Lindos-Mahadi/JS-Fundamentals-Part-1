// CODDING CHALLENGE TWO

//Test Data One
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

//Test Data Two
// const massMark = 96;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log("Marks BMI is heighter than John");
} else {
    console.log("John BMI is heighter than Marks");
}
const massMarkHigherBMI = BMIMark < BMIJohn;
if (massMarkHigherBMI) {
    console.log(`Mark BMI ${massMark} is greater than Johns BMI ${massJohn}`);
} else {
    console.log(`John BMI ${BMIJohn} is less than Mark BMI ${massMark}`);
}

