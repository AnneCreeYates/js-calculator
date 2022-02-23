//variables - check  if all of the variables necessary
const calculator = document.querySelector(".calculator");
const answer = document.querySelector(".answer");
const numButtons = calculator.getElementsByClassName(".numButton");
const funcButton = calculator.getElementsByClassName(".funcButton");
const backspace = document.getElementById("#backspace");
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


      
      
      if (type === "decimal")  {
        if(displayValue === "0" || previousKeyType === "funcButton" || previousKeyType === "numButton") {
          answer.textContent = displayValue + keyValue;
        }

        if(displayValue.includes(".")){
          answer.textContent = displayValue;
          console.log("ther is a decimapl point there")
        }
      }

     

      //the 2 options below are: if the last pressed button is function button or its a beginning of calculation 
      //(meaning the display shows 0) the keyValue replaces the
      // value on the display, if it is not the number is appended to the previous number

      if (type === "numButton") {
        if (displayValue === "0" || previousKeyType === "funcButton"  || previousKeyType === "calculate") {
          answer.textContent = keyValue;
        } else {
          answer.textContent = displayValue + keyValue;
        }
      }

      if (type === "funcButton") {
        //this if statement makes the selected function button to be de-selected - change into function, because will be useful in several places

        const currentActiveFuncKey = calculator.querySelector('[data-state = "selected"]');
        if (currentActiveFuncKey) {
           currentActiveFuncKey.dataset.state = "";
        }
        key.dataset.state = "selected";
        

        //the below is to save the value of the first number and an operator before it is erased from the display
        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.funcButton = button.dataset.key;

      }
      
         

      // insert backspoace button logic here - lower the string is parsed to float
      
      //this is the logic for performing calculation
      //there is an issue with pressing the equal several times after entering the first and second number - the display shows for instance 1+2= 3 =4 =5 (adds the first numberto the output instead of the second)
      if (type === "calculate") {
         const firstNumber = calculator.dataset.firstNumber;
         const funcButton = calculator.dataset.funcButton;
         const secondNumber = displayValue;
         
         answer.textContent = calculation (firstNumber, funcButton, secondNumber);
         
         //the if below is to make sure that when the equal sign is pressed to many times the display doesn't go completly empty, but goes to 0, remains at the last clicked value or 
        //  if (displayValue === "0") {
        //    answer.textContent = displayValue;
        //  }
         
      }

      

      if (type === "clearBtn") {
        
        answer.textContent = "0";
        delete calculator.dataset.firstNumber;
        delete calculator.dataset.funcButton;
        
        
      }
     
      calculator.dataset.previousKeyType = type;
      
  })

 
})

// used functions
function calculation (firstNumber, funcButton, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  if(funcButton === "plus") return firstNumber + secondNumber;
  if(funcButton === "minus") return firstNumber - secondNumber;
  if(funcButton === "multiply") return firstNumber * secondNumber;
  if(funcButton === "divide") return firstNumber / secondNumber;
  

}


//POTENTIAL EDGE CASES
//1. the calculator doesn't allow to start with the "minus" - beginning with the negative number not possible; clac. treats it as a normal number
//2. it is not possible to add (or other function) more than 2 numbers together - after pressing the operator for the second time the actual secod number is overriden and only 2 numbers are added in the end
//3. there is an issue with subtracting when pressing the equality several times - it doesn't subtract, just changes between first and second number -same case for division




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//TESTING
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


