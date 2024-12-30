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

// Takes in two numbers and uses the above operator functions based on the clicked button
function operate(a, b, operator) {
    let answer = 0;
    switch (operator) {
        case "+":
            answer = add(a, b);
            break;
        case "-":
            answer = subtract(a, b);
            break;
        case "*":
            answer = multiply(a, b);
            break;
        case "/":
            answer = divide(a, b);
            break;

    }
    return answer;
}

function changeButtonHighlight(e) {
    if (operators.includes(e.target.textContent) && !alreadyHighlighted) {
        e.target.style.backgroundColor = "#B17E2B";
        alreadyHighlighted = true;
    }
    else {
        e.target.style.backgroundColor = "#de9e36ff";
        alreadyHighlighted = false;
    }
}

// Handle button press for each button and change the display accordingly
const numbers = document.querySelector(".numbers");
const displayP = document.querySelector(".display p");

// Setting variables to check which symbols have been pressed
const operators = ["*", "+", "-", "/"];
const otherOperators = ["AC", "="];

let firstTime = true;
let alreadyHighlighted = false;
let firstOperand = undefined;
let secondOperand = 0;

numbers.addEventListener("click", changeButtonHighlight);

// numbers.addEventListener("click", (e) => {

//     switch (e.target.textContent) {
//         case "+":
//             break;
//         case "=":
//             break;
//     }

//     changeButtonHighlight(e);

//     // Prevent any of the operators in the calculator to be shown on the display
//     // If any operator is pressed, change the colour to be clicked and create a variable for a number
//     if (operators.includes(e.target.textContent)) {
//         // If the first number has never been used before, set it to whatever the user inputs first
//         if (typeof firstOperand === "undefined") {
//             firstOperand = parseInt(displayP.textContent);
//             console.log(`The value of firstOperand is ${firstOperand}, and it's type is: ${typeof firstOperand}`);
//         }

//     }
//     else if (otherOperators.includes(e.target.textContent)) {
//         console.log(`You pressed ${e.target.textContent}`);
//     }
//     else {
//         // Before you add to the display, delete the placeholder
//         if (firstTime) {
//             displayP.textContent = "";
//             firstTime = false;
//         }
//         displayP.textContent += e.target.textContent;
//     }

// })