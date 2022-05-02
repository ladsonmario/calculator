let display = document.querySelector('.display');
let process = 0;
let number1 = [];
let number2 = [];
let resultFinal = 0;
let operation = '';

function number(n) {
    if(process === 0) {
        number1.push(n);
    } else {
        number2.push(n);
    }    
    display.append(n);    
}

function addition() {
    display.innerHTML = '';
    process++;
    operation = '+';
}

function subtraction() {
    display.innerHTML = '';
    process++;
    operation = '-';
}

function multiplication() {
    display.innerHTML = '';
    process++;
    operation = '*';
}

function division() {
    display.innerHTML = '';
    process++;
    operation = '/';
}

function result() { 
    let n1 = convertion(number1);
    let n2 = convertion(number2); 

    if(operation === '+') {        
        resultFinal = n1 + n2;        
    } else if(operation === '-') {        
        resultFinal = n1 - n2;        
    } else if(operation === '*') {        
        resultFinal = n1 * n2;        
    } else if(operation === '/') {        
        resultFinal = n1 / n2;        
    }
    display.innerHTML = resultFinal;
    
}

function convertion(n) {
    return parseFloat(n.join(''));
}

function clean() {
    display.innerHTML = '';
    process = 0;
    number1 = [];
    number2 = [];
    resultFinal = 0;
    operation = '';    
}