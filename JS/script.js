// Truthy and Falsy Values

// Five Falsy Values: 0, '', undifiend, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Truthy Value
console.log(Boolean(1));
console.log(Boolean('Lindos'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Dont spent all;)");
} else {
    console.log("You should get a job;)");
}

const height = 0;
if (height) {
    console.log("Height is Defiend;)");
} else {
    console.log("Height Undifiend;)");
}


