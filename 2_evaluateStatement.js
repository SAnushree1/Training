// Convert string to arithmetic operation
// For example accept a string like "10 + 20"
// and return output as 30
// b. "20 - 10" //Output 10

const inputExpression = "10.3 +(20+30)-20";

function displayError(){
    console.error("Invalid input");
    return null;
}

function convertExpressionToArray(inputExpression){
    const expressionArray = [];
    let temp = "";
    for (let i=0;i<inputExpression.length;i++){
        let currentElement = inputExpression[i];
        if (currentElement === "+" || currentElement === "-" || currentElement === "*" || currentElement === "/"|| currentElement === "(" || currentElement === ")" || currentElement === "^" || currentElement === "%"){
            if (temp.trim() !== "") {
                expressionArray.push(parseFloat(temp));
                temp = "";
            }
            expressionArray.push(currentElement);
        }else{
            temp += currentElement;
        }
    }
    if (temp.trim() !== "") {
        expressionArray.push(parseFloat(temp));
    }

    return expressionArray;
}

function findPrecedencOfOperator(operator){
    const precedence = {"+":2,"-":2, "*" : 3, "/" : 3, "%" : 3, "^" : 4};
    return precedence[operator];
}

function proceedOperation(operandStack,operatorStack){
    const secondElement = operandStack.pop();
    const firstElement = operandStack.pop();
    const operator = operatorStack.pop();
    // console.log(operandStack,operatorStack,firstElement,secondElement,operator);
    
    let result;

    switch(operator){
        case "+":
            result = firstElement + secondElement;
            break;
        case "-":
            result = firstElement - secondElement;
            break;
        case "*":
            result = firstElement * secondElement;
            break;
        case "/":
            if (secondElement === 0) return displayError();
            result = firstElement / secondElement;
            break;
        case "%":
            result = firstElement % secondElement;
            break;
        case "^":
            result = firstElement ** secondElement;
            break;
        default:
            return displayError();
    }
    // console.log(result);
    
    operandStack.push(result);
}

function evaluateExpression(inputExpression){
    if (typeof(inputExpression) !== "string") return displayError();

    const expressionArray = convertExpressionToArray(inputExpression);
    // console.log(expressionArray);
    
    const operandStack = [];
    const operatorStack = [];

    for (const element of expressionArray){
        // console.log(element);
        
        if (typeof(element) === "number"){
            operandStack.push(element);
            // console.log(operandStack);
            
        }else{
            switch (element){
                case "(":
                    operatorStack.push(element);    
                    break;
                case ")":
                    while (operatorStack.length && operatorStack[operatorStack.length - 1] !== "("){
                        proceedOperation(operandStack,operatorStack);
                    }
                    operatorStack.pop();
                    break;
                default:
                    while (operandStack.length && findPrecedencOfOperator(operatorStack[operatorStack.length -1]) >=  findPrecedencOfOperator(element)){
                        proceedOperation(operandStack,operatorStack);
                    }
                    operatorStack.push(element);
                    break;
            }
        }
    }
    while (operatorStack.length){
        proceedOperation(operandStack, operatorStack);
    }
    
    return operandStack[0];
}
console.log(evaluateExpression(inputExpression));
