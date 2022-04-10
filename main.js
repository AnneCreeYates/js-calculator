//In this version I am using the js classes and constructor as well as this. element
//instead of 1 giant loop it is more better structure - uses separate, reusable functions

//classes

class Calculator {
  constructor(previousDisplayedValue, currentDisplayedvalue) {
    this.previousDisplayedValue = previousDisplayedValue;
    this.currentDisplayedvalue = currentDisplayedvalue;
    this.clear();
  }

  clear() {
    this.currentvalue = " "
    this.previousValue = " "
    this.calculation = undefined;
  }

  backspace() {
    this.currentvalue = this.currentvalue.toString().slice(0, -1);
  }

  appendNumber(number) {

  }

  // function performing calculation
  calculation (previousDisplayedValue, funcButton,  currentDisplayedvalue) {
    previousDisplayedValue = parseFloat(this.previousValue);
    currentDisplayedvalue = parseFloat(this.currentvalue);

    // switch(funcButton) {
    //   case "plus":
    //       return previousDisplayedValue + currentDisplayedvalue;
    //       break;
    //   case "minus":
    //       return previousDisplayedValue - currentDisplayedvalue;
    //       break;
    //   case "multiply":
    //       return previousDisplayedValue * currentDisplayedvalue;
    //       break;
    //   case "divide":
    //       return previousDisplayedValue / currentDisplayedvalue;
    //       break;
    //   default:
    //       return
    // }
    if(funcButton === "plus") return previousDisplayedValue + currentDisplayedvalue;
    if(funcButton === "minus") return previousDisplayedValue - currentDisplayedvalue;
    if(funcButton === "multiply") return previousDisplayedValue * currentDisplayedvalue;
    if(funcButton === "divide") return previousDisplayedValue / currentDisplayedvalue;
    
  }
  

  // updateAnswer() {
  //   this.currentDisplayedvalue.textContent = this.getNumber(this.currentvalue)

  //   if(this.opertion != null) {
  //     this.previousDisplayedValue.textContent = `${this.getNumber(this.previousValue)} ${this.operation}`
  //   } else {
  //     this.previousDisplayedValue.textContent = "";
  //   }
  // }
}

//variables 
const numButton = document.querySelectorAll("[data-numButton]");
const funcButton =  document.querySelectorAll("[data-funcButton]");
const backspace = document.querySelector("[data-backspace]");
const calculate = document.querySelector("[data-calculate]");
const clear = document.querySelector("[data-clear]");
const previousDisplayedValue = document.querySelector("[data-previous-displayed-value]");
const currentDisplayedvalue = document.querySelector("[data-current-displayed-value");

const calculator = new Calculator(previousDisplayedValue, currentDisplayedvalue);

numButton.forEach(button => {
  button.addEventListener("click", () =>{
    // calculator.appendNumber(button.textContent);
    // calculator.updateAnswer();
  
  })
})

funcButton.forEach(button => {
  button.addEventListener("click", () => {

  })
})

clear.addEventListener("click", () => {
  calculator.clear();
  // calculator.updateAnswer();
})

backspace.addEventListener("clear", () => {
  calculator.backspace();
  // calculator.updateAnswer();
})

calculate.addEventListener("click", ()=> {
  calculator.calculation();
})



//POTENTIAL EDGE CASES
//1. the calculator doesn't allow to start with the "minus" - beginning with the negative number not possible; clac. treats it as a normal number
//2. it is not possible to add (or other function) more than 2 numbers together - after pressing the operator for the second time the actual secod number is overriden and only 2 numbers are added in the end
//3. there is an issue with subtracting when pressing the equality several times - it doesn't subtract, just changes between first and second number -same case for division




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//TESTING
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


