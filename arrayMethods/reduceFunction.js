const inputArray = [2,4,3,6,7];

// using function - find sum
const sum = inputArray.reduce((accumulator, currentElement) => accumulator + currentElement,10);
console.log(sum);

// defing logic
function displayError(){
    console.error("Invalid input");
    return null;
}

function reduceFunction(inputArray, callbackFunction, initialValue){
    if(!Array.isArray(inputArray) || inputArray.length === 0) return displayError();
    if (typeof callbackFunction !== 'function') return displayError();

    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = inputArray[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < inputArray.length; i++) {
        accumulator = callbackFunction(accumulator, inputArray[i], i, inputArray);
    }

    return accumulator;
}

console.log(reduceFunction(inputArray,  (total, num) => total + num, 10));
