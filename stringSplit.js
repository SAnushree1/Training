let string = "numenticaui";
let length = 2;
let a = [];
let z = "";

function stringSplit(string, length){
    let i = 0; 
    while(i <= string.length){
        z = string[i] + string[i+1];
        console.log(z);
        i += length;
        a.push(z);
    };
    return a;
}

console.log(stringSplit(string, length));