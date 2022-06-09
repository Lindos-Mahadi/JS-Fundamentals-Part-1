// BASIC ARRAY OPERATIONS METHOD

const friends = ['Michael', 'Steven', 'Peter', 'Jonas', 'Scedtmann'];

// Add elements
console.log(friends);
console.log([friends.length]);


// Input element
friends.push('Mahadi');
console.log(friends);
console.log([friends.length]);

friends.push('lindos');
console.log(friends);
console.log([friends.length]);

const newLength = friends.push('Mahadi');
console.log(friends);
console.log([friends.length]);

// Remove element
friends.pop('Mahadi');
console.log(friends);
console.log([friends.length]);

// First element
friends.shift();
console.log(friends);
console.log([friends.length]);

// Last element
friends.unshift('lindos');
console.log(friends);
console.log([friends.length]);

console.log(friends.indexOf('lindos'));

friends.push(23);
console.log(friends.includes('lindos'));
console.log(friends.includes('23'));

if (friends.includes('lindos')) {
    console.log(`You have a new friend called lindos`);
}