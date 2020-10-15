const buttons = document.querySelectorAll('#num-btn');
const operators = document.querySelectorAll('.operator');
const displayButton = document.querySelector('#display');
const clearButton = document.querySelector('#clear-btn');
const equalButton = document.querySelector('#equal-btn');

var operatorA = '';
var firstNum ='';
var secondNum = '';

buttons.forEach((button) =>  {
    button.addEventListener('click', ()=>{
        number = button.innerHTML;
        display(number);
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        operatorA = operator.innerHTML;
        
    });
});

equalButton.addEventListener('click', calculate);

function calculate()
{
    displayButton.innerHTML = operate(operatorA, Number(firstNum), Number(secondNum));
    console.log(operate(operatorA, Number(firstNum), Number(secondNum)));
    operatorA = '';
    firstNum = '';
    secondNum = '';
    
}

function display(str){
    if(operatorA === ''){
        firstNum += str;
        displayButton.innerHTML = firstNum;
    }else {
        clearScreen();
        secondNum += str;
        displayButton.innerHTML = secondNum;
    }
}

clearButton.addEventListener('click', clearScreen);

function clearScreen() {
    if (operatorA === '')
    {
        displayButton.innerHTML  = '';
        firstNum = '';
        secondNum = '';
        operatorA = '';

    }else {
        displayButton.innerHTML  = '';
    }
   
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply( a, b) {
    return a * b;
}

function divide( a, b) {
    
    if( b == 0)
    {
        return "NaN";
    }
    return  a / b;
}

function operate(opt, a , b) {
    if (opt === '+')
    {
        return add(a, b);
    }else if( opt === '-') {
        return subtract(a, b);
    }else if ( opt === '*' ) {
        return multiply(a, b);
    }else if (opt === '/') {
        return divide(a,b);
    }else {
        return "Invalid operation";
    }
}