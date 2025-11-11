// E-Commerce Delivery Estimator

let orderAmount = 400;     
let isPremium = false;      
let isRemote = true;       

let deliveryFee = 0;

// Delivery fee
if (!isPremium && orderAmount < 500) {
    deliveryFee = 50;
}

let totalCost = orderAmount + deliveryFee;

// Delivery time 
let deliveryTime = 3;
if (isRemote) {
    deliveryTime += 2;
}

console.log("Total Cost: Rs" + totalCost);
console.log("Estimated Delivery Time: " + deliveryTime + " days");
