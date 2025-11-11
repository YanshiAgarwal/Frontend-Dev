// Cinema Ticketing System

let showTime = "evening";   
let age = 20;               
let tickets = 4;            

let pricePerTicket;

if (showTime === "morning") {
    pricePerTicket = 120;
} else {
    pricePerTicket = 180;
}

let basePrice = pricePerTicket * tickets;

let discount = 0;

if (age < 25) {
    discount = 0.10;      
} else if (age > 60) {
    discount = 0.20;      
}

let discountedTotal = basePrice - (basePrice * discount);

let finalAmount = discountedTotal;

if (tickets > 3) {
    finalAmount = finalAmount + 50;  
}

console.log("Base Price: Rs" + basePrice);
console.log("After Discount: Rs" + discountedTotal.toFixed(2));
console.log("Final Amount: Rs" + finalAmount.toFixed(2));
