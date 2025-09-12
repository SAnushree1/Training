const inputTime = ["5:00 PM","5:04 PM"];

function displayError(){
    console.error("Invalid input");
    return null;
}

function convertToMinutes(inputTime){
    let [time,timeZone]  = inputTime.split(" ");
    let [hours,minutes] = time.split(":");
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    timeZone = timeZone.toUpperCase();

    if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59 || (timeZone !== "AM" && timeZone !== "PM")) {
        return displayError();
    }

    if (timeZone === "PM" && hours !== 12 ){
        hours += 12;
    }else if (hours === 12 && timeZone === "AM" ){
        hours = 0;
    }

    const totalMinutes = (hours * 60) + minutes;
    return totalMinutes; 
}

function findTimeDifference(inputTime){
    const startTime = convertToMinutes(inputTime[0]);
    const endTime =  convertToMinutes(inputTime[1]);
    // console.log(endTime,startTime);

    if (startTime === null || endTime === null) {
        return displayError();
    }
    
    let timeDifference = endTime-startTime;
    if( timeDifference < 0){
        timeDifference += 1440;
    }
    const hourDiff = Math.floor((timeDifference) / 60 );
    const minuteDiff = (timeDifference) % 60;

    return {hourDiff , minuteDiff};
}

// const { hourDiff, minuteDiff } = findTimeDifference(inputTime);
console.log(findTimeDifference(inputTime));
