//Scope Conflict Resolver

// Global variable 
let bonus = 5000;
let isPermanent = false; 

function calculateSalary() {
    // Local variables 
    let salary = 40000;
    let isPermanent = true;  

    if (isPermanent) {
        salary = salary + bonus;
    }

    console.log("Inside function:");
    console.log("Local isPermanent =", isPermanent);
    console.log("Total Salary =", salary);
}

// Function call
console.log("Before calling function, global isPermanent =", isPermanent);
calculateSalary();
console.log("After calling function, global isPermanent still =", isPermanent);

// Changing local or global separately
isPermanent = true;  // global variable is changed
console.log("After changing global isPermanent =", isPermanent);
calculateSalary();  // local still separate
