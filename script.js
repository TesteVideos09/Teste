let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
    displayValue = "";
  }
}

function calculatePi() {
  displayValue += Math.PI;
  document.getElementById("display").value = displayValue;
}

function calculateSqrt() {
  try {
    const result = Math.sqrt(eval(displayValue));
    document.getElementById("display").value = result;
    displayValue = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
    displayValue = "";
  }
}

function calculateFactorial() {
  try {
    const n = parseInt(displayValue);
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    document.getElementById("display").value = result;
    displayValue = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
    displayValue = "";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
  displayValue = "";
}
