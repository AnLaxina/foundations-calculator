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
            answer = divide(a, b).toFixed(2);
            break;
    }
    return parseFloat(answer);
}

function changeButtonHighlight(e) {
    if (operators.includes(e.target.textContent) && !alreadyHighlighted) {
        e.target.style.backgroundColor = "#B17E2B";
        alreadyHighlighted = true;
    }
    else {
        operatorNodes.forEach((operator) => {
            operator.style.backgroundColor = "#de9e36ff";
        })
        alreadyHighlighted = false;
    }
}

// Handle button press for each button and change the display accordingly
const numbers = document.querySelector(".numbers");
const displayP = document.querySelector(".display p");
const operatorNodes = document.querySelectorAll(".operator");

// Setting variables to check which symbols have been pressed
const operators = ["*", "+", "-", "/"];
const otherOperators = ["AC", "="];

let firstTime = true;
let alreadyHighlighted = false;
let firstOperand = undefined;
let secondOperand = undefined;
let answer = 0;

numbers.addEventListener("click", changeButtonHighlight);

numbers.addEventListener("click", (e) => {
    // Prevent any of the operators in the calculator to be shown on the display
    // If any operator is pressed, create a variable for a number
    if (operators.includes(e.target.textContent)) {
        // If the first operand has never been used before, set it to the current number
        if (firstOperand === undefined) {
            firstOperand = parseInt(displayP.textContent);
        }
        else if (secondOperand !== undefined) {
            // Calculate the result of the previous operation
            answer = operate(firstOperand, secondOperand, currentOperator);
            // Store the result as the firstOperand for the next operation
            firstOperand = answer;
            // Reset the secondOperand
            secondOperand = undefined;
        }

        // Store the current operator
        currentOperator = e.target.textContent;
        // Clear the display for the second operand
        console.log(`Second operand is ${secondOperand}`);
        displayP.textContent = answer;


    }
    else if (otherOperators.includes(e.target.textContent)) {
        // Handle the "=" operator
        if (e.target.textContent === "=") {
            // Only calculate if we have both operands
            if (firstOperand !== undefined && secondOperand !== undefined) {
                answer = operate(firstOperand, secondOperand, currentOperator);
                displayP.textContent = answer;
                firstOperand = undefined; // Reset after calculating
                secondOperand = undefined;
            }
        }
    }
    else {
        // Handle number input
        if (firstTime) {
            displayP.textContent = "";
            firstTime = false;
        }
        else if (firstOperand !== undefined && secondOperand === undefined) {
            displayP.textContent = "";
        }
        console.log(`The first operand is: ${firstOperand}\nThe second operand is: ${secondOperand}`);
        displayP.textContent += e.target.textContent; // Append the digit to the display
        secondOperand = parseInt(displayP.textContent); // Update second operand
    }

});
