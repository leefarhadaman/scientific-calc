// Get the display element
let display = document.getElementById("display");

// Memory variable
let memory = 0;

// Function to append values to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to calculate the result
function calculate() {
  try {
    // Evaluate the expression with parentheses
    display.value = eval(display.value.replace("^", "**").replace("√", "Math.sqrt"));
  } catch (error) {
    display.value = "Error";
  }
}

// Function for memory add (M+)
function memoryAdd() {
  memory += parseFloat(display.value) || 0;
}

// Function for memory subtract (M-)
function memorySubtract() {
  memory -= parseFloat(display.value) || 0;
}

// Function for memory recall (MR)
function memoryRecall() {
  display.value = memory;
}

// Add event listeners for number buttons
document.querySelectorAll(".number").forEach(button => {
  button.addEventListener("click", () => appendToDisplay(button.innerText));
});

// Add event listeners for operator buttons
document.querySelectorAll(".operator").forEach(button => {
  button.addEventListener("click", () => appendToDisplay(button.innerText));
});

// Add event listener for the clear button
document.querySelector(".clear").addEventListener("click", clearDisplay);

// Add event listener for the equal button
document.querySelector(".equal").addEventListener("click", calculate);

// Add event listener for memory add (M+)
document.querySelector(".memory").addEventListener("click", memoryAdd);

// Add event listener for memory subtract (M-)
document.querySelector(".memory").addEventListener("click", memorySubtract);

// Add event listener for memory recall (MR)
document.querySelector(".memory").addEventListener("click", memoryRecall);
