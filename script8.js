// // Higher order function (function in which we pass function as an arguement)
// function executeTask(task){
//     task();
// }

// let greet1=function(){
//     console.log("Hello world !!!!!!");
// }

// executeTask(greet);



function greet(something){
    console.log(`Hello world ${something} here`);
}

let something="atul"
// greet("atul")
greet(something);

function executeTask(someTask){
    someTask();
}

let someTask=function(){
    console.log(`this is a callback function`);
}
executeTask(someTask);
executeTask(function(){
    console.log(`this is callback function 2`);
});
executeTask(()=>{
    console.log(`this is callback function 3`);
})
// asynchronous callback function
// setTimeout(function(){
//     console.log(`this will print after 2 seconds`)
// },2000);

function operation(a,b,task){
    return task(a,b);
}

const add=function(a,b){
   return a+b;
};
const multiplication=function(a,b){
    return a*b;
}

console.log(operation(10,2,add));
console.log(operation(11,2,function(a,b){
    return a+b;
}));
console.log(operation(12,2,multiplication));
console.log(operation(23,4,function(a,b){
    return a*b;
}))
console.log(operation(12,2,(a,b)=>a/b));

// function add(a,b){
//     return a+b;
// }
// let c=add(3,4);
// console.log(c);

// returning function like we return a value

function createGreeting(){
    return function(){
        console.log(`I am learning javaScript`);
    }
}

let b=createGreeting();
b();


// Multiplier factory
// closure in javaScript
function createMultiplier(factor){
    return function(number){
      return factor*number;
    }
}
const doubler=createMultiplier(2);
const tripler=createMultiplier(3);



console.log(doubler(4));
console.log(tripler(5));

