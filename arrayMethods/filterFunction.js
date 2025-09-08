
const inputArray = [1, 2, 3, 4, 5];

// using function - To find even numbers.
const evenNumbers = inputArray.filter(num => num % 2 === 0);
console.log(evenNumbers);

// defining logic 
function displayError(){
    console.error("Invalid input");
    return null;
}

function filterFunction(numbers,callbackFunction){
    if(!Array.isArray(inputArray)) return displayError();
    if (typeof callbackFunction !== 'function') return displayError();

    const outputArray = [];
    for (let i=0;i<inputArray.length;i++){
        if (callbackFunction(inputArray[i],i,inputArray)){
            outputArray.push(inputArray[i]);
        }
        
    }
    return outputArray;
}

console.log(filterFunction(inputArray,num => num % 2 === 0));