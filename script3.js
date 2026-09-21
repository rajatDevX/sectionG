// function greet(){
//     console.log("this will print after some time");
// }
// let greet1=function(){
//     console.log(`this is assignment type function`);
// }
// let greet2=()=>{
//     console.log(`this is an arrow function`);
// }
// setTimeout(greet,4000);
// setTimeout(greet1,4000);
// setTimeout(()=>{
//     console.log(`this is a callback function`)
// },5000);
function greet3(name, college, branch) {
  console.log(`Hi ${name} here , I am currently in ${college} university and I am doing B.Tech in 
        ${branch} branch`);
}
setTimeout(greet3, 4000, "Vivek", "gla", "cse");
