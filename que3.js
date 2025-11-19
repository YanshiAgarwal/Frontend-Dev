const s1 = document.getElementById("step1");
const s2 = document.getElementById("step2");
const s3 = document.getElementById("step3");
const summary = document.getElementById("summary");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const output = document.getElementById("output");

// Validation helpers
const validName = (n) => n.trim().length > 0;
const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const validPass = (p) => p.length >= 5;

// Step 1 Next
next1.onclick = () => {
    if (validName(nameInput.value)) {
        s1.style.display = "none";
        s2.style.display = "block";
    } else alert("Enter a valid name");
};

// Step 2 Next
next2.onclick = () => {
    if (validEmail(emailInput.value)) {
        s2.style.display = "none";
        s3.style.display = "block";
    } else alert("Enter a valid email");
};

// Step 3 Finish
finish.onclick = () => {
    if (validPass(passInput.value)) {
        s3.style.display = "none";
        summary.style.display = "block";

        output.innerHTML = `
            Name: ${nameInput.value}<br>
            Email: ${emailInput.value}<br>
            Password: ${passInput.value}
        `;
    } else alert("Password must be at least 5 characters");
};

// Back buttons
back1.onclick = () => {
    s2.style.display = "none";
    s1.style.display = "block";
};

back2.onclick = () => {
    s3.style.display = "none";
    s2.style.display = "block";
};
