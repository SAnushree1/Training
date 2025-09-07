// 4. From an array of strings, return an object with the count of each string.
// count(["a", "b", "a", "c", "b", "a"]);
// // Output: { a: 3, b: 2, c: 1 }

const inputArray = ["aaaa", "b", "a", "c", "b", "a"];

function displayError(){
    console.log("Invalid input");
    return null;
}

function returnCountofeachString(inputArray){
    if (!Array.isArray(inputArray)) return displayError();

    let outputObject = {};
    for(let i=0;i<inputArray.length;i++){
        if (typeof(inputArray[i])!=="string"){
            continue;
        }else{
            const key = inputArray[i].toLowerCase();
            if (outputObject[key] ===  undefined){
                outputObject[key] = 1;
            }else{
                outputObject[key]++;
            }
        }
    }

    return outputObject;
}


console.log(returnCountofeachString(inputArray));
