// 3. Show total estimated hours of open (not done) tasks grouped by person.
// [
//   { person: "Arun", hrs: 5 },
//   { person: "Uma", hrs: 35 },
//   { person: "Aadhir", hrs: 15 },
//   { person: "Aarik", hrs: 4 },
//   { person: "Unassigned", hrs: 3 }
// ]

const people = [
  { id: "p1", name: "Arun",   email: "arun@example.com",   capacityHrsPerDay: 6 },
  { id: "p2", name: "Uma",    email: "uma@",               capacityHrsPerDay: 5 }, // invalid email
  { id: "p3", name: "Aadhir", email: "aadhir@example.com", capacityHrsPerDay: 4 },
  { id: "p4", name: "Aarik",  email: "aarik@example.com",  capacityHrsPerDay: 0 }, // edge: zero capacity
];

const todos = [
  // id, title, estimateHrs, priority, status, due(YYYY-MM-DD), assigneeId?, dependsOn?
  { id: "t1",  title: "Setup repo",            estimateHrs: 2, priority: "high",   status: "done",        due: "2025-09-16", assigneeId: "p1" },
  { id: "t2",  title: "Scaffold UI",           estimateHrs: 5, priority: "high",   status: "in-progress", due: "2025-09-18", assigneeId: "p1", dependsOn: ["t1"] },
  { id: "t3",  title: "Build login",           estimateHrs: 8, priority: "medium", status: "todo",        due: "2025-09-20", assigneeId: "p2" },
  { id: "t4",  title: "Payments integration",  estimateHrs: 13,priority: "high",   status: "todo",        due: "2025-09-19", assigneeId: "p2", dependsOn: ["t3"] },
  { id: "t5",  title: "Notifications",         estimateHrs: 3, priority: "low",    status: "todo",        due: "2025-09-25", assigneeId: null }, // unassigned
  { id: "t6",  title: "Profile screen",        estimateHrs: 5, priority: "medium", status: "in-progress", due: "2025-09-21", assigneeId: "p3" },
  { id: "t7",  title: "Accessibility pass",    estimateHrs: 2, priority: "medium", status: "todo",        due: "2025-09-15", assigneeId: "p3" }, // overdue (today is 2025-09-15 IST)
  { id: "t8",  title: "Error monitoring",      estimateHrs: 4, priority: "low",    status: "todo",        due: "2025-09-23", assigneeId: "p4" }, // zero-capacity assignee
  { id: "t9",  title: "Build login",           estimateHrs: 8, priority: "medium", status: "todo",        due: "2025-09-20", assigneeId: "p2" }, // duplicate title
  { id: "t10", title: "Refactor utils",        estimateHrs: 3, priority: "low",    status: "done",        due: "2025-09-14", assigneeId: "p1" }, // done but due in past
  { id: "t11", title: "Release v1",            estimateHrs: 6, priority: "high",   status: "blocked",     due: "2025-09-22", assigneeId: "p2", dependsOn: ["t4","t6"] },
  { id: "t12", title: "Data migration",        estimateHrs: 7, priority: "high",   status: "todo",        due: "2025-09-28", assigneeId: "p3", dependsOn: ["t4","t99"] }, // missing dep t99
  { id: "t13", title: "Cycle check A",         estimateHrs: 1, priority: "low",    status: "todo",        due: "2025-09-30", assigneeId: "p3", dependsOn: ["t14"] },
  { id: "t14", title: "Cycle check B",         estimateHrs: 1, priority: "low",    status: "todo",        due: "2025-09-30", assigneeId: "p3", dependsOn: ["t13"] },
  { id: "t15",  title: "Notifications",         estimateHrs: 3, priority: "low",    status: null,        due: "2025-09-25", assigneeId: null }
];

function estimateWorkHours(people,todos){
    const personNames = {};
    people.forEach(person => {
        personNames[person.id] = person.name;
    });

    const result = {};
    
    for (const todo of todos){
        if ( todo.status === undefined || todo.status === null || todo.status.toLowerCase() === "done") continue;

        let person = "Unassigned";
        if (todo.assigneeId && personNames[todo.assigneeId]){
            person = personNames[todo.assigneeId];
        }

        if (!result[person]){
            result[person] = 0;
        }
        result[person] += todo.estimateHrs;
    }
    return result;
}

console.log(estimateWorkHours(people,todos));

