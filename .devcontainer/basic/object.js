//object in depth
    /*  object declared in two way 1. using literal(not make a singleton object)
   2. using constructor (constructor give singleton object )   */

  

// object literal
let mySym=Symbol("key1")  // symbol datatype

let student={
    name:"ankit",
    "full Name":"ankit kumar gupta",
    roll:23,
    [mySym]:"myKey1"
}


// to print
 console.table([student.name,student["name"],student["roll"]])
// console.log(student["name"])
// console.log(student["roll"]);
console.log(student["full Name"]);
console.log(student[mySym]);

// to change a value
student.name="anit"
student["name"]="gupta"
student.roll=student.roll+5
console.log(student.name); //  gupta
console.log(student.roll);  //28

// to lock the object
// Object.freeze(student)

student.name="Raju rastaugii"
console.log(student.name);  // print gupta  i.e no change if freez
 
// function
student.greeting=function(){
    return `Namaste 🙌 my name is,${this.name}`
}
console.log(student.greeting);  // undefine if freez and [Function (Annonymous )] if unfreez object
console.log(student.greeting())  //TypeError: student.greeting is not a function
 
// string interpolation
console.log(`my name is,${this.name}`);   //undefine
console.log(`my name is,${student.name}`); // my name is name change?





