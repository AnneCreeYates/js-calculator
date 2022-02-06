//variables
let answer = document.querySelector('.answer');
let currentInput = document.querySelector('.currentInput');
let buttons = document.querySelectorAll('buttons');
let backspace = document.querySelector('#backspace');
let clearBtn = document.querySelector('#clearBtn');
let evaluate = document.querySelector('#equality');


//Calculator display
let actualDisplayedValue = [];


//clear function
clearBtn.addEventListener("click", () => {
    actualDisplayedValue = [""];
})