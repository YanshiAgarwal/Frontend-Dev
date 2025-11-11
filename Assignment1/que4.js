// Marks Analyzer

let marks = [85, 70, 90, 60, 30]; // five subject marks

let total = 0;
let failCount = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
    if (marks[i] < 40) {
        failCount++;
    }
}

let average = total / marks.length;
let percentage = average;   

// finding grade
let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 75) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

// final result 
if (failCount >= 2) {
    console.log("Repeat Year");
} else {
    console.log("Average: " + average.toFixed(2));
    console.log("Percentage: " + percentage.toFixed(2) + "%");
    console.log("Grade: " + grade);
}
