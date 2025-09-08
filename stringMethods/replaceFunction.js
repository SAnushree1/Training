const inputString = "Hii, Good Morning Anushree! Morning";
const originalWord = "Morning";
const wordToReplace = "Evening";

// using function
const outputString = inputString.replace(originalWord,wordToReplace);
console.log(outputString);

// defining function
function displayError(){
    console.error("Invalid input");
    return null;
}
function replaceFunction(inputString,originalWord,wordToReplace){
    if (typeof(inputString)!== "string") return displayError();
    let outputString = "";
    let i = 0;
    while(i<inputString.length){
        let wordExists = true;
        for (let j=0;j<originalWord.length;j++){
            if (inputString[i+j]!==originalWord[j]){
                wordExists = false;
                break;
            }
        }

        if(wordExists){
            outputString += wordToReplace;
            i += originalWord.length;
            break; 
            // Helps to stop after first word replacement
        }else{
            outputString += inputString[i];
            i++;
            // console.log(i,outputString);
        }
    }

    while(i<inputString.length){
        outputString += inputString[i];
        i++;
    }

    return outputString;
}

console.log(replaceFunction(inputString,originalWord,wordToReplace));
