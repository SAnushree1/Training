// 6. Convert an array of key-value pairs into an object.
// toObject([["name", "Arun"], ["age", 39]]);
// // Output: { name: "Arun", age: 39 }

const inputArray = [["name", "Arun"], ["age", 39], ["name", "Aarik"]];

function displayError(){
    console.log("Invalid input");
    return null;
}

function convertArraytoObject(inputArray){

    if (!Array.isArray(inputArray)) return displayError();

    let outputObject = {};
    for (let i=0;i<inputArray.length;i++){
        if (inputArray[i].length === 2 && typeof(inputArray[i]) === "object"){
            let key = inputArray[i][0];
            let value = inputArray[i][1];
            // outputObject[key] = value;
            let keyExists = false;
            for (let existingKey in outputObject){
                if (existingKey === key){
                    keyExists = true;
                    // console.log("Key already exists!!");
                    break;
                }   
            }
            if(!keyExists){
                outputObject[key] = value;
            }
        }else{
            continue;
        }
    }
    return outputObject;
}


console.log(convertArraytoObject(inputArray));
