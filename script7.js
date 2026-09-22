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

const student1 = {
  name: "Anirudh",
  age: 21,
  branch: "cse",
};
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
let field1 = "branch";
console.log(student2[field1]);

console.log(student2.field1);

// updating values of object
student1.name = "Anoop";
console.log(student1);
student1.age = 24;
console.log(student1);

//adding new values
student1.specialization = "AI";

console.log(student1);

// deleting values of object

delete student1.specialization;

console.log(student1);

const student3 = {
  name: "Ayush",
  age: 22,
  address: {
    street: "Khandari",
    city: "Agra",
  },
};
console.log(student3.address?.city);
console.log(student3.marks);

console.log(Object.hasOwn(student3, "age"));

const student4 = {
  name: "Sikha",
  age: 21,
  isPassed: true,
  subjects: ["html", "css", "deep learning"],
  address: {
    city: `Mathura`,
  },
  greet: function () {
    console.log(`Hello world ${this.name} here`);
  },
  learn() {
    console.log(`I am learning javaScript now a days`);
  },
};

console.log(student4.subjects[0]);

student4.greet();
student4.learn();

// make a counter object inside it make two funtions increment and decrement and print the value of count after calling increment three times
const counter1 = {
  count: 0,
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
};
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.count);

console.log("count" in counter1);
console.log("name" in counter1);

// Object.keys
// Object.values
// Object.entries
console.log(Object.keys(student4));
console.log(Object.values(student4));
console.log(Object.entries(student4));

const students = [{name:"Vikrant",age:20}, {name:"Anjali",age:22}, {name:"Rohit",age:21}];


// Array destructuring and object destructuring

const arr1=[1,2,3];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
const [first,second,third]=arr1;
console.log(first);
console.log(second);
console.log(third);

const student5={name:"Kiran",age:20};
console.log(student5.name);
console.log(student5.age);
const {name,age}=student5;//object destructuring
console.log(name);
console.log(age);
