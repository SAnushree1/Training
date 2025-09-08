const inputArray = [1,3,4,56,true];
// const inputArray = new Array("Saab", "Volvo", "BMW");

// using function
console.log(inputArray.length);

// defining logic
function displayError(){
    console.error("Invalid input");
    return null;
}
function findLength(inputArray){
    if(!Array.isArray(inputArray)) return displayError();
    let i = 0;
    while(inputArray[i]!== undefined){
        i++;
    }
    return i;
}

console.log(findLength(inputArray));