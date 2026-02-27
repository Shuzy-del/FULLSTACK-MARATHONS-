
// BUILD A CALCULATOR APPLICATION
// OPERATION : ADDITION, SUBTRACTION, MULTIPLICATION,


function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const resultDisplay = document.getElementById("result-display");
  const clearbtn = document.getElementById("clear-display-btn");
  let result = 0;

  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
   
  }

  resultDisplay.textContent = "Result: " + result;

}
document.getElementById("calculate-btn").addEventListener("click", calculate);