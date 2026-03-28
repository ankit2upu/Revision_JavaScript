/*  when ever you execute js code then global excution context are created . 
    global execution context have two part:
    1. one is memory phase(where all variable and function are loaded, 
     note variable first initialed to undefine and fuction is load with body)

    2. second is code phase(where all code are execute)

    final all execution of code, global exection will be deleted .

    Note if any function also intilialized a variable then their local execution context(have both pemory and code phase) are create similary 
    their funtion like global.


      */



console.log(`what is value of x: ${x}`);       //what is value of x: undefined
var x=10;
console.log(`what is value of x ${x}`);       //what is value of x 10

/*  In above example  in code phase inital x=undefine loaded and 
in code phase console.log(`what is value of x: ${x}`); are executed so print undefine.
but again in memory phase x=10 intilialed.
In code phase again console.log(`what is value of x ${x}`); execute so print what is value of x:10
    */

