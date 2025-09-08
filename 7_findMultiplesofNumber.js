// 7. Group multiples from 1 to 10
// const inputArr = [34, 12, 10, 15, 7, 21, 81]
// Output = [{1: [34, 12, 10, 15, 7, 21, 81]}, { 2: [34, 12, 10]}, {3: [12, 15, 21, 81] }]

const inputArray = [34, 12, 10, 8, 15, 7, 21, 81];

function displayError(){
    console.log("Invalid input");
    return null;
}

function findMultiplesOfNumber(inputArray){

    if (!Array.isArray(inputArray)) return displayError();

    let outputArray = [];
    for (let i=1;i<11;i++){
        let multiplesGroup = {}; 
        if (i===1){
            multiplesGroup[1] = inputArray;
        }else{
            let multiples = [];
            for (let j=0;j<inputArray.length;j++){
                if(inputArray[j] % i ===0){
                    multiples.push(inputArray[j]);
                }
            }
            multiplesGroup[i] = multiples;
        }
        outputArray.push(multiplesGroup);
    }

    return outputArray;
}


console.log(findMultiplesOfNumber(inputArray));
