// callback function
const showEndMessage = () => {
    console.log("Welcome to the course!");
};

// main function
const greetUser = (name, callback) => {
    console.log(`Hello ${name}`);
    callback();
};

// calling the function
greetUser("Yanshi", showEndMessage);
