//call back function

function name(fun){
    consle.log("Dharmu");
    fun();  // This will call the function passed as an argument)
}

function greet()
{
    console.log("I am a call back function");
}

// name();   //
// greet();

name(greet);  //this is a call back function because we are passing a function as an argument to another function

