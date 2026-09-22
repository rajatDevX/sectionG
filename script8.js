// Higher order function (function in which we pass function as an arguement)
function executeTask(task){
    task();
}

let greet=function(){
    console.log("Hello world !!!!!!");
}

executeTask(greet());