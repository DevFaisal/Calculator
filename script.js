function appendNumber(number) {
    let value = document.getElementById("result").value;
    value = value + number;
    document.getElementById("result").value = value;
}
function appendOperator(opeator) {
    document.getElementById("result").value += opeator;
}
function calculate() {
    const result = document.getElementById("result").value;
    const calculateResult = eval(result);
    document.getElementById("result").value = calculateResult;
}
function clearResult() {
    document.getElementById("result").value = "";
}
