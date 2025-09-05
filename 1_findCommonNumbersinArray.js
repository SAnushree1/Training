// 1. Find the common numbers in two arrays
// const arr1 = [3, 45, 42, 11, 34];
// const arr2 = [35, -7, 87, 11, 1, 45]
// findCommon(arr1, arr2)
// Output = [11, 45]

const firstArray = [3, 45, 42, 11, 34];
const secondArray =  [35, -7, 87, 11, 1, 45];

function findCommonNumbersinArray(firstArray, secondArray){
    if (firstArray.length != 0 && secondArray.length != 0){
        let commonNumbersArray = [];
        for (let i = 0; i<firstArray.length; i++){
            if (typeof(firstArray[i]) != "number") continue;
            for (let j = 0; j<secondArray.length; j++){
                if (typeof(secondArray[j]) != "number") continue;
                if (firstArray[i] === secondArray[j]){
                    commonNumbersArray.push(firstArray[i]);
                    break;
                }
            }
        }
        
        return commonNumbersArray;
    }else{
        console.error("Invalid array length - an empty array found!");
        return null;
    }
}

console.log("Common elements :", findCommonNumbersinArray(firstArray, secondArray));