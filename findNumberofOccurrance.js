let sent = "be kind whenever possible. kindness is what matters";
let word = "kind" ;

function findNumberofOccurance(sentence, word){    
    let count = 0;
    let firstletter = word.charAt(0);

    for (let i = 0; i < sent.length; i++){
        if (sent.charAt(i) == firstletter){
            if (check(i)){
                count++;
            }
        }
    }
    return count;
}

function check(index){
    let i = index;
    let j = 0;
    while(i<sent.length && j<word.length){
        if(sent.charAt(i)!=word.charAt(j)){
            return false;
        }
        i++;
        j++;
    }
    if (j<word.length) return false;
    return true;
}

console.log(findNumberofOccurance(sent, word));