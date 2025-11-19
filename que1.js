const input = document.getElementById("productInput");
const list = document.getElementById("productList");
const addBtn = document.getElementById("addBtn");

// Add product
addBtn.addEventListener("click", () => {
    if (!input.value.trim()) return;
    list.innerHTML += `
        <li>
            <span class="text">${input.value}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </li>`;
    input.value = "";
});

// Event Delegation for Edit/Delete
list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    // Delete
    if (e.target.classList.contains("delete")) {
        li.remove();
    }

    // Edit
    if (e.target.classList.contains("edit")) {
        const textSpan = li.querySelector(".text");
        const oldText = textSpan.textContent;

        const tempInput = document.createElement("input");
        tempInput.value = oldText;
        tempInput.className = "editing";

        li.replaceChild(tempInput, textSpan);
        tempInput.focus();

        // Auto-save when clicking outside
        document.addEventListener("click", function handler(event) {
            if (event.target !== tempInput) {
                const newSpan = document.createElement("span");
                newSpan.className = "text";
                newSpan.textContent = tempInput.value;

                li.replaceChild(newSpan, tempInput);
                document.removeEventListener("click", handler);
            }
        });
    }
});
