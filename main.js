//variables - check  if all of the variables necessary
const calculator = document.querySelector(".calculator");
const answer = document.querySelector(".answer");
const numButtons = calculator.getElementsByClassName(".numButton");
const funcButton = calculator.getElementsByClassName(".funcButton");
const backspace = document.getElementById("#backspace");
const clearBtn = document.getElementById("#clearBtn");
const evaluate = document.getElementById("#calculate");
const buttons = document.querySelectorAll("button");
const keys = calculator.querySelector(".numPad-keys");

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
        

        //the below is to save the value of the first number and an operator before it is erased from the display
        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.funcButton = button.dataset.key;
        
                
      }

      
      //this is the logic for performing calculation
      if (type === "calculate") {
         const firstNumber = calculator.dataset.firstNumber;
         const funcButton = calculator.dataset.funcButton;
         const secondNumber = displayValue;
         
         answer.textContent = calculation (firstNumber, funcButton, secondNumber);
     }

      calculator.dataset.previousKeyType = type;
      
  })


  function calculation (firstNumber, funcButton, secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    let result = " ";
    if(funcButton === "plus") result = firstNumber + secondNumber;
    if(funcButton === "minus") result = firstNumber - secondNumber;
    if(funcButton === "multiply") result = firstNumber * secondNumber;
    if(funcButton === "divide") result = firstNumber / secondNumber;
    return result

  }
})
