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

    let pairsWithGivenSum = [];
    let seenPairs = {};
    for (let i=0; i<inputArray.length;i++){
        for (let j=i+1; j<inputArray.length;j++){
            let sum = inputArray[i]+inputArray[j];
            if (sum === inputSum){
                // pairsWithGivenSum.push([inputArray[i],inputArray[j]]);
                let a = inputArray[i];
                let b = inputArray[j];
                let key = (a<b) ? a + "," + b : b + "," + a;
                if (!seenPairs[key]){
                    pairsWithGivenSum.push([a,b]);
                    seenPairs[key] = true;
                }
            }else{
                continue;
            }
        }
    }
    console.log(seenPairs);
    return pairsWithGivenSum.length;
}


console.log(findNumberofPairswithgivenSum(inputArray,inputSum));
