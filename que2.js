console.log("Start");

// Macrotask (goes to the event loop task queue)
setTimeout(() => {
    console.log("setTimeout callback (Macrotask)");
}, 0);

// Microtask (Promise jobs run before macrotasks)
Promise.resolve().then(() => {
    console.log("Promise.then callback (Microtask)");
});

console.log("End");

/*
EXPLANATION:
1. "Start" and "End" run first because they are synchronous.

2. Promise.then() is a MICROTASK.
   - After synchronous code finishes, JavaScript checks the microtask queue first.
   - So "Promise.then callback" runs before ANY macrotask.

3. setTimeout() is a MACROTASK.
   - It goes into the macrotask queue.
   - Macrotasks run *only after* all microtasks are done.

Final Execution Order:
Start
End
Promise.then callback (Microtask)
setTimeout callback (Macrotask)
*/
