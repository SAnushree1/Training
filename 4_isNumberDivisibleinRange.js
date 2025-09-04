// 4. Check if a number is divisible by all numbers in a given range.
// For example:
// isDivisibleInRange([1, 5], 60) // true  (60 is divisible by 1,2,3,4,5)
// isDivisibleInRange([1, 5], 15) // false (15 is not divisible by 4)
// isDivisibleInRange([2, 6], 120) // true  (120 % 2,3,4,5,6 === 0)

const inputRange = [1,5];
const numbertoCheck = 60;

function displayError(){
    console.error("Invalid input!");
    return null;
}

function isNumberDivisibleinRange(inputRange,numbertoCheck){
    if (typeof(inputRange[0]) != "number" || typeof(inputRange[1]) != "number" || typeof(numbertoCheck) != "number") return displayError();

    if (inputRange.length === 2 && inputRange[0]<inputRange[1]){
        let isNumberDivisible = true;
        for (let i = inputRange[0];i<= inputRange[1];i++){
            if (numbertoCheck % i === 0) continue;
            else isNumberDivisible = false;
        }
        return isNumberDivisible;
    }else{
        return displayError();
    }
}

console.log(isNumberDivisibleinRange(inputRange,numbertoCheck));