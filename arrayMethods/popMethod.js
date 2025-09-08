const inputArray = [1,2,3,4,5];

// using function
inputArray.pop();
console.log(inputArray);

// defining logic
function displayError(){
    console.error("Invalid input length");
    return null;
}

function popMethod(inputArray){
    if (!Array.isArray(inputArray) || inputArray.length === 0) return displayError();
    const tempArray = [];
    for (let i=0;i<inputArray.length-1;i++){
        tempArray.push(inputArray[i]);
    }
    inputArray = tempArray
    return inputArray;
}

console.log(popMethod(inputArray));
