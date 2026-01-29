// Global Scope: Variable that can be accessed anywhere in the program.

let x = 10; 
function show(){
    console.log(x);
    
}
show();
console.log(x);

// Local Scope: Variable that is accessible only inside the function where it is declared.

function greet(){
    let y = 20;
    console.log(y);
    
}
// console.log(y);// Error not accessible outdise the function
greet();


// block scope

{
    let z = 30;
    const  v = 40;

    console.log(z);
    console.log(v);
    
}


console.log(v);// error not accessible outside the block 

// var is not block scoped
