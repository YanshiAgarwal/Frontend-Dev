"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("---- Employee Bonus Report ----");

for (let i = 0; i < employees.length; i++) {

    try {
        let emp = employees[i];

        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error("Missing employee details.");
        }

        let salaryNum = Number(emp.salary); 
        let yearsNum = Number(emp.years);

        if (isNaN(salaryNum) || isNaN(yearsNum)) {
            throw new Error("Invalid number format in employee data.");
        }

        let bonus = (yearsNum > 3)
            ? salaryNum * 0.10
            : salaryNum * 0.05;
        console.log(
            `Employee: ${emp.name}
Salary: ₹${salaryNum}
Years Worked: ${yearsNum}
Bonus Earned: ₹${bonus}
-------------------------------`
        );

    } catch (err) {
        console.log(`Error for employee entry ${i + 1}: ${err.message}\n`);
    }
}
