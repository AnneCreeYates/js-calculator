//variables - check  if all of the variables necessary
let answer = document.querySelector(".answer");
let currentInput = document.querySelector(".currentInput");
let numButtons = document.getElementsByClassName(".numButton");
let funcButton = document.getElementsByClassName(".funcButton");
let backspace = document.getElementById("#backspace");
let clearBtn = document.getElementById("#clearBtn");
let evaluate = document.getElementById("#calculate");

let buttons = document.querySelectorAll("button");



//Calculator display
// let actualDisplayedValue = [];

// below code is attempting to get the id data by looping through

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.value.match("button")) 
        return

        const keyValue = event.target.value;
        const displayValue = answer.textContent;
        
        if (displayValue === "0") {
          answer.textContent = keyValue;
        } else {
          answer.textContent = displayValue + keyValue;
        }
        
      
  })
}
)
