const inputArray = [1,2,3,4,5];

// using function
// inputArray.push(6);
// console.log(inputArray);

// defining logic
function pushMethod(inputArray, element){
    inputArray[inputArray.length] = element;
    return inputArray;
}

const element = 6;
console.log(pushMethod(inputArray,element));
