
// console.log(typeof arr1);
// console.log(arr1[0]);
// console.log(arr1[1]);
// arr1[0]=45;
// arr1[1]=89;
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1);
// console.log(arr1.length);
// arr1.push(45);
// console.log(arr1);
// let a=arr1.pop();
// console.log(a);
// arr1.unshift(67);
// console.log(arr1);
// let b=arr1.shift();
// console.log(b);
// splice
// arr1.splice(index,deleteCount,replaceElement1,replaceElement2--------)
arr1.splice(1,1,89);
console.log(arr1);
let arr2=["sanjay","ISHAN","Krishna"];
arr2.splice(2,1,"Anuj","Vedant");
console.log(arr2);
let slice1=arr2.slice(1,3);
console.log(slice1);
let arr3=["apple","orange","mango"];
let a=arr3.indexOf("orange");
console.log(a);
let b=arr3.includes("mango");
console.log(b);
let arr4=[1,2,3,4,0,5,11];
let result=arr4.findIndex(num=>num>10);
console.log(result);

for(let i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}
// let num=12;
// if(num>10){
//     console.log(`number is greater than 10`);
// }
function check(num){
    if (num > 10) {
      console.log(`number is greater than 10`);
    }
    else{
        console.log(`number is less than 10`)
    }
}
check(100);
let check4=(num)=>{
     if (num > 10) {
       console.log(`number is greater than 10`);
     } else {
       console.log(`number is less than 10`);
     }
}
check4(1);

