// const a="Rohit";
// const b=[1,2,3,4,5];


// // a="raj";
// // console.log(a);

// b[0]=65;
// console.log(b);
// objects in javaScript

// const studentName="Anirudh";
// const studentAge=21;
// const studentBranch="cse";

const student1={
    name:"Anirudh",
    age:21,
    branch:"cse"
}
console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.branch);

console.log(student1["name"]);
console.log(student1["age"]);
console.log(student1["branch"]);

// There are two special case where we use [] notation
// case 1
const student2 = {
  "full name": "Anirudh",
  age: 21,
  branch: "cse",
};

console.log(student2["full name"]); 
// case 2
let field1="branch";
console.log(student2[field1]);

console.log(student2.field1);


// updating values of object
student1.name="Anoop";
console.log(student1);
student1.age=24;
console.log(student1);

//adding new values
student1.specialization="AI";

console.log(student1);

// deleting values of object

delete student1.specialization;

console.log(student1);