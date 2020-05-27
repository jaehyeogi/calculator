var all = ""
class Calculator{
  //계산 value 출력 창
  constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()//Calculator 만들자 마자 clear 호출
    //만들자마자 0 나오게!!해보긴
  }
  //AC
  clear(){
    this.currentOperand = '0'//emty string
    this.previousOperand = ''//emty string
    this.operation = undefined
  }

  // divde by 100
  percent(){
    this.currentOperand = this.currentOperand / 100
  }

  //delete
  delete(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
    //string from 0 index to 마지막에서 한글자 뺸것
  }

  plusminus(){
      if(this.currentOperand >= 0 ){
        this.currentOperand = -this.currentOperand
      } else{
        this.currentOperand = - this.currentOperand// - - >> +
      }
  }

 //add number to screen
  appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.')) return//return에서 함수 멈춤
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation){
    if(this.currentOperand === '') return
    if(this.previousOperand !== '') {
        this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  //display에 결과값나오도록
  compute(){
    let computation
    const prev = parseFloat(this.previousOperand)// parseFloat: 텍스트를 소수점 표현이 가능한 실수로 변환 해줌.
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return //operator 누르고 = 눌렀을 때 작동 X
    switch (this.operation) {
      case '+':
        computation = prev + current
        break;
      case '-':
        computation = prev - current
        break;
      case '*':
        computation = prev * current
        break;
      case '/':
        computation = prev / current
        break;
      default:
        return
    }
    this.currentOperand = computation;
    this.operation = undefined// operator가 화면에 안 나오게
    this.previousOperand = ''
}
  getDisplayNumber(number){
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])//[0] >> first part 정수 부분
    const decimalDigits = stringNumber.split('.')[1]//[1] second part 소수부분
    let integerDisplay
    if (isNaN(integerDigits)){
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('ko',{maximumFractionDigits:0})
      //{maximumFractionDigits:0}
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`//``??
    } else {
      return integerDisplay
    }


    // const floatNumber = parseFloat(number)
    // if (isNaN(floatNumber)) return ''
    // return floatNumber.toLocaleString('ko')
  }

  updateDisplay() {
    document.getElementById("display").value = "0";
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    if(this.operation != null) {
    this.previousOperandTextElement.innerText =
    `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`// ???
  } else{
    this.previousOperandTextElement.innerText = ''
  }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const percentButton = document.querySelector('[data-percent]')
const plusminusButton = document.querySelector('[data-plusminus]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    Button1.setBackgroundColor('rgb(254, 160, 10)');
    Button1.setColor('white');
    Button2.setBackgroundColor('rgb(254, 160, 10)');
    Button2.setColor('white');
    Button3.setBackgroundColor('rgb(254, 160, 10)');
    Button3.setColor('white');
    Button4.setBackgroundColor('rgb(254, 160, 10)');
    Button4.setColor('white');
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay(); // 계산한 결과가 출력 되게 하는 것,.
} )

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
} )

percentButton.addEventListener('click', button => {
  calculator.percent();
  calculator.updateDisplay();
} )

plusminusButton.addEventListener('click', button => {
  calculator.plusminus();
  calculator.updateDisplay();
} )


       var Button1 = {
         setBackgroundColor: function(color){
         document.querySelector("[id='op1']").style.backgroundColor = color;
        },
         setColor: function(color){
         document.querySelector("[id='op1']").style.color = color;
        }
       }
       var Button2 = {
         setBackgroundColor: function(color){
         document.querySelector("[id='op2']").style.backgroundColor = color;
        },
         setColor: function(color){
         document.querySelector("[id='op2']").style.color = color;
        }
       }
       var Button3 = {
         setBackgroundColor: function(color){
         document.querySelector("[id='op3']").style.backgroundColor = color;
        },
         setColor: function(color){
         document.querySelector("[id='op3']").style.color = color;
        }
       }
       var Button4 = {
         setBackgroundColor: function(color){
         document.querySelector("[id='op4']").style.backgroundColor = color;
        },
         setColor: function(color){
         document.querySelector("[id='op4']").style.color = color;
        }
       }

       function changeColor1(){
         var buttonColor1 = document.querySelector("[id='op1']");
         if(buttonColor1.style.backgroundColor === 'rgb(254, 160, 10)' ){
         Button1.setBackgroundColor('white');
         Button1.setColor('rgb(254, 160, 10)');
       } else {
         Button1.setBackgroundColor('rgb(254, 160, 10)');
         Button1.setColor('white');
       }
     }
       function changeColor2(){
         var buttonColor2 = document.querySelector("[id='op2']");
         if(buttonColor2.style.backgroundColor === 'rgb(254, 160, 10)' ){
         Button2.setBackgroundColor('white');
         Button2.setColor('rgb(254, 160, 10)');
       } else {
         Button2.setBackgroundColor('rgb(254, 160, 10)');
         Button2.setColor('white');
       }
      }
       function changeColor3(){
         var buttonColor3 = document.querySelector("[id='op3']");
         if(buttonColor3.style.backgroundColor === 'rgb(254, 160, 10)' ){
         Button3.setBackgroundColor('white');
         Button3.setColor('rgb(254, 160, 10)');
       } else {
         Button3.setBackgroundColor('rgb(254, 160, 10)');
         Button3.setColor('white');
       }
      }
        function changeColor4(){
         var buttonColor4 = document.querySelector("[id='op4']");
         if(buttonColor4.style.backgroundColor === 'rgb(254, 160, 10)' ){
         Button4.setBackgroundColor('white');
         Button4.setColor('rgb(254, 160, 10)');
       } else {
         Button4.setBackgroundColor('rgb(254, 160, 10)');
         Button4.setColor('white');
       }
 }
