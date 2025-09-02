let array = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let number = "894";

console.log(Math.floor(1 / 10));

function convertNumbertoString( number){
    let string = " ";
    if (number < 10){
        string = array[number];
    }else{
        let temp = number;
        while(temp > 0){
            let n = temp % 10;
            string = array[n] + string;
            temp = Math.floor(temp / 10);
        }
    }
    return string;
}

console.log(convertNumbertoString( number));