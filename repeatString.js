let string = 20;
let times = 3;

function repeatString(string, times){
    let final_string = "";
    for (let i=0; i<times; i++){
        final_string += string;
    }

    return final_string;
}

console.log(repeatString(string, times))