const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const pass = document.getElementById("pass");

    // Error outputs
    const nErr = document.getElementById("nameErr");
    const eErr = document.getElementById("emailErr");
    const pErr = document.getElementById("phoneErr");
    const psErr = document.getElementById("passErr");

    // Regex patterns
    const nameRe = /^[A-Za-z ]+$/;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRe = /^[0-9]{10}$/;
    const passRe = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/;

    // A small helper
    const validate = (input, msg, condition) => {
        if (!condition) {
            input.className = "error";
            msg.textContent = "Invalid input!";
            return false;
        }
        input.className = "ok";
        msg.textContent = "";
        return true;
    };

    const v1 = validate(name, nErr, nameRe.test(name.value));
    const v2 = validate(email, eErr, emailRe.test(email.value));
    const v3 = validate(phone, pErr, phoneRe.test(phone.value));
    const v4 = validate(pass, psErr, passRe.test(pass.value));

    if (v1 && v2 && v3 && v4) {
        alert("Form Submitted!");
    }
});
