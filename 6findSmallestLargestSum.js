const inputArray =  [45, 2, 25, 11, 16];

function findSumofSmallestandLargest(inputArray){
    let smallestElement = inputArray[0];
    let largestElement = inputArray[0];

    for (let i=1;i<inputArray.length;i++){
        if (inputArray[i] <smallestElement){
            smallestElement = inputArray[i];
        }

        if (inputArray[i] > largestElement){
            largestElement = inputArray[i];
        }
    }
    let sum = smallestElement+largestElement;
    
    return sum;
}

console.log(findSumofSmallestandLargest(inputArray));
