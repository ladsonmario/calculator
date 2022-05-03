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
    } else if(process === 2) {
        e.preventDefault();
    }

    display.append(n);    
}

function addition(e) {
    if(process == 1 | process == 2)  {
        e.preventDefault();
    }

    if(number1.length !== 0) { 
        process = 1;        
        operation = '+';
        display.innerHTML = `${number1.join('')}+`;
        document.querySelector('#addition').classList.add('active');              
    }    
}

function subtraction(e) { 
    if(process == 1 | process == 2)  {
        e.preventDefault();
    }

    if(number1.length !== 0) { 
        process = 1;        
        operation = '-';
        display.innerHTML = `${number1.join('')}-`;
        document.querySelector('#subtraction').classList.add('active');              
    }
}

function multiplication(e) {  
    if(process == 1 | process == 2)  {
        e.preventDefault();
    }

    if(number1.length !== 0) { 
        process = 1;        
        operation = '*';
        display.innerHTML = `${number1.join('')}*`;
        document.querySelector('#multiplication').classList.add('active');              
    }
}

function division(e) {  
    if(process == 1 | process == 2)  {
        e.preventDefault();
    }

    if(number1.length !== 0) { 
        process = 1;        
        operation = '/';
        display.innerHTML = `${number1.join('')}/`;
        document.querySelector('#division').classList.add('active');              
    }
}

function result(e) {  
    if(process == 0 | process == 2) {
        e.preventDefault();
    }
    
    if(number2.length !== 0) {
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
        process = 2;
    } 
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