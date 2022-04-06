//variables 
const calculator = document.querySelector(".calculator");
const answer = document.querySelector(".answer");
const numButtons = calculator.getElementsByClassName(".numButton");
const funcButton = calculator.getElementsByClassName(".funcButton");
const backspace = document.getElementById("#backspace");
const buttons = document.querySelectorAll("button");
const keys = calculator.querySelector(".numPad-keys");
let calcResult = 0;
let firstNumber = 0;
let secondNumber = 0;

//body of the calculator functionality
//the loop goes from the beginning every time  a button is pressed and returns a specific outcome

buttons.forEach((button) => 
{
  button.addEventListener("click", (event) => 
  {
    if (button.value.match("button"))
        return;

        const key = event.target;
        const keyValue = key.value;
        const displayValue = answer.textContent;
        const { type } = key.dataset;
        const { previousKeyType } = calculator.dataset;

        
        
      // the below if statement makes it possible to use float numbers beginning with 0
      if (type === "decimal") 
      {
        
        if (displayValue === "0" || 
            previousKeyType === "funcButton" || 
            previousKeyType === "numButton" 
          ) 
          {
          answer.textContent = displayValue + keyValue;
          // the if statement below checks if a decimal point exists in a number - if so it doesn't allow to use another one in the same number
          //it has to be here, otherwise it messes up the display value by not allowing 0.x after a function button if a number with decimal is on the display
          if (displayValue.includes("."))
          {
            answer.textContent = displayValue;
          }
        } 
        
        if (previousKeyType ==="funcButton" && displayValue !== "0" || 
            previousKeyType === "calculate") 
        {
          answer.textContent = "0" + keyValue;
        }
        
      }

      //the 2 options below are: if the last pressed button is function button or its a beginning of calculation 
      //(meaning the display shows 0) the keyValue replaces the
      // value on the display, if it is not the number is appended to the previous number

      if (type === "numButton") 
      {
        if (displayValue === "0" || 
            previousKeyType === "funcButton"  || 
            previousKeyType === "calculate") 
        {
          answer.textContent = keyValue;
        } 
        else 
        {
          answer.textContent = displayValue + keyValue;
        }
      }

      //pressing funcButton defines the firstNumber and activates the funcButton
      if (type === "funcButton") 
      {
        //this if statement makes the selected function button to be de-selected - change into function, because will be useful in several places
        const currentActiveFuncKey = calculator.querySelector('[data-state = "selected"]');
        if (currentActiveFuncKey) 
        {
           currentActiveFuncKey.dataset.state = "";
        }

        key.dataset.state = "selected";
        
        //the function below deselects the selected button - it has to stay here
        document.getElementById("calculate").onclick = function() 
        {
          key.dataset.state = "";
        }
        
        //the below is to save the value of the first number and an operator before it is erased from the display
        //figure out how to get the first an second number in a different way, because it would be easier to use if it was a reusable function
        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.funcButton = button.dataset.key;
        
      }
      
      //this is the logic for performing calculation
      //there is an issue with pressing the equal several times after entering the first and second number - the display shows for instance 1+2= 3 =4 =5 (adds the first numberto the output instead of the second)
      
      const firstNumber = calculator.dataset.firstNumber;
      const funcButton = calculator.dataset.funcButton;
      const secondNumber = displayValue;

      console.log("First Number: ", firstNumber);
      console.log("Second number: ", secondNumber);

      calcResult = calculation (firstNumber, funcButton, secondNumber);
      console.log("Calcresult: ", calcResult);
      if (type === "calculate" ) 
      {

        
           answer.textContent = calcResult;
            
         //if the calculation does not contain a function button the disaplay is showing only the pressed number, but does not
         // perform any additional actions untill the function button and other numbers are pressed
          if(!funcButton) 
          {
            // console.log("there is no function button");
            answer.textContent = displayValue;
          }
         
      }

          

      //the calculation should be performed after the the funcButton is being pressed second time 
      
      // if (type === "percent") {
        
      // }

      if (type === "backspace") 
      {
        const removed = displayValue.split('').slice(0, -1);
        answer.textContent = removed.join('');

        if(removed.length === 0)
        {
          answer.textContent = "0";
        }
      }

      if (type === "clearBtn") 
      {
        answer.textContent = "0";
        delete calculator.dataset.firstNumber;
        delete calculator.dataset.funcButton;
                
      }
     
      calculator.dataset.previousKeyType = type;
      
  })

 
})

// used functions

// function performing calculation
function calculation (firstNumber, funcButton, secondNumber) 
{
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  // switch(funcButton) {
  //   case "plus":
  //       return firstNumber + secondNumber;
  //       break;
  //   case "minus":
  //       return firstNumber - secondNumber;
  //       break;
  //   case "multiply":
  //       return firstNumber * secondNumber;
  //       break;
  //   case "divide":
  //       return firstNumber / secondNumber;
  //       break;
  //   default:
  //     console.log("Nope")
  // }
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


