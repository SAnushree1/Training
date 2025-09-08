const inputArray = [1,2,3,4,5,6];

// using map function - multiply each number by 5
const outputArray = inputArray.map(num => num * 5);
console.log(outputArray);

// defining the actual logic
function displayError(){
    console.error("Invalid input");
    return null;
}

function mapFunction(inputArray, callbackFunction){
    if(!Array.isArray(inputArray)) return displayError();
    if (typeof callbackFunction !== 'function') return displayError();

    const outputArray = [];
    for (let i=0;i<inputArray.length;i++){
        outputArray.push(callbackFunction(inputArray[i],i,inputArray))
    }
    return outputArray;
}

console.log(mapFunction(inputArray,  num => num  * 5));
