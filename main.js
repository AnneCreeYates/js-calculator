//In this version I am using the js classes and constructor as well as this. element
//instead of 1 giant loop it is more better structure - uses separate, reusable functions


//classes

class Calculator {
  constructor(previousDisplayedNumValue, currentDisplayedNumValue) {
    this.previousDisplayedNumValue = previousDisplayedNumValue
    this.currentDisplayedNumValue = currentDisplayedNumValue
    this.allClear()
  }

  allClear() {
    this.currentDisplayedNum = ''
    this.previousDisplayedNum = ''
    this.funcButton = undefined
  }

  backspace() {
    this.currentDisplayedNum = this.currentDisplayedNum.toString().slice(0, -1);
  }

  appendNumber(numButton) {
    this.currentDisplayedNum = this.currentDisplayedNum.toString() + numButton.toString();
    
  }

  mathOperation(funcButton) {
    this.funcButton = funcButton;
    this.previousDisplayedNumValue = this.currentDisplayedNumValue;
    this.currentDisplayedNumValue = '';

  }

  calculation (previousDisplayedNumValue, funcButton,  currentDisplayedNumValue) {
    previousDisplayedNumValue = parseFloat(this.previousDisplayedNum);
    currentDisplayedNumValue = parseFloat(this.currentDisplayedNum);

    // switch(funcButton) {
    //   case 'plus':
    //       return previousDisplayedNum + currentDisplayedNum;
    //       break;
    //   case 'minus':
    //       return previousDisplayedNum - currentDisplayedNum;
    //       break;
    //   case 'multiply':
    //       return previousDisplayedNum * currentDisplayedNum;
    //       break;
    //   case 'divide':
    //       return previousDisplayedNum / currentDisplayedNum;
    //       break;
    //   default:
    //       return
    // }
    if(funcButton === 'plus') return previousDisplayedNumValue + currentDisplayedNumValue;
    if(funcButton === 'minus') return previousDisplayedNumValue - currentDisplayedNumValue;
    if(funcButton === 'multiply') return previousDisplayedNumValue * currentDisplayedNumValue;
    if(funcButton === 'divide') return previousDisplayedNumValue / currentDisplayedNumValue;
    
  }
  
 
  updateAnswer() {
    this.currentDisplayedNumValue.textContent = this.currentDisplayedNum;
  };

  
}

//variables 
const numButton = document.querySelectorAll('[data-numButton]');
const funcButton =  document.querySelectorAll('[data-funcButton]'); //operation in video
const backspace = document.querySelector('[data-backspace]'); //delete
const calculate = document.querySelector('[data-calculate]'); // equal;s
const allClear = document.querySelector('[data-all-clear]'); //all allClear
const previousDisplayedNumValue = document.querySelector('[data-previous-displayed-num]'); //previous operand text value
const currentDisplayedNumValue = document.querySelector('[data-current-displayed-num]'); //current operand text element


const calculator = new Calculator(previousDisplayedNumValue, currentDisplayedNumValue)

numButton.forEach(button => {
  button.addEventListener('click', () =>{
    calculator.appendNumber(button.textContent);
    calculator.updateAnswer();
  
  })
})

funcButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.mathOperation(button.textContent);
    calculator.updateAnswer();
  })
})

allClear.addEventListener('click', () => {
  calculator.allClear();
  // calculator.updateAnswer();
})

backspace.addEventListener('click', () => {
  calculator.backspace();
  // calculator.updateAnswer();
})

calculate.addEventListener('click', ()=> {
  calculator.calculation();
})



//POTENTIAL EDGE CASES
//1. the calculator doesn't allow to start with the 'minus' - beginning with the negative number not possible; clac. treats it as a normal number
//2. it is not possible to add (or other function) more than 2 numbers together - after pressing the operator for the second time the actual secod number is overriden and only 2 numbers are added in the end
//3. there is an issue with subtracting when pressing the equality several times - it doesn't subtract, just changes between first and second number -same case for division




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//TESTING
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


