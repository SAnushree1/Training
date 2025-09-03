const inputTime = "11:15";

function fetchTimetoDictionary(inputTime){
    let count = 0;
    for(let i=0;i<inputTime.length;i++){
        if(inputTime[i] == ":"){
            count++;
        }
    }

    let time = {"HH": 0, "MM": 0, "SS":0, "am/pm": "" };

    let inputLength = inputTime.length;
    if (inputTime[inputLength - 2]=="a"){
        time["am/pm"] = "am";
    }else if(inputTime[inputLength - 2]=="p"){
        time["am/pm"] = "pm";
    }

    if (count == 2){
        time["HH"] = inputTime[0]+inputTime[1];
        time["MM"] = inputTime[3]+inputTime[4];
        time["SS"] = inputTime[6]+inputTime[7];
    }

    if (count == 1){
        time["HH"] = inputTime[0]+inputTime[1];
        time["MM"] = inputTime[3]+inputTime[4];
    }

    return time;
}

function convertTimetoMinutes(inputTime){
    let time = fetchTimetoDictionary(inputTime);
    let totalMinutes = 0;

    if (time["HH"] != 0 && time["HH"]<=24 && time["HH"] > 0){
        totalMinutes += (time["HH"] * 60); 
    }

    if (time["MM"] != 0 && time["MM"]<=60 && time["MM"]>0){
        totalMinutes += Number(time["MM"]); 
    }
    if (time["SS"] != 0){
        if (time["SS"]<30){
            totalMinutes += 0;
        }else{
            totalMinutes += 1;
        }
    }
    return totalMinutes;
}

console.log(convertTimetoMinutes(inputTime));