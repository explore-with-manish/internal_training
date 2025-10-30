'use strict'

// let a;
// console.log("a is:", a);

// const a;                    // SyntaxError: Missing initializer in const declaration
// console.log("a is:", a);

// const env = "dev";
// console.log("env is:", env);

// env = "prod";               // TypeError: Assignment to constant variable.
// console.log("env is:", env);



// --------------------------------------------- Redeclaration
// You cannot create a variable with same name using let keyword
// const a = 10;
// const a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);


// --------------------------------------------- Redeclaration
// You cannot create a variable with same name using let keyword
if (true) {
    const a = 10;
    console.log("a is:", a);
}

const a = "Hello";
console.log("a is:", a);

