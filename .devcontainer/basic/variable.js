// variable (const,var, let)

const name="ankit" 

var id=7688      /*nowadays can not use var due to block scope and functional scope 
                    & can be reinitialized and redeclared in and out */
                                          

let add="ballia"  /* block scope & reinitialize and redeclared in scope 
                     as well outside of scope */
pincode=221712

 //name="gupta"      
                    /* TypeError: Assignment to constant variable.
                         & can not reinisialize  and redeclared in both
                         */
                     
  console.log(name)
  console.log(id)   // 7688
  id=94477          
  console.log(id)    //94477
  add="rasra"        
  console.log(add);   // rasra
  pincode=221706
  console.log(pincode);
  console.table([name,id,add,pincode])

  // more about  it is globally scope
   
  {
    var id="inside scope"
        console.log(id);     // inside scope  globally scope

    let add="mau"
        console.log(add);      //mau    scope within block

    const name="gupta"         // gupta  scope within block
        console.log(name);

     
     
    }
    console.log("id of var out side scope:"+id)     // inside scope change
    console.log("add of let outside of scope:"+add)  // rasra  no change
    console.log("name of const outside of scope:"+name)  // ankit no change
    
    

  /*  NOTE  
    we never use var due to block scope and fuctional scope 
    it is a globally scope
  */

    let age;
    console.log(age); // undefine
    

