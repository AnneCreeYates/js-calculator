//In this version I am using the js classes and constructor as well as this. element
//instead of 1 giant loop it is more better structured - uses separate, reusable functions, constructor and class


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
    if(numButton === '.' && this.currentDisplayedNum.includes('.')) return;
    this.currentDisplayedNum = this.currentDisplayedNum.toString() + numButton.toString();
    
  }

 mathOperation(funcButton) {
    if (this.currentDisplayedNum === '' && funcButton !== '-') return; //the assumption here is that if the fist button pressend is function other than '-' the function should abort
    //if '-' is pressed it should begin the calculation by assuming the first number is 0 and second number is subtracted from it giving the negative number available for the rest of the calculation
    //to make beginning with the negative number possible an exception need to be inserted here

    if (this.currentDisplayedNum === '' && funcButton === '-') {
      this.currentDisplayedNum = 0 - this.currentDisplayedNum;
    }

    if(this.previousDisplayedNum !== '') {
      this.calculation();
    }
    this.funcButton = funcButton;
    this.previousDisplayedNum = this.currentDisplayedNum + this.funcButton;
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
    
    console.log(previous, this.funcButton, current, computation)
    
    this.currentDisplayedNum = computation;
    this.funcButton = undefined;
    this.previousDisplayedNum = '';

       
  }

  //the function below makes it possible for the comma dividers to appear when dealing with bigger numbers
  //it can be changed to any language
  //it divides the decimal number into 2 sections - before and after the decimal point

  getDisplayNumber(numButton) {
    //turns the number to string
    const strNum = numButton.toString();
    //cuts off and stores the integer part of the number
    const intNum = parseFloat(strNum.split('.')[0]);
    //cuts off and stores the decimal part of the number
    const decimalNum = strNum.split('.')[1];

    let intDisplay;
    if (isNaN(intNum)) {
      intDisplay = '';
    } else {
      //the toLocaleString changes the notation to English in this case (1,000.0); maximumFractionDigits doesn't allow the deciml point to repeat more than once
      intDisplay = intNum.toLocaleString('en',  {maximumFractionDigits: 0});
    }

    if (decimalNum != null) {
      return `${intDisplay}.${decimalNum}`;
    } else {
      return intDisplay;
    }
  }
  
 
  updateAnswer() {
    //immediately below is previous logic
    // this.currentDisplayedNumValue.textContent = this.currentDisplayedNum;
    // this.previousDisplayedNumValue.textContent = this.previousDisplayedNum;
    
    // in the video here goes the  following (see if necessarily here- i added that functionality to the mathOperation function istead):
    //it is making the getDisplayNumber function to be visible on the calculator display

    this.currentDisplayedNumValue.textContent = this.getDisplayNumber(this.currentDisplayedNum)
    
    if (this.funcButton != null) {
      this.previousDisplayedNumValue.textContent = this.previousDisplayedNum;
    } else {
      this.previousDisplayedNumValue.textContent = '';
    }
    
   
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



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//TESTING
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


