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
let actualDisplayedValue = [];
//the below code works, but only for the class name - console prints out onlu func and num button notification - not a specific number
// document.addEventListener ("click", e => {
   
//   if (e.target.matches(".numButton")) 
//   {
//       console.log("I am a number button")
//   } 
//   else if (e.target.matches(".funcButton")) 
//   {
//       console.log("I am a function button")
//   }

  
// });

// below code is attempting to get the id data by looping through

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value.match("7")) {
      console.log("I am a 7 button")
    }
  })
}
)
