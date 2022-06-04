// CODDING CHALLENGE TWO

// const avarageDolphine = (96 + 108 + 89) / 3;
// const avarageKoalas = (88 + 91 + 110) / 3;
// console.log(avarageDolphine + " " + avarageKoalas);

// if (avarageDolphine > avarageKoalas) {
//     console.log(`Dolphine is ${avarageDolphine} winner and Koalas ${avarageKoalas}`);
// } else if (avarageKoalas > avarageDolphine) {
//     console.log(`Koalas  is ${avarageKoalas} winner and Dolphine is ${avarageDolphine}`);
// } else if (avarageKoalas === avarageDolphine) {
//     console.log(`The match is drow. Koalas is  ${avarageKoalas} and Dolphine is ${avarageDolphine}`);
// }

// BONUS One
// const avarageDolphine = (97 + 112 + 101) / 3;
// const avarageKoalas = (109 + 95 + 123) / 3;
// console.log(avarageDolphine + " " + avarageKoalas);

// if (avarageDolphine > avarageKoalas && avarageDolphine >= 100) {
//     console.log(`Dolphine is ${avarageDolphine} winner and Koalas ${avarageKoalas}`);
// } else if (avarageKoalas > avarageDolphine && avarageKoalas >= 100) {
//     console.log(`Koalas  is ${avarageKoalas} winner and Dolphine is ${avarageDolphine}`);
// } else if (avarageKoalas === avarageDolphine) {
//     console.log(`The match is drow. Koalas is  ${avarageKoalas} and Dolphine is ${avarageDolphine}`); 
// }

// BONUS Two
const avarageDolphine = (97 + 112 + 81) / 3;
const avarageKoalas = (109 + 95 + 86) / 3;
console.log(avarageDolphine + " " + avarageKoalas);

if (avarageDolphine > avarageKoalas && avarageDolphine >= 100) {
    console.log(`Dolphine is ${avarageDolphine} winner and Koalas ${avarageKoalas}`);
} else if (avarageKoalas > avarageDolphine && avarageKoalas >= 100) {
    console.log(`Koalas  is ${avarageKoalas} winner and Dolphine is ${avarageDolphine}`);
} else if (avarageKoalas === avarageDolphine && avarageDolphine >= 100 && avarageKoalas >= 100) {
    console.log(`The match is drow. Koalas is  ${avarageKoalas} and Dolphine is also ${avarageDolphine}`);
} else {
    console.log('No one wins the trophy');
}