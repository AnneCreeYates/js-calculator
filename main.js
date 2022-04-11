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
    if(numButton === '.' && this.currentDisplayedNum.includes('.')) return
    this.currentDisplayedNum = this.currentDisplayedNum.toString() + numButton.toString();
    
  }

  mathOperation(funcButton) {
    if (this.currentDisplayedNum === '') return
    if(this.previousDisplayedNum !== '') {
      this.calculation();
    }
    this.funcButton = funcButton;
    this.previousDisplayedNum = this.currentDisplayedNum;
    this.currentDisplayedNum= '';
    
  }

  calculation () {
    let computation;
    const previous = parseFloat(this.previousDisplayedNum);
    const current = parseFloat(this.currentDisplayedNum);
    if (isNaN(previous) || isNaN(current)) return;
    // switch(this.funcButton) {
    //   case '+':
    //     computation = previous + current;
    //     break;
    //   case '-':
    //     computation = previous - current;
    //     break;
    //   case '*':
    //     computation = previous * current;
    //     break;
    //   case '/':
    //     computation = previous / current;
    //     break;
    //   default:
    //     return
    // }
    if(this.funcButton === '+') computation = previous + current;
    if(this.funcButton === '-') computation = previous - current;
    if(this.funcButton === '×') computation = previous * current;
    if(this.funcButton === '÷') computation = previous / current;
    //try changing the signs to names or entities from html
    
    console.log(previous, current,this.funcButton, computation)
    this.currentDisplayedNum = computation;
    this.funcButton = undefined;
    this.previousDisplayedNum = '';

       
  }
  
 
  updateAnswer() {
    this.currentDisplayedNumValue.textContent = this.currentDisplayedNum;
    this.previousDisplayedNumValue.textContent = this.previousDisplayedNum;
    this.calculation();
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
  calculator.updateAnswer();
})

backspace.addEventListener('click', () => {
  calculator.backspace();
  calculator.updateAnswer();
})

calculate.addEventListener('click', ()=> {
  calculator.calculation();
  calculator.updateAnswer();
})



//POTENTIAL EDGE CASES
//1. the calculator doesn't allow to start with the 'minus' - beginning with the negative number not possible; clac. treats it as a normal number
//2. it is not possible to add (or other function) more than 2 numbers together - after pressing the operator for the second time the actual secod number is overriden and only 2 numbers are added in the end
//3. there is an issue with subtracting when pressing the equality several times - it doesn't subtract, just changes between first and second number -same case for division




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//TESTING
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


