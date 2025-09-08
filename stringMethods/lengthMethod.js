const inputString = "Hello world";

// using function
let length = inputString.length;
console.log(length);

// defining logic
function displayError(){
    console.error("Invalid input");
    return null;
}
function findLength(inputString){
    if (typeof(inputString) !== "string") return displayError();
    let i = 0;
    while(inputString[i]!== undefined){
        // console.log(inputString[i]);
        i++;
    }
    return i;
}

console.log("length of string:",findLength(inputString));

