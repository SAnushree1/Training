let string = "userarun";

function checkSpaces(string){
    let count = 0;
    for (let i =0; i<=string.length; i++){
        if (string[i] == " "){
            count++;
        }
    }
    if (count <= 0){
        return false;
    }else{
        return true;
    }
}

console.log(checkSpaces(string));