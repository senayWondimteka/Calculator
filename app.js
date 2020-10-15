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
    }else {
        return divide(a,b);
    }
}