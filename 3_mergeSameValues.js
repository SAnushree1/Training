// 3. Merge objects with array values
// merge(
//   { fruits: ["apple"], veggies: ["carrot"] },
//   { fruits: ["banana"], drinks: ["water"] }
// );
// Output: { fruits: ["apple", "banana"], veggies: ["carrot"], drinks: ["water"] }

const inputFirstDictionary = { fruits: ["apple"], veggies: ["carrot"] };
const inputSecondDictionary = { fruits: ["banana","apple"], drinks: ["water"] };

function mergeSameValuesfromDictionaries(inputFirstDictionary,inputSecondDictionary){
    
    let mergedDictionary = inputFirstDictionary;

    // let secondDictionaryKeys = Object.keys(inputSecondDictionary);
    let secondDictionaryKeys = [];
    for (const key in inputSecondDictionary){
        secondDictionaryKeys.push(key);
    }
    
    for (let i=0;i<secondDictionaryKeys.length;i++){
        let currentKeytoCompare = secondDictionaryKeys[i];
        if (mergedDictionary[currentKeytoCompare] === undefined){
            mergedDictionary[currentKeytoCompare] = inputSecondDictionary[currentKeytoCompare];
        }else{
            let lengthofValuetoPush = inputSecondDictionary[currentKeytoCompare].length;
            for(let j=0;j<lengthofValuetoPush;j++){
                // To avoid duplicate values
                let found = false;
                for (let k=0;k<mergedDictionary[currentKeytoCompare].length;k++){
                    if (mergedDictionary[currentKeytoCompare][k] === inputSecondDictionary[currentKeytoCompare][j]){
                        found = true;
                    }
                }
                if(!found){
                    mergedDictionary[currentKeytoCompare].push(inputSecondDictionary[currentKeytoCompare][j]);
                }
            }
        }
    }
    return mergedDictionary;
}

console.log(mergeSameValuesfromDictionaries(inputFirstDictionary,inputSecondDictionary));