// 5. Return the highest-paid person per department.
// const employees = [
//   { name: "Raj", dept: "IT", salary: 600 },
//   { name: "Arun", dept: "IT", salary: 750 },
//   { name: "Deepak", dept: "HR", salary: 500 }
// ];
// highestSalary(employees);
// // Output: { IT: {name:"Jane", salary:750}, HR: {name: "Deepak", salary: 500} }


const employeesDetails = [
  { name: "Raj", dept: "IT", salary: 600 },
  { name: "Arun", dept: "IT", salary: 750 },
  { name: "Deepak", dept: "HR", salary: 500 }
];

function findHighestPaidPersonperDepartment(employeesDetails){
    let highestPaidPersons = {};
    for(let i=0;i<employeesDetails.length;i++){
        let employee = employeesDetails[i];
        let department = employee.dept;

        if (highestPaidPersons[department] === undefined){
            highestPaidPersons[department] = {name: employee.name, salary: employee.salary };
        }else{
            if (employee.salary > highestPaidPersons[department].salary){
                highestPaidPersons[department] = {name: employee.name, salary: employee.salary };
            }
        }
    }
    return highestPaidPersons;
}

console.log(findHighestPaidPersonperDepartment(employeesDetails));