// Find the common interest in books for the students
// Output
// Wings of Fire - [‘Arun’, ‘Balu’]
// Chakra - [‘Arun’, ‘Ashok’]
// War and Peace - [‘Ashok’, ‘Cathi’],
// All about Cricket- [‘Balu’],
// Against the wind- [‘Cathi’]
// The Shining - [‘Cathi’, ‘Ashok’]
// Find the user who shares most interest with other users.
// For example: Ashok since he shares book interest with Arun, Cathi. And also Arun since he shares interest with Balu and Ashok

const students = [
  { id: 0, name: "Arun", books: ["Wings of Fire", "Chakra"]},
  { id: 1, name: "Ashok", books: ["Chakra", "War and Peace", "The Shining"]},
  { id: 2, name: "Balu", books: ["Wings of Fire", "All about Cricket"]},
  { id: 3,name: "Cathi", books: ["Against the wind", "The Shining", "War and Peace"]},
  { id: 4,name: "Arun", books: ["Against the wind", "The Shining", "War and Peace","Wings of Fire", "Chakra"]}
  ];

function findHighestSharedReader(sharedReaders){
    let numberOfConnections = 0;
    for (const key in sharedReaders){
        if (sharedReaders[key].size > numberOfConnections){
            numberOfConnections = sharedReaders[key].size;
        }
    }

    const highestSharedReaders = [];
    for (const key in sharedReaders){
        if (sharedReaders[key].size === numberOfConnections){
            highestSharedReaders.push(key);
        }
    }
    return highestSharedReaders;
}

function findCommonBookInterestWithStudents(students){
    const commonReaders = {};
    for (let i=0;i<students.length;i++){
        const student = students[i];
        for(let j=0; j<student.books.length;j++){
            let book = student.books[j];
            if (typeof(book) !== "string") continue;
            book = book.toLowerCase();
            if (!commonReaders[book]){
                commonReaders[book] = [];
            }
            commonReaders[book].push(student.name + "_" + student.id);
        }
    }
    console.log("Common Readers:", commonReaders);
    return commonReaders;
}

function findSharedReaders(students){
    const sharedReaders = {};
    for (const student of students){
        const key = student.name + "_" + student.id;
        sharedReaders[key] = new Set();
    }
    const commonReaders = findCommonBookInterestWithStudents(students);
    for (const book in commonReaders){
        if (commonReaders[book].length>1){
            for (let i=0;i<commonReaders[book].length;i++){
                for (let j=0;j<commonReaders[book].length;j++){
                    if(commonReaders[book][i] !== commonReaders[book][j]){
                        sharedReaders[commonReaders[book][i]].add(commonReaders[book][j]);
                    }
                }
            }
        }
    }
    console.log("Shared Readers:", sharedReaders);
    const output = findHighestSharedReader(sharedReaders);
    return output;
}

console.log("Highest Shared Readers: ",findSharedReaders(students));
