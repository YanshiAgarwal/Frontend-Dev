// Banking Interest Calculator

let accountType = "savings";   
let amount = 120000;           
let years = 3;                

let rate;

if (accountType === "savings") {
    rate = 4;
} else if (accountType === "fd") {
    rate = 6.5;
}

if (amount > 100000) {
    rate = rate + 1;
}

//final balance calculation
let total = amount * Math.pow((1 + rate / 100), years);

console.log("Final Amount after " + years + " years: Rs" + total.toFixed(2));
