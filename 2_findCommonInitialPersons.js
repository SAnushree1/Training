// 2. Group names according to the initial character
// Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
// Output
// ["arun", "aadhir", "aariketh"]
// ["balu"]
// ["cathy"]
// ["krish", "kamal"]

const inputArray = ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal","Aru"];

function displayError(){
    console.error("Invalid input");
    return null;
}
function findCommonIntialPersons(inputArray){
    if (!Array.isArray(inputArray)) return displayError();

    const output = {};
    for (let i=0;i<inputArray.length;i++){
        if (typeof(inputArray[i]) !== "string") continue;
        const name = inputArray[i].toLowerCase();
        const firstLetter = name[0].toLowerCase();
        if(!output[firstLetter]){
            output[firstLetter] = [];
        }

        // if(!output[firstLetter].includes(name)){
        //     output[firstLetter].push(name);
        // }

        let exists = false;
        for (let j=0;j<output[firstLetter].length;j++){
            if (output[firstLetter][j] === name){
                exists = true;
                break;
            }
        }
        if(!exists){
            output[firstLetter].push(name);
        }
        
    }
    // console.log(output);
    return Object.values(output);
}

console.log(findCommonIntialPersons(inputArray));