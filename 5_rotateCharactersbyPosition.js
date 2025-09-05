// 5. Implement a function to rotate the characters in a string by a given number of positions.
// If the number is positive, rotate to the right.
// If the number is negative, rotate to the left.
// For example:
// rotate("arun", 2)   // "unar"
// rotate("arun", -2)  // "unar" (left rotation)
// rotate("hello", 3)  // "llohe"

const stringtoRotate = "hello";
const positiontoRotate = 3;
let rotatedString = "";

function rotateString(stringtoRotate,positiontoRotate){
    for (let i= positiontoRotate;i<stringtoRotate.length;i++){
        rotatedString += stringtoRotate[i];
    }
    for (let i = 0; i<positiontoRotate;i++){
        rotatedString += stringtoRotate[i];
    }
    return rotatedString;
}

function rotateCharactersbyPosition(stringtoRotate,positiontoRotate){
    if (positiontoRotate < stringtoRotate.length && typeof(positiontoRotate) === "number" && typeof(stringtoRotate) === "string" ){
        if (positiontoRotate<0){
            rotatedString = rotateString(stringtoRotate,Math.abs(positiontoRotate));
        }else{
            rotatedString = rotateString(stringtoRotate,positiontoRotate-1);
        }
        return rotatedString;
    }else{
        console.error("Invalid input");
        return null;
    }
}

console.log("Rotated String : ", rotateCharactersbyPosition(stringtoRotate,positiontoRotate));