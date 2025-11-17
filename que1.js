"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

function convertData(value) {
    let numberForm = Number(value);
    let booleanForm = Boolean(value);
    let stringForm = String(value);

    return { numberForm, booleanForm, stringForm };
}

console.log("----- Data Conversion Started -----");

for (let i = 0; i < apiData.length; i++) {

    let item = apiData[i];
    let result = convertData(item);

    console.log(`\nValue ${i + 1}:`, item);
    console.log("As Number:", result.numberForm);
    console.log("As Boolean:", result.booleanForm);
    console.log("As String:", result.stringForm);

    if (!isNaN(result.numberForm) && String(item).trim() !== "") {
        validNumbers.push(result.numberForm);
    } else {
        invalidNumbers.push(item);
    }
}

// Final 
console.log("\n========== Final Report ==========");

console.log("Valid Numeric Values:", validNumbers);
console.log("Invalid Numeric Values:", invalidNumbers);

console.log("\nReasons for Invalid Numbers:");
for (let j = 0; j < invalidNumbers.length; j++) {
    let val = invalidNumbers[j];

    if (val === " ") {
        console.log(`'${val}' → ignored because it's just a blank space.`);
    } 
    else if (val === "100px") {
        console.log(`'${val}' → contains alphabets, so Number() can't convert it.`);
    } 
    else if (val === "NaN") {
        console.log(`'${val}' → it's literally Not-a-Number.`);
    } 
    else {
        console.log(`'${val}' → cannot be converted to a valid number.`);
    }
}
