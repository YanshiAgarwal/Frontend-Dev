"use strict";
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let validTransactions = [];
let invalidTransactions = [];


for (let i = 0; i < transactions.length; i++) {

    try {
        let t = transactions[i];

        //Null entry
        if (t === null) {
            throw new Error("Transaction entry is null.");
        }

        //Missing id or amount
        if (t.id === undefined || t.amount === undefined) {
            throw new Error("Transaction has missing fields (id or amount).");
        }

        //Negative amount
        if (t.amount < 0) {
            throw new Error("Amount cannot be negative.");
        }

        validTransactions.push(t);

    } catch (err) {
        // Categorize error
        invalidTransactions.push({
            index: i,
            error: err.message
        });
    }
}

// ---------------------------
// FINAL REPORT
console.log("\n===== FINAL REPORT =====\n");

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);

console.log(`\nTotal Successful: ${validTransactions.length}`);
console.log(`Total Failed: ${invalidTransactions.length}`);
