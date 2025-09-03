const inputNumber = "009008" ;
const removeType = "both";

function removeLeadingZeroes(inputNumber){
    let finalOutput = "";
    let i = 0;
    if (inputNumber[0] == "+"){
            finalOutput = "+";
            i++;
    }else if (inputNumber[0] == "-"){
            finalOutput = "-";
            i++;
    }

    while (inputNumber[i] == "0"){
        i++;
    }

    for (i;i<inputNumber.length;i++){
        finalOutput += inputNumber[i];
    }
    
    return finalOutput;
}

function removeTrailingZeroes(inputNumber){
    let finalOutput = "";
    let i = 0;
    if (inputNumber[0] == "+"){
            finalOutput = "+";
            i++;
    }else if (inputNumber[0] == "-"){
            finalOutput = "-";
            i++;
    }

    let j = inputNumber.length ;

    while (inputNumber[j-1] == "0"){
        j--;
    }

    for (i;i<j;i++){
        finalOutput += inputNumber[i];
    }
    
    return finalOutput;
}

function removeZeroes(inputNumber, removeType){
    inputNumber = String(inputNumber);
    const type = removeType?.toLowerCase();
    if (removeType.toLowerCase() == "leading"){
        finalOutput = removeLeadingZeroes(inputNumber);
    }else if (removeType.toLowerCase() == "trailing"){
        finalOutput = removeTrailingZeroes(inputNumber);
    }else if (removeType.toLowerCase() == "both"){
        finalOutput = removeLeadingZeroes(inputNumber);
        finalOutput = removeTrailingZeroes(finalOutput);
    }
    return finalOutput;
}

console.log(removeZeroes(inputNumber, removeType));
console.log(removeZeroes("0000555333", 'trailing'));
console.log(removeZeroes('00011000', 'both'));