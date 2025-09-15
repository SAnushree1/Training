// 6. Find tasks that depend on a non-existent task which means the taskId in dependsOn is not a valid task.
// [
//   { id: "t12", title: "Data migration", dependsOn: ["t4", "t99"] }
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
  { id: "t15",  title: "Notifications",         estimateHrs: 3, priority: "low",    status: null,        due: "2025-09-25", assigneeId: null }
];

function isDependent(todo){
    return (Array.isArray(todo.dependsOn) && todo.dependsOn.length > 0);
}

function findInvalidDependencyTasks(todos){
    const tasksWithInvalidDependency = [];
    const validTaskIds = new Set(todos.map(task => task.id));
    
    const tasksWithDependency = todos.filter(isDependent);
    for (const task of tasksWithDependency){
        const invalidDependencyTasks = task.dependsOn.filter(taskID => !validTaskIds.has(taskID));
        if (invalidDependencyTasks.length>0){
            tasksWithInvalidDependency.push({"id": task.id,"title":task.title, "dependsOn":task.dependsOn});
        }
    }
    return tasksWithInvalidDependency
}

console.log(findInvalidDependencyTasks(todos));
