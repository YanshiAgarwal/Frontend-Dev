const user = {
    name: "Yanshi",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();   // Output: undefined


// Arrow functions do NOT have their own this.
// Instead, they take this from the outer scope (lexical this).
// In this case, the “outer scope” is the global scope, not the user object.
// Since the global scope does NOT have property name, JavaScript prints: Undefined

//fixed by normal function
const user2 = {
    name: "Yanshi",
    showName() {
        console.log(this.name);
    }
};

user2.showName();   // Output: Yanshi
