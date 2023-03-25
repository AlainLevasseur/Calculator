let registerA = 10;
let registerB = 5;

let displayValue = 0;
let displayScreen = document.getElementById('display');

let clearButton = document.getElementById('clear');
let operation = '';

function add(augend, addend) {
    return augend + addend;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}

//Add functionality to the numbered buttons
var button;
for(let i = 0; i < 10; i++){
    button = document.querySelector(`.num-${i}`);
    button.addEventListener("click", function() {
        displayValue += `${i}`;
        displayScreen.innerText = displayValue;
    });
}

//Add functionality to the clear button
clearButton.addEventListener("click", function() {
    displayValue = '';
    displayScreen.innerText = '';
});

function pressOperator(op) {

}

function operate(operator, num1, num2) {
    switch(operator){
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return 'INVALID';
    }
}