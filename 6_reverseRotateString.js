// 6. Implement a function to reverse rotate the characters in a string by a given number of positions.
// For example:
// reverseRotate("unar", 2)   // "arun"
// reverseRotate("llohe", 3)  // "hello"

const stringtoRotate = "llohe";
const positiontoRotate = 3;

function reverseRotateString(stringtoRotate,positiontoRotate){
    if (positiontoRotate < stringtoRotate.length && typeof(positiontoRotate) === "number" && typeof(stringtoRotate) === "string"){
        let rotatedString = "";
        for (let i= positiontoRotate;i<stringtoRotate.length;i++){
            rotatedString += stringtoRotate[i];
        }
        for (let i = 0; i<positiontoRotate;i++){
            rotatedString += stringtoRotate[i];
        }
        return rotatedString;
    }else{
        console.error("Invalid - String length less than or equal to position to rotate!");
        return null;
    }
}

console.log("Reversed String : ", reverseRotateString(stringtoRotate,positiontoRotate));