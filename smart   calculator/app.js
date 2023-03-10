var result = document.getElementById("result");

function insertDigit(digit) {
    result.value += digit;
}

function insertOperator(operator) {
    result.value += operator;
}

function calculate() {
    result.value = eval(result.value);
}

function clearResult() {
    result.value = "";
}

function deleteDigit() {
    result.value = result.value.slice(0, -1);
}