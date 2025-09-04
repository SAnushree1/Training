// 3. Check if the number is in range
// For example:
// checkInRange([1, 10], 4) // true since 4 is in between 1
// checkInRange([10, 100], 8) // true false 8 is not in between 10 and 100
 
const inputRange = [10, 100];
const numbertoCheck = 80;

function displayError(){
    console.error("Invalid input!");
    return null;
}

function checkNumberinRangeorNot(inputRange,numbertoCheck){
    if (typeof(inputRange[0]) != "number" || typeof(inputRange[1]) != "number" || typeof(numbertoCheck) != "number") return displayError();

    if (inputRange.length === 2 && inputRange[0]<inputRange[1]){
        if (numbertoCheck > inputRange[0] && numbertoCheck < inputRange[1]){
            return true;
        }else{
            return false;
        }
    }else{
        return displayError();
    }
}

console.log(checkNumberinRangeorNot(inputRange,numbertoCheck));
