// 1. Find number of pairs in an array which has the sum provided as a parameter
// For example:
// const arr1 = [4, 2, 5, 6, 8, 1];
// const sum = 6;
// numberOfPairs(arr1, sum);
// Pais that matches are [4, 2] => 6. [5, 1] => 6
// So output 2

const inputArray = [4, 2, 4, 6, 8, 1];
const inputSum = 6;

function displayError(){
    console.log("Invalid input");
    return null;
}

function findNumberofPairswithgivenSum(inputArray, inputSum){
    
    if (!Array.isArray(inputArray) || typeof(inputSum)!== "number") return displayError();

    let pairswithgivenSum = [];
    for (let i=0; i<inputArray.length;i++){
        for (let j=i; j<inputArray.length;j++){
            let sum = inputArray[i]+inputArray[j];
            if (sum === inputSum){
                pairswithgivenSum.push([inputArray[i],inputArray[j]]);
            }else{
                continue;
            }
        }
    }
    console.log(pairswithgivenSum);
    return pairswithgivenSum.length;
}

console.log(findNumberofPairswithgivenSum(inputArray,inputSum));