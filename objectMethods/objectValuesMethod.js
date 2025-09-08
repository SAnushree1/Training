// object.values method - to extract keys from dictionary

const person = {name: "sanu",age: 20, place: "palakkad"};

// using funcion
const values = Object.values(person);
console.log(values);

// defining logic
function objectValuesMethod(person){
    let values = [];
    for (const key in person){
        values.push(person[key]);
    }
    return values;
}


console.log(objectValuesMethod(person)); 