let array = ['a', 'd', 1, true, 'cd', 33];
let type = "boolean";
let filteredArray = [];

function filterOut(array, type){
    for (let i = 0; i<array.length; i++){
        if (typeof(array[i]) != type){
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

console.log(filterOut(array, type));