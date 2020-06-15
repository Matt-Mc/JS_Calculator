const inputButton = document.querySelectorAll('#numbers');
const input = document.querySelector('#inputField');
const clear = document.querySelector('#Clear')
const backspace = document.querySelector("#Backspace")
const operators = document.querySelectorAll("#operator")
const equalButton = document.querySelector("#equals")
const PosNeg = document.querySelector("#posNeg")
const prevField = document.querySelector("#prevField")

numFlag1 = false;
numFlag2 = false;
operator = ""
num1 = 0
num2 = 0



function addOperator(e){
    operator = e.target.innerHTML 

    if(input.innerText == ""){
        return
    }


    if(numFlag1 == true && numFlag2 == false){
        num2 = parseInt(input.innerHTML)
        numFlag2 = true;
    }
    
    if(numFlag1 == false){
        num1 = parseInt(input.innerHTML)
        numFlag1 = true;
        input.innerText = ""
    }


    if(numFlag1 == true && numFlag2 == true){
        if(operator == "÷"){
            num1 = divide(num1,num2)
            prevField.innerText = num1
            input.innerText = ""
            num2 = 0
            numFlag1 = true
            numFlag2 = false
        }
        if(operator == "x"){
            num1 = multiply(num1,num2)
            prevField.innerText = num1
            input.innerText = ""
            num2 = 0
            numFlag1 = true
            numFlag2 = false
        }
        if(operator == "+"){
            num1 = add(num1,num2)
            prevField.innerText = num1
            input.innerText = ""
            num2 = 0
            numFlag1 = true
            numFlag2 = false
        }
        if(operator == "-"){
            num1 = subtract(num1,num2)
            prevField.innerText = num1
            input.innerText = ""
            num2 = 0
            numFlag1 = true
            numFlag2 = false
        }
    }





}

function addValue(e){
    input.innerText = input.innerHTML + e.target.innerText;
}

function equals(){
    num2 = parseInt(input.innerText)

    if(operator == "÷"){
        num1 = divide(num1,num2)
        prevField.innerText = num1
        input.innerText = ""
        num2 = 0
        numFlag1 = true
        numFlag2 = false
    }
    if(operator == "x"){
        num1 = multiply(num1,num2)
        prevField.innerText = num1
        input.innerText = ""
        num2 = 0
        numFlag1 = true
        numFlag2 = false
    }
    if(operator == "+"){
        num1 = add(num1,num2)
        prevField.innerText = num1
        input.innerText = ""
        num2 = 0
        numFlag1 = true
        numFlag2 = false
    }
    if(operator == "-"){
        num1 = subtract(num1,num2)
        prevField.innerText = num1
        input.innerText = ""
        num2 = 0
        numFlag1 = true
        numFlag2 = false
    }
}




function multiply(num1,num2){
    return num1 *  num2
}
function add(num1,num2){
    return num1 + num2
}
function subtract(num1,num2){
    return num1 - num2
}
function divide(num1,num2){
    return num1/num2
}








function addNegative(){

}


PosNeg.addEventListener("click", (e) => {
    addNegative(e)
})

equalButton.addEventListener("click",(e) => {
    equals()
});

backspace.addEventListener('click', (e) => {
    temp = input.innerText 
    temp = temp.substring(0,temp.length-1);
    input.innerText = temp
 })
 
 
 clear.addEventListener('click', (e) => {
     input.innerText = ""
     prevField.innerText = ""
     num1 = 0
     num2 = 0
     numFlag1 = false
     numFlag2 = false
 })
 
 
 inputButton.forEach(button => {
     button.addEventListener('click',(e) => {
         addValue(e)
     });
 });
 
 
 operators.forEach(operator => {
     operator.addEventListener('click',(e) => {
         addOperator(e)
     });
 });
