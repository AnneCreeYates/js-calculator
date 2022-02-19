//variables - check  if all of the variables necessary
const calculator = document.querySelector(".calculator");
const answer = document.querySelector(".answer");
const numButtons = document.getElementsByClassName(".numButton");
const funcButton = document.getElementsByClassName(".funcButton");
const backspace = document.getElementById("#backspace");
const clearBtn = document.getElementById("#clearBtn");
const evaluate = document.getElementById("#calculate");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.value.match("button")) 
        return

        const key = event.target;
        const keyValue = key.value;
        const displayValue = answer.textContent;
        const { type } = key.dataset;
        const { previousKeyType } = calculator.dataset;

      if (type === "numButton") {
        if (displayValue === "0") {
          answer.textContent = keyValue;
        } else if (previousKeyType === "funcButton") {
          answer.textContent = keyValue;
        } else {
          answer.textContent = displayValue + keyValue;
        }
     
      }

      if (type === "funcButton") {
        console.log(key)
        
      }

      calculator.dataset.previousKeyType = type;
  })
})
