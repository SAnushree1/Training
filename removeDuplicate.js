let array = [1, "1", "two", "two", 3, "two"];

function removeDuplicates(array){
    let final = [];
    for (let i = 0; i< array.length; i++){
        let duplicate = false;
        for (let j = 0; j< final.length; j++){
            if (array[i] == array[j]){
                duplicate = true;
                break;
            }
        }
        if(!duplicate){
            final.push(array[i]);
        }
    }
    return final;
}

console.log(removeDuplicates(array));