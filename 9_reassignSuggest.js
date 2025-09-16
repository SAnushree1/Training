// 9. Suggest reassignment for tasks assigned to zero-capacity people. toPersonSuggested can be to multiple person / single person.
// For example, Aarik is overloaded by 4 hours and Arun has less than 36 hours of task, that means Arun can take up this task
// [
//   { todoId: "t8", fromPerson: "Aarik", toPersonSuggested: "Arun" }
// ]

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
  { id: "t15", title: "Cycle check B",         estimateHrs: 8, priority: "low",    status: "todo",        due: "2025-09-30", assigneeId: "p4", dependsOn: ["t13"] },
];

const people = [
  { id: "p1", name: "Arun",   email: "arun@example.com",   capacityHrsPerDay: 6 },
  { id: "p2", name: "Uma",    email: "uma@",               capacityHrsPerDay: 5 }, // invalid email
  { id: "p3", name: "Aadhir", email: "aadhir@example.com", capacityHrsPerDay: 4 },
  { id: "p4", name: "Aarik",  email: "aarik@example.com",  capacityHrsPerDay: 0 }, // edge: zero capacity
];

function reassignSuggest(todos, people) {

  const zeroCapacity = {};
  const capacityMap = {};
  const workloadMap = {};

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    capacityMap[person.id] = person.capacityHrsPerDay * 5;;
    workloadMap[person.id] = 0;
    if (person.capacityHrsPerDay === 0) zeroCapacity[person.id] = person.name;
  }

  for (let i = 0; i < todos.length; i++) {
    const task = todos[i];
    if (task.status === "done" || !task.assigneeId) 
        continue;
    workloadMap[task.assigneeId] += task.estimateHrs;
  }

  const result = [];

  for (let i = 0; i < todos.length; i++) {
    const task = todos[i];
    if (task.status === "done" || !task.assigneeId) 
        continue;
    const personId = task.assigneeId;
    if (!zeroCapacity[personId]) 
        continue;

    let freePerson = null;
    for (let j = 0; j < people.length; j++) {
      const person = people[j];
      if (person.capacityHrsPerDay === 0) 
        continue;
      const capacity = capacityMap[person.id];
      const workload = workloadMap[person.id];
      if (workload + task.estimateHrs <= capacity) {
        freePerson = person.name;
        break;
      }
    }

    if (freePerson) {
      result.push({
        todoId: task.id,
        fromPerson: zeroCapacity[personId],
        toPersonSuggested: freePerson
      });
    }
  }

  return result;
}

console.log(reassignSuggest(todos, people));
