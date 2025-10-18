let students = ["John", "Bill", "Smith", "Tom"];

console.log(students[2]);

let countries = new Array();

console.log(students)

students[2] = "Harry";

console.log(students);


students.push('Claude');//adding element at the end
students.unshift('Fron');//adding element at the beginning

countries.push('America', 'Australia');

console.log(students);

students.pop();//remove element from the end

console.log(students);

students.shift();//remove element from the beginning

console.log(students);

let studentIndex = students.indexOf('Harry');//finding index of element starting at 0: it result 2

console.log(studentIndex);

let errorNameIndex = students.indexOf('Billy');//finding index of element starting at 0: it result -1 as not exist

console.log(errorNameIndex);

let lengthOfStudents = students.length;//finding the actual length of array starting 1
console.log(lengthOfStudents);


