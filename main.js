
const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === "*") {
        display.value += "×";
    } else if (input === "/") {
        display.value += "÷";
    } else {
    display.value += input;
    }
}

function undo() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    
    display.value = eval(expression);
}