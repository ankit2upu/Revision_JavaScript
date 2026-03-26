//dataType
//1. primitive data type

let name="ankit"        // string
let age=23              // number range pow(2 53)
let isLoggedIn=true;   // boolean               
let pin;               // undefine , type=undefine, 
let state=null;        // null   for standalone value, type=object
                       // symbol = for uniquenes
// console.log(typeof(age))   // type0f()= find type of dataType



// 2. non primitive data type (object key:value, collection of diff data type)

let student={

    name:"ankit",
    address:"ballia",
    age:23,
    cgpa:7.44,
    isPass:true,
    subject:{
        math:{
            teacher:"ram Babu",
            period:5,

        },
        Java:"Anno ",
        period:7
        
       },
    college:"knit"

}


console.table([student.name,student.address,student.age,student.cgpa,student.isPass,student.subject.math.teacher])


// key data type

let mySymbol=Symbol("key")
console.log(mySymbol)