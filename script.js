// Declare some variables for the operator and operands
let operandA = null;
let operandB = null;
let operator = null;
let currentInput = '';

// Functions for all the operators 
function add (operandA, operandB) {
    return operandA + operandB;
}

function subtract (operandA, operandB) {
    return operandA - operandB;
}

function multiply (operandA, operandB) {
    return operandA * operandB;
}

function divide (operandA, operandB) {
    return operandA / operandB;
}

// Function that takes an operator and two numbers and calls the appropriate function
function operate(operator, operandA, operandB) {
    // Handle division by zero
    if (operator === '/' && operandB === 0) {
        return 'Error: Cannot divide by zero';
    }
    
    // Call the appropriate function based on the operator
    switch (operator) {
        case '+':
            return add(operandA, operandB);
        case '-':
            return subtract(operandA, operandB);
        case 'x':
            return multiply(operandA, operandB);
        case '/':
            return divide(operandA, operandB);
        default:
            return 'Error: Invalid operator';
    }
}

// Function to handle digit button clicks
function handleDigitClick(digit) {
    // Append the digit to currentInput
    currentInput += digit;
    
    // Convert currentInput to a number and update the appropriate operand
    const number = Number(currentInput);
    
    if (operator === null) {
        // No operator selected yet, update operandA
        operandA = number;
        console.log("operandA:", operandA);
    } else {
        // Operator is selected, update operandB
        operandB = number;
        console.log("operandB:", operandB);
    }
}

// Wait for DOM to load before selecting buttons
document.addEventListener("DOMContentLoaded", () => {
    // Select all number buttons
    const numberButtons = document.querySelectorAll(".numbers button");
    
    // Select all operator buttons
    const operatorButtons = document.querySelectorAll(".operators button");
    
    // Add event listeners to each number button
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            const digit = button.textContent;
            handleDigitClick(digit);
        });
    });
    
    // Add event listeners to operator buttons (except equals)
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonValue = button.textContent;
            if (buttonValue !== "=") {
                // Set the operator and reset currentInput for the next number
                operator = buttonValue;
                currentInput = ''; // Reset so next number starts fresh
                console.log("operator:", operator);
            }
        });
    });
});



