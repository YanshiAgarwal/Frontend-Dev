const box = document.getElementById("textBox");
const count = document.getElementById("count");
const reset = document.getElementById("reset");

const limit = 100;

box.addEventListener("keydown", (e) => {
    if (box.value.length >= limit && e.key !== "Backspace") {
        e.preventDefault();
    }
});

box.addEventListener("input", () => {
    const remaining = limit - box.value.length;
    count.textContent = remaining;

    count.className = ""; 
    if (remaining <= 0) count.classList.add("red");
    else if (remaining <= 20) count.classList.add("yellow");
});

reset.addEventListener("click", () => {
    box.value = "";
    count.textContent = 100;
    count.className = "";
});
