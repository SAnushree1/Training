let basicTemplate = "Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]";
let datatoFill = [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]];

function fetchData(word){
    let data = "";
    for (let i=0;i<datatoFill.length;i++){
        if (word.toLowerCase() == datatoFill[i][0].toLocaleLowerCase()){
            data = datatoFill[i][1];
        }
    }
    return data;
}

function replaceStringwithTemplate(basicTemplate, datatoFill){
    basicTemplate = basicTemplate.split(" ");
    let formattedOutput = [];
    for (let i = 0; i<basicTemplate.length;i++){
        firtLetterofWord = basicTemplate[i][0];
        if (firtLetterofWord == "#"){
            word = basicTemplate[i];
            cleanedWord = "";
            for (let i=2;i<word.length-1;i++){
                cleanedWord += word[i];
            }
            let data = fetchData(cleanedWord);
            formattedOutput.push(data);
        }else{
            formattedOutput.push(basicTemplate[i]);
        }
    }
    formattedOutput = formattedOutput.join(" ");
    return formattedOutput;
}

console.log(replaceStringwithTemplate(basicTemplate, datatoFill));