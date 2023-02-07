let registerA = 10;
let registerB = 5;

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

function operate(operator, num1, num2) {
    switch(operator){
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return 'INVALID';
    }
}

console.log(`add: ${operate('+', registerA, registerB)}, 
            subtract: ${operate('-', registerA, registerB)}, 
            multiply: ${operate('*', registerA, registerB)}, 
            divide: ${operate('/', registerA, registerB)}`);