const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue",
};

// using function
let text = Object.entries(person);
console.log(text);

// defining logic
function objectEntriesMethod(person){
    const outputArray = [];
    for (let key in person){
        // console.log(key);
        outputArray.push([key,person[key]]);
    }
    return outputArray;
}

console.log(objectEntriesMethod(person));
