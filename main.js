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


      //this is the logic of numbers appearing on the calculator display -- when you press numbers and what happens if you press function button
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
        //this function makes the selected function button to be de-selected
        const currentActiveFuncKey = calculator.querySelector('[data-state = "selected"]');
        if (currentActiveFuncKey) {
           currentActiveFuncKey.dataset.state = "";
        }
          

        key.dataset.state = "selected";
        console.log(key)
        
      };

      if (type === "calculate") {

      }

      calculator.dataset.previousKeyType = type;
  })
})
