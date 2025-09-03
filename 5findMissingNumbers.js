const inputArray =  [-7,7, 10, 12, 9] ;

function bubbleSort(inputArray){
    for (let i=0; i<inputArray.length;i++){
        for (let j=0; j<inputArray.length;j++){
            if (inputArray[j] > inputArray[j+1]){
                var temp = inputArray[j];
                inputArray[j] = inputArray[j+1];
                inputArray[j+1] = temp;
            }
        }
    }
    return inputArray;
}

function findMissingNumbers(inputArray){
    let missingNumbers = [];
    sortedArray = bubbleSort(inputArray);
    let i = 0;
    let temp = sortedArray[0] ;
    while(i<sortedArray.length-1){
        if (sortedArray[i+1] == temp+1){
            temp++;
            i++;
        }else{
            missingNumbers.push(temp+1);
            temp += 1;
        }
    }
    return missingNumbers;
}

console.log(findMissingNumbers(inputArray));
