// CODING CHALLENGE Three Part Two

const Mark = {
    fullName: 'Mark Killer',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const John = {
    fullName: 'John Smith',
    mass: 79,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi);
if (Mark.bmi > John.bmi) {
    console.log(`${Mark.fullName} is ${Mark.bmi} higher then John ${John.bmi}`);
} else if (John.bmi > Mark.bmi) {
    console.log(`${John.fullName} is ${John.bmi} higher then John ${Mark.bmi}`);
}
