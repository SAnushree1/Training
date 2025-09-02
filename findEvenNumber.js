let array = [38, 3, 2, 8, 31, -10];

function findEvenNumber(array){
    let sum = 0;
    for (let i = 0; i<= array.length; i++){
        if (array[i] % 2 == 0){
            sum += array[i];
        }
    }
    return sum;
}

console.log(findEvenNumber(array));