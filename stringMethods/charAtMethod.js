const text = "Hello World";

// using function
const letterAtPosition = text.charAt(7);
console.log(letterAtPosition);

// defining logic
function displayError(){
    console.error("Invalid input");
    return null;
}
function findCharAtGivenPosition(text,position){    
    if (typeof(text) !== "string" || position>text.length-1) return displayError();
    let letterAtPosition = "";
    // for(let i=0;i<text.length;i++){
    for(let i=0;i<= position;i++){
        if (i===position){
            letterAtPosition = text[i];
            // break;
        }
    }
    return letterAtPosition;
}

const position = 7;
console.log(findCharAtGivenPosition(text,position));
