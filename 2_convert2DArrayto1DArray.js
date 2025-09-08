// 2. Write a function that flattens a nested array.Find
// For example:
// flatten([1, 2, [3, 4]]);
// output: [1,2,3,4]

const inputArray = [1, 2, [3, 4]];

function displayError(){
    console.log("Invalid input");
    return null;
}

function convert2DArrayto1DArray(inputArray){

    if (!Array.isArray(inputArray)) return displayError();

    const output1DArray = [];
    for (let i=0; i<inputArray.length;i++){
        let currentElement = inputArray[i];
        if (typeof(inputArray[i]) === "object"){
            let values = convert2DArrayto1DArray(currentElement);
            for (let j=0; j<values.length;j++){
                output1DArray.push(values[j]);
            }
        }else{
            output1DArray.push(currentElement);
        }
    }
    return output1DArray;
}


console.log(convert2DArrayto1DArray(inputArray));

