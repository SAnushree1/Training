let string = "traaainngfoooooornewbie                       ";

function charRepeating(string){
    let maxCount = 0;
    let charRepeated = string[0];
    for (let i = 0; i< string.length; i++){
        let count = 0;
        for (let j = i; j < string.length; j++){
            if (string[i] != string[j]){
                break;
            }
            count++;
        }
        if (count>maxCount){
            maxCount = count;
            charRepeated = string[i];
        } 
    }
    return charRepeated;
}

console.log(charRepeating(string));