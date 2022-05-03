let display = document.querySelector('.display');
let process = 0;
let number1 = [];
let number2 = [];
let resultFinal = 0;
let operation = '';

function number(n, e) {
    if(process === 0) {
        number1.push(n);
    } else if(process === 1) {                
        number2.push(n);
    } else {
        e.preventDefault();
    }
    
    display.append(n);    
}

function addition(e) {  
    if(process !== 2) {
        display.innerHTML = '';  
        process++;
        operation = '+';
        document.querySelector('#addition').classList.add('active');
    } else {
        e.preventDefault();
    }
    
}

function subtraction(e) { 
    if(process !== 2) {
        display.innerHTML = '';  
        process++;
        operation = '-';
        document.querySelector('#subtraction').classList.add('active');
    } else {
        e.preventDefault();
    }
}

function multiplication(e) {  
    if(process !== 2) {
        display.innerHTML = '';  
        process++;
        operation = '*';
        document.querySelector('#multiplication').classList.add('active');
    } else {
        e.preventDefault();
    }
}

function division(e) {  
    if(process !== 2) {
        display.innerHTML = '';  
        process++;
        operation = '/';
        document.querySelector('#division').classList.add('active');
    } else {
        e.preventDefault();
    }
}

function result() { 
    let n1 = convertion(number1);
    let n2 = convertion(number2); 
    
    if(Number.isNaN(n1) | Number.isNaN(n2)) {
        n1 = 0;
        n2 = 0;
    }

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
    process++;  
    
}

function convertion(n) {
    return parseFloat(n.join(''));
}

function removeClassActive() {
    document.querySelectorAll('.display--operations span').forEach(e => {
        e.classList.remove('active');
    });
}

function clean() {
    display.innerHTML = '';
    process = 0;
    number1 = [];
    number2 = [];
    resultFinal = 0;
    operation = ''; 
    removeClassActive();
}