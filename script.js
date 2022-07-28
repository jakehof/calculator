const numbers = document.querySelector('.numbers');

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, num1, num1) {
    if (operator === "+") {
        add(num1, num2);
    }
    if (operator === "-") {
        subtract(num1, num2);
    }
    if (operator === "*") {
        multiply(num1, num2);
    }
    if (operator === "/") {
        divide(num1, num2);
    }
}

const numberGen = function () {
    for(i=1; i <= 9; i++) {
        let button = document.createElement('button');
        button.textContent = i;
        numbers.appendChild(button);
    }
}

numberGen();