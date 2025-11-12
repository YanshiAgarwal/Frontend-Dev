// String Manipulation Report

let productName = " wireless headphones PRO ";

// trim and lowercase
let formatted = productName.trim().toLowerCase();

//first letter capital
let words = formatted.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
}
let finalTitle = words.join(" ");

// replace "Pro" with "Pro Edition"
finalTitle = finalTitle.replace("Pro", "Pro Edition");

// output
console.log("Cleaned Title:", finalTitle);
console.log("Title Length:", finalTitle.length);

