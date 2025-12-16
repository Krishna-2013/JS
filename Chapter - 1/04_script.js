const Student_Information = {
    name : "Krishna",
    age : 12,
    percent : 89.98,
    is_pass : true,
};

console.log(Student_Information);
console.log(typeof Student_Information);

console.log(Student_Information["name"]);
console.log(Student_Information.name);


Student_Information.age = Student_Information.age + 1;
console.log(Student_Information.age);