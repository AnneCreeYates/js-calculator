//variables
let answer = document.querySelector(".answer");
let currentInput = document.querySelector(".currentInput");
// let numButtons = document.getElementsByClassName(".numButton");
let funcButton = document.querySelectorAll(".funcButton");
let backspace = document.getElementById("#backspace");
let clearBtn = document.getElementById("#clearBtn");
let evaluate = document.getElementById("#calculate");


//Calculator display
let actualDisplayedValue = [];

document.addEventListener ("click", e => {
  if (e.target.matches("button")) {
      console.log("keys are working!")
  }
});