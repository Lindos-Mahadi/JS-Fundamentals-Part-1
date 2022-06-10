// OBJECT METHODS

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        // console.log(this);
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;

    }
};
// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));

// console.log(jonas.calcAge());

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());