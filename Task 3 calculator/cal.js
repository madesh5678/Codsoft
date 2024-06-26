document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = null;
    let firstOperand = null;
    let secondOperand = null;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
                operator = null;
                firstOperand = null;
                secondOperand = null;
                display.textContent = "0";
            } else if (value === "=") {
                secondOperand = parseFloat(currentInput);
                if (operator && firstOperand !== null && secondOperand !== null) {
                    let result = calculate(firstOperand, secondOperand, operator);
                    display.textContent = result;
                    currentInput = result.toString();
                    operator = null;
                    firstOperand = null;
                    secondOperand = null;
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "") {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = "";
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(first, second, operator) {
        switch (operator) {
            case "+":
                return first + second;
            case "-":
                return first - second;
            case "*":
                return first * second;
            case "/":
                return first / second;
            default:
                return second;
        }
    }
});