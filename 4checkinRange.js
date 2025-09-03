const inputRange = [10,100];
const numbertoCheck = 11;
const inputRangeDate = [new Date('2025-01-01'), new Date('2025-02-01')];
const datetoCheck = new Date('2025-02-01') ;

function checkNumberinRangeorNot(inputRange,numbertoCheck){
    if (numbertoCheck > inputRange[0] && numbertoCheck < inputRange[1]){
        return true;
    }else{
        return false;
    }
}

function checkDateinRangeorNot(inputRange,numbertoCheck){
    if (datetoCheck > inputRangeDate[0] && datetoCheck < inputRangeDate[1]){
        return true;
    }else{
        return false;
    }
}

if (checkNumberinRangeorNot(inputRange,numbertoCheck)){
    console.log("Number is in range.");
}else{
    console.log("Number not in range!");
}

if (checkDateinRangeorNot(inputRange,numbertoCheck)){
    console.log("Date is in range.");
}else{
    console.log("Date not in range!");
}