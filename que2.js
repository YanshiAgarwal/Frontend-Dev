// Function 
const applyOperation = (numbers, operation) => {
    return numbers.map(num => operation(num));
};

// Callbacks
const double = n => n * 2;
const square = n => n * n;

// Using the function
const nums = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(nums, double));
console.log("Squared:", applyOperation(nums, square));
