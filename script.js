let zero = document.querySelector("zero")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let ac = document.querySelector("#AC")
let togle = document.querySelector("togle")
let percent = document.querySelector("percent")
let divide = document.querySelector("divide")
let decimal = document.querySelector("#decimal")
let equals = document.querySelector("#equals")
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let results = document.querySelector("#results");
let buttons = document.querySelectorAll("button");

let step = 1;
let num1Array = [];
let num2Array = [];
let operatorArray = [];
let lastResult = [];

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        buttons.forEach(function(button){
            if(button.className === "temp"){
            button.classList.remove("temp");
            button.classList.add("operator");
            }
            })
        if(button.id !== "equals" && button.className !== "operator"){
            results.textContent += button.textContent;
            }
        if(button.id === "delete"){
            results.textContent = results.textContent.slice(0, -1);
        }
        else if(button.className === "operator"){
        results.textContent = "";
        button.classList.remove("operator");
        button.classList.add("temp");
        }
        if(button.id === "AC"){
            results.textContent = "";
            step = 1;
            num1Array = [];
            num2Array = [];
            operatorArray = [];
            }
        else if(step === 1){
            if(button.className === "num"){
                num1Array.push(button.textContent);
            }
            else if(button.id === "decimal"){
                num1Array.push(button.textContent);
                }
            else if(button.id === "delete"){
                num1Array.pop();
            }
            else if(button.id === "togle"){
                let num1Temp  = num1Array.join('');
                num1Array = [];
                num1Temp *= -1;
                num1Array.push(num1Temp);
                results.textContent = num1Temp;
                }
            else if(button.className === "temp" && num1Array.length !== 0){
                step += 1;
                operatorArray.push(button.textContent);
                }
            else if(button.className === "temp" && num1Array.length === 0){
                results.textContent = "";
                }
        }
        else if(step === 2){
            if(button.className === "num"){
                num2Array.push(button.textContent);
            }
            else if(button.id === "decimal"){
                num2Array.push(button.textContent);
                }
            else if(button.id === "delete"){
                num2Array.pop();
            }
            else if(button.className === "temp"){
                lastResult = [];
                lastResult.push(operate(num1Array.join(''), operatorArray.toString(), num2Array.join('')));
                results.textContent = lastResult;
                num1Array = [];
                num2Array = [];
                num1Array.push(lastResult.join(''));
                operatorArray = [];
                operatorArray.push(button.textContent);
                step = 2;
            }
            else if(button.id === "equals"){
                lastResult = [];
                lastResult.push(operate(num1Array.join(''), operatorArray.toString(), num2Array.join('')));
                results.textContent = lastResult;
                num1Array = lastResult;
                lastResult = [];
                num2Array = [];
                operatorArray = [];
                step = 1;
            }
        }
    });
});


let nums = results.textContent;

function operate(num1, op, num2) {
    switch(op){
        case("+"):
            resultado = +num1 + +num2;
            return resultado.toFixed(5);
            break;
        case("-"):
            resultado = +num1 - +num2;
            return resultado.toFixed(5)
            break
        case("x"):
            resultado = +num1 * +num2;
            return resultado.toFixed(5)
            break
        case("÷"):
            resultado = +num1 / +num2;
            return resultado.toFixed(5)
            break
    }
}
