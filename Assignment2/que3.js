// Math Utility Dashboard

let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10; // random between 10 and 50

// display result 
console.log(`Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot}`);
console.log(`Power (x^3): ${powerValue}`);
console.log(`Random Number (10-50): ${randomNumber}`);

console.log(`\n--- Summary ---`);
console.log(`For x = ${x}, the rounded value is ${roundedValue}, the square root is ${squareRoot.toFixed(3)}, 
and x³ equals ${powerValue}. A random number between 10 and 50 is ${randomNumber}.`);

