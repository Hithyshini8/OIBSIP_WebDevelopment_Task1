const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

let currentInput = "";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const action = key.getAttribute("data-action");
    const value = key.getAttribute("data-value");

    switch (action) {
      case "number":
        currentInput += value;
        display.value = currentInput;
        break;

      case "operator":
        if (currentInput === "") return;
        const lastChar = currentInput[currentInput.length - 1];
        if ("+-*/".includes(lastChar)) {
          currentInput = currentInput.slice(0, -1) + value;
        } else {
          currentInput += value;
        }
        display.value = currentInput;
        break;

      case "calculate":
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
        display.value = currentInput;
        break;

      case "clear":
        currentInput = "";
        display.value = "";
        break;

      case "delete":
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
        break;
    }
  });
});
