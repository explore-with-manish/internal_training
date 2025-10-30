'use strict'

// let a = 10;
// console.log("a is: ", a);
// console.log("tpe of a is: ", typeof(a));

// ------------------------- Hoisting
// Hoisting - Hoisting is not supported

// a = 10;
// console.log("a is: ", a);
// let a;

// --------------------------------------------- Not Type Safe (Loosely Typed)

// let a = 10;
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// --------------------------------------------- Redeclaration
// You cannot create a variable with same name using let keyword
// let a = 10;
// let a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);


// ----------------
// Block Scoping is  supported with let keyword

// var a = 10;

// function test() {
//     if (true) {
//         let a = 30;
//         console.log("Inside block, a is:", a);
//     }
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);


let i = "Hello";
console.log("Before, i is:", i);

for (let i = 0; i < 5; i++) {
    console.log("Inside loop, i is:", i);
}

console.log("After, i is:", i);

