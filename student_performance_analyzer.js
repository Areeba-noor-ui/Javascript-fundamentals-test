/*
Program: Student Score Management System
Description:
This program stores student names and scores,
displays results, calculates total and average,
checks pass/fail status, and allows searching a student by name.
*/

// Data
let students = ["Areeba", "Sara", "Hira", "Maria"];
let scores = [85, 90, 78, 92];

// Display student scores
function displayStudentScores() {
    for (let i = 0; i < students.length; i++) {
        console.log(`${students[i]} scored ${scores[i]}`);
    }
}

// Calculate total score
function calculateTotalScore() {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total;
}

// Calculate average score
function calculateAverageScore() {
    return calculateTotalScore() / scores.length;
}

// Check pass or fail
function checkPassFail() {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 60) {
            console.log(`${students[i]} passed`);
        } else {
            console.log(`${students[i]} failed`);
        }
    }
}

// Search student
function searchStudent(name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase() === name.toLowerCase()) {
            console.log(`${students[i]} found with score ${scores[i]}`);
            return;
        }
    }
    console.log("Student not found");
}

// Function calls
displayStudentScores();
console.log("Total:", calculateTotalScore());
console.log("Average:", calculateAverageScore());
checkPassFail();
searchStudent("Sara");
