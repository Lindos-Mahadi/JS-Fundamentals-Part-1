// CODDING CHALLANGE FOUR PART TWO

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : 0.2;
  // console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAvarage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAvarage([2, 3, 7]));
console.log(calcAvarage(totals));
console.log(calcAvarage(tips));
