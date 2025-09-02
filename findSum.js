let number = -10;
let multiple = 3;

function charSum(number, multiple){
    let sum = 0;
    for (let i = 1; i<= multiple; i++){
        sum += (i*number);
    }
    return sum;
}

console.log(charSum(number, multiple));