const phoneNumber = 9840164723 ;

function formattoUSPhoneNumber(phoneNumber){
    let validityofNumber = "Invalid Phone Number!";
    
    if (typeof(phoneNumber) == "number"){
        phoneNumber = String(phoneNumber);
        if (phoneNumber.length< 10 || phoneNumber.length> 10){
            return validityofNumber;
        }else{
            let USPhoneNumber = "(";
            for (let i=0; i<3; i++){
                USPhoneNumber += phoneNumber[i];
            }
            USPhoneNumber += ")";
            for (let i=3; i<6; i++){
                USPhoneNumber += phoneNumber[i];
            }
            USPhoneNumber += "-";
            for (let i=6; i<10; i++){
                USPhoneNumber += phoneNumber[i];
            }
            return USPhoneNumber;
        }
    }else{
        return validityofNumber;
    }
    
}

console.log(formattoUSPhoneNumber(phoneNumber));