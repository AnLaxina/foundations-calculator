// This JavaScript file is only concerned with the operations of how the calculator should function

// To start, here are the operator functions I'll use later
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Handle button press for each button and change the display accordingly
const numbers = document.querySelector(".numbers");
const displayP = document.querySelector(".display p");

numbers.addEventListener("click", (e) => {
    displayP.textContent += e.target.textContent;
})