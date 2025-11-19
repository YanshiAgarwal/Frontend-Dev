// Coffee Making 

const delay = () => Math.floor(Math.random() * 1000) + 1000;

//Step 1: Boil Water
const boilWater = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.9   // 90% success
                ? resolve("Step 1: Water boiled.")
                : reject("Boiling failed! No coffee today.");
        }, delay());
    });
};

//Step 2: Brew Coffee
const brewCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.9
                ? resolve("Step 2: Coffee brewed.")
                : reject("Brewing failed!");
        }, delay());
    });
};

//Step 3: Pour Coffee
const pourCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.9
                ? resolve("Step 3: Coffee poured into cup.")
                : reject("Pouring failed!");
        }, delay());
    });
};

//Run the full process using Promise chaining 
boilWater()
    .then(msg => {
        console.log(msg);
        return brewCoffee();
    })
    .then(msg => {
        console.log(msg);
        return pourCoffee();
    })
    .then(msg => {
        console.log(msg);
        console.log("✔ Coffee ready for the team!");
    })
    .catch(err => {
        console.log("❌ Error:", err);
    });
