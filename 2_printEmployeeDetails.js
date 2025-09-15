// 2. Print each person’s details as Name <email> and mark invalid emails.
// Arun <arun@example.com>
// Uma <uma@> (INVALID EMAIL)
// Aadhir <aadhir@example.com>
// Aarik <aarik@example.com>

const people = [
  { id: "p1", name: "Arun",   email: "arun@example.com",   capacityHrsPerDay: 6 },
  { id: "p2", name: "Uma",    email: "uma@",               capacityHrsPerDay: 5 }, // invalid email
  { id: "p3", name: "Aadhir", email: "aadhir@example.com", capacityHrsPerDay: 4 },
  { id: "p4", name: "Aarik",  email: "aarik@example.com",  capacityHrsPerDay: 0 }, // edge: zero capacity
];

function displayError(errorMessage){
  console.error(errorMessage);
  return null;
}

function isValid(mail){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return mail.match(regex);
}

function printEmployeeDetails(people){
    const peopleDetails = {};
    for (let i=0;i<people.length;i++){
        if (!people[i].id) {
            displayError("Employee id not found!");
            continue;
        }
        if (people[i].email && typeof(people[i].email) === "string"){
            if (isValid(people[i].email)){
            peopleDetails[people[i].name] = "<" + people[i].email + ">";
            }else{
                peopleDetails[people[i].name] = "<" + people[i].email + ">" + " (INVALID EMAIL)";
            }
        }else{
            displayError("Email id not found or not string!");
        }
    }
    return peopleDetails;
}

console.log(printEmployeeDetails(people));
