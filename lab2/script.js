// файл script.js
function factorial(number)
{
    if (number <= 1)
    {
        return 1;
    }
    let result = 1;
    for (let a = number; a != 1; a--)
    {
        result*=a;
        if (result == Infinity)
        {
            return Infinity
        }
    }
    return result
}

window.onload = function(){ 

    let a = ''
    let b = ''
    let theme = 0
    let theme_res = 0 
    let expressionResult = ''
    let selectedOperation = null
    let selectColor = "rgb(9, 42, 115)"
   
    // окно вывода результата
    outputElement = document.getElementById("result")
    // outputElement.innerHTML = a;
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    opButtons = document.querySelectorAll('[id ^= "btn_op_"]')
    // function factorial(number) 
    // {
    //     for 
    // }
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = +a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = +b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        if (selectedOperation) { opButtons.forEach(button => { button.style.backgroundColor = "" });}
        document.getElementById("btn_op_mult").style.backgroundColor = selectColor
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        if (selectedOperation != '+') { opButtons.forEach(button => { button.style.backgroundColor = "" });}
        document.getElementById("btn_op_plus").style.backgroundColor = selectColor
        if (b === '') { selectedOperation = '+' }
        else
        {
            expressionResult = (+a) + (+b)
            a = expressionResult.toString()
            b = ''
            outputElement.innerHTML = +a
        }
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        if (selectedOperation != '-') { opButtons.forEach(button => { button.style.backgroundColor = "" });}
        document.getElementById("btn_op_minus").style.backgroundColor = selectColor
        if (b === '') { selectedOperation = '-' }
        else
        {
            expressionResult = (+a) - (+b)
            a = expressionResult.toString()
            b = ''
            outputElement.innerHTML = +a
        }
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        if (selectedOperation) { opButtons.forEach(button => { button.style.backgroundColor = "" });}
        document.getElementById("btn_op_div").style.backgroundColor = selectColor
        selectedOperation = '/'
    }
    document.getElementById("btn_op_percent").onclick = function() { 
        if (a === '') return
        if (selectedOperation) { opButtons.forEach(button => { button.style.backgroundColor = "" });}
        document.getElementById("btn_op_percent").style.backgroundColor = selectColor
        selectedOperation = '%'
    }
    document.getElementById("btn_backspace").onclick = function() { 
        if (a === '') return
        if (b!== '')
        {
            b = b.slice(0, b.length-1);
            outputElement.innerHTML = b;
        }
        else
        {
            a = a.slice(0, a.length-1);
            outputElement.innerHTML = a;
        }
    }
    document.getElementById("btn_theme").onclick = function()
    {
        if (theme === 0)
        {
            document.getElementById("main_part").style.backgroundColor = "rgb(47, 41, 63)";
            theme = 1;
        }
        else
        {
            document.getElementById("main_part").style.backgroundColor = "rgb(65, 0, 244)";
            theme = 0;
        }
    }
    document.getElementById("btn_res_theme").onclick = function()
    {
        if (theme_res === 0)
        {
            document.getElementById("result").style.backgroundColor = "rgb(47, 41, 63)";
            theme_res = 1;
        }
        else
        {
            document.getElementById("result").style.backgroundColor = "rgb(65, 0, 244)";
            theme_res = 0;
        }
    }

    document.getElementById("btn_op_factorial").onclick = function() { 
        if (a === '') return
        if (b === ''){ a = factorial(+a); outputElement.innerHTML = a; }
        else { b = factorial(+b); outputElement.innerHTML = b; }
    }
    document.getElementById("btn_op_proton").onclick = function() { 
        if (a === '') return
        if (b === ''){ a = (1.67262*10**(-27))*1/(Math.sqrt(1- (a/100)**2)); outputElement.innerHTML = a; }
        else { b = (1.67262*10**(-27))*1/(Math.sqrt(1- (b/100)**2)); outputElement.innerHTML = b; }
    }
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        if (selectedOperation) { opButtons.forEach(button => { button.style.backgroundColor = "" });}
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    document.getElementById("btn_op_sign").onclick = function() { 
        if (selectedOperation) { b = -b; outputElement.innerHTML = b; }
        else { a = -a; outputElement.innerHTML = a; }
    }
    document.getElementById("btn_op_sqrt").onclick = function() { 
        if (selectedOperation) { b = Math.sqrt(b); outputElement.innerHTML = b; }
        else { a = Math.sqrt(a); outputElement.innerHTML = a; }
    }
    document.getElementById("btn_op_sqr").onclick = function() { 
        if (selectedOperation) { b = Math.pow(b,2); outputElement.innerHTML = b; }
        else { a = Math.pow(a,2); outputElement.innerHTML = a; }
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
        opButtons.forEach(button => { button.style.backgroundColor = "" });
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = (+a) * (+b) * 0.01;
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }
    };