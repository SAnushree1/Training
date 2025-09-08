// object.values method - to extract keys from dictionary

const person = { name: "sanu",age: 20, place: "palakkad"};

// using funcion
const keys = Object.keys(person);
console.log(keys); 

// defining logic
function objectKeysMethod(person){
    let keys = [];
    for (const key in person){
        keys.push(key);
    }
    return keys;
}

console.log(objectKeysMethod(person));


