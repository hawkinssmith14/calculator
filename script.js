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
function operate (operator, operandA, operandB) {
   
    switch (operator) {
        case '+':
            return add(operandA, operandB);
            break;
        case '-':
            return subtract(operandA, operandB);
            break;
        case 'x':
            return multiply(operandA, operandB);
            break;
        case '/': 
            return divide(operandA, operandB);
            break;
    }
}

// Clicking a digit should update currentInput and the display.
const digits = document.querySelector(".numbers");

digits.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return; // If the event is triggered by other than a button, do nothing.
    
    const digit = e.target.textContent;
    currentInput = currentInput + digit; 

    updateDisplay();
});

const display = document.querySelector(".display p");

function updateDisplay () {
    if (operator === null) {
        display.textContent = currentInput || '0';
        return;
    }

    let text = `${operandA} ${operator}`;
    if (currentInput !== '') text += ' ' + `${currentInput}`;
    display.textContent = text;
}

const ops = document.querySelector('.operators');

ops.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;

    const op = e.target.textContent; // "+", "-", "x", "/", "="

    if (op === '=') {
        operandB = Number(currentInput);
        const result = operate(operator, operandA, operandB);
        display.textContent = result;
        operandA = result;
        operator = null;
        operandB = null;
        currentInput = '';
        return;
    } 

    if (operandA === null) {
        operandA = Number(currentInput);
    }

    operator = op;
    currentInput = "";

    updateDisplay();
});

const clr = document.querySelector(".clear");
clr.addEventListener('click', () => {
    currentInput = '';
    operandA = null;
    operandB = null;
    display.textContent = '';
});