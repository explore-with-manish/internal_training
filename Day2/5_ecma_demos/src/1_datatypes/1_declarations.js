'use strict'
// console.log("Hello from declarations.js file!");

// a = 10;
// console.log("a is:", a);

// ------------------------- Hoisting
// Hoisting - Hoisting is JavaScript Runtime's default behavior of moving declarations to the top before execution

// a = 10;
// console.log("a is: ", a);
// var a;

// --------------------------------------------- Not Type Safe (Loosely Typed)

// var a = 10;
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);



// --------------------------------------------- Redeclaration
// You can create a variable with same name using var keyword
// Runtime will pick the nearest variable declaration/initilization

// var a = 10;
// var a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);


// // ----------------Gloal Scope
// var a = 10;

// function test() {
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// // ----------------Local Scope
// var a = 10;

// function test() {
//     var a = 20;
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// ----------------
// Block Scoping is not supported with var keyword

// var a = 10;

// function test() {
//     if (false) {
//         var a = 30;
//         console.log("Inside block, a is:", a);
//     }
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

var i = "Hello";
console.log("Before, i is:", i);

(function () {
    for (var i = 0; i < 5; i++) {
        console.log("Inside loop, i is:", i);
    }
})();

console.log("After, i is:", i);
