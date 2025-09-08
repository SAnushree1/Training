const inputString = "a,b,c,d,  e,f";
const separator = ",";

// using function
const myArray = inputString.split(",");
console.log(myArray);

// defining logic
function displayError(){
    console.error("Invalid input");
    return null;
}
function splitString(inputString, separator){
    if (typeof(inputString) !== "string") return displayError();
    const finalOutput = [];
    let temp = "";
    for(let i=0;i<inputString.length;i++){
        if (inputString[i] === separator){
            finalOutput.push(temp);
            temp = "";
        }else{
            temp += inputString[i];
        }
    }
    finalOutput.push(temp);

    return finalOutput;
}

console.log(splitString(inputString, separator));
