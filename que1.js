// Product Class 
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercent) {
        const discountAmount = this.price * (discountPercent / 100);
        this.price = this.price - discountAmount;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}
// sample
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Shoes", 1500, "Fashion"),
    new Product(3, "Book", 450, "Stationery"),
    new Product(4, "Smartwatch", 2500, "Electronics")
];
//10% discount
products.forEach(p => p.applyDiscount(10));

const expensiveProducts = products.filter(p => p.price > 1000);

console.log("Products With Price > 1000 After Discount:");
expensiveProducts.forEach(p => console.log(p.getDetails()));

// DOM Output
document.getElementById("output").innerText =
    "Check console for filtered products (price > 1000).";
