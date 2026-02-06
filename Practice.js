// User attributes
const userName = "Areeba";
let age = 20;
let educationalYears = 16;
const agreement = true;

// Checking data types using template literals
console.log(`User name is ${userName} and data type is ${typeof userName}.`);
console.log(`User age is ${age} and data type is ${typeof age}.`);
console.log(`User educational years are ${educationalYears} and data type is ${typeof educationalYears}.`);
console.log(`User agreement is ${agreement} and data type is ${typeof agreement}.`);

// Eligibility criteria 
const minAge = 18;
const minEducationYears = 14;

// Using logical operators with if-else
if (age >= minAge && educationalYears >= minEducationYears && agreement) {
    console.log("User is eligible for the course based on multiple conditions.");
} else {
    console.log("User is not eligible for the course based on given conditions.");
}

// Ternary operator
const result = educationalYears >= minEducationYears ? "Eligible" : "Not Eligible";
console.log(`Final Result: ${result}`);
