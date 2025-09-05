// 2. Find the numbers that are present in one array but not in the other.
// For example:
// const arr1 = [3, 45, 42, 11, 34];
// const arr2 = [35, -7, 87, 11, 1, 45];
// findDifference(arr1, arr2)
// Output: [3, 42, 34, 35, -7, 87, 1]

const firstArray = [3,45, 42, 11, 34];
const secondArray =  [35, -7, 87, 11, 1, 45,true];
let uniqueNumbers = [];

function findUniqueElements(firstArray,secondArray){
        for (let i = 0; i<firstArray.length; i++){
            if (typeof(firstArray[i]) != "number") continue;
            let count = 0;
            for (let j = 0; j<secondArray.length; j++){
                if (firstArray[i] === secondArray[j]){
                    count++;
                }
            }
            if (count === 0) uniqueNumbers.push(firstArray[i]);
            count = 0;
        }
        return uniqueNumbers;
}

function findDifferentNumbersinArray(firstArray,secondArray ){
    if (firstArray.length != 0 && secondArray.length != 0){
        findUniqueElements(firstArray,secondArray);
        findUniqueElements(secondArray,firstArray);
        return uniqueNumbers;
    }else{
        console.error("Invalid array length - an empty array found!");
        return null;
    }
}

console.log("Unique elements from both array : ", findDifferentNumbersinArray(firstArray,secondArray));
