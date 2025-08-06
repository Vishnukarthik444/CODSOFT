// // cal.js

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator-buttons button");

let expression = ""; // Store full input including numbers and operators

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    switch (value) {
      case "AC":
        expression = "";
        display.value = "";
        break;

      case "+/-":
        if (expression) {
          if (expression.startsWith("-")) {
            expression = expression.substring(1);
          } else {
            expression = "-" + expression;
          }
          display.value = expression;
        }
        break;

      case "=":
        try {
          // Replaces visual symbols with JavaScript-evaluable operators
          const evaluableExpr = expression
            .replace(/x/g, "*")
            .replace(/÷/g, "/");

          const result = eval(evaluableExpr);
          display.value = result;
          expression = result.toString(); // Allow continued operations
        } catch (error) {
          display.value = "ERROR";
          expression = "";
        }
        break;

      default:
        // Appends everything including operators to the display
        expression += value;
        display.value = expression;
        break;
    }
  });
});