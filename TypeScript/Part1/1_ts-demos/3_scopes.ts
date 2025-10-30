// Global Scope (If Module is disabled in tsconfig.json)
// NameSpace Scope
// File (Module) Scope (If Module is enabled in tsconfig.json)
// Function Scope
// Block Scope - let / const

// var i = 20;
// console.log("i is: ", i);

// namespace helps you create Module Pattern in JS
// namespace Scopes {
//     var i = 20;
//     console.log("i is: ", i);
// }

// namespace Scopes {
//     export var i = 20;
// }

// namespace Usage {
//     console.log("i is: ", Scopes.i);
// }

// namespace VarKeyword {
//     // var i = 20;
//     // var i = 30;
//     // console.log(i);

//     // var j = 20;
//     // // var j = "abc";              // Subsequent declaration must have the same type
//     // console.log(j);

//     // Hoisting - var declarations are hoisted to the top of the function scope
//     // a1 = "Hello";
//     // console.log(a1);
//     // var a1;

//     // var does not support Block Scoping
//     var i = 100;
//     console.log("Before Block, i is:", i);

//     for (var i = 0; i < 5; i++) {
//         console.log("Inside Block, i is:", i);
//     }

//     console.log("After Block, i is:", i);
// }

namespace LetKeyword {
    // let i = 20;
    // // let i = 30;                 // Cannot redeclare block-scoped variable 'i'
    // console.log(i);

    // Hoisting  Nit Supported
    // a1 = "Hello";
    // console.log(a1);
    // let a1;

    // let supports Block Scoping
    var i = 100;
    console.log("Before Block, i is:", i);

    for (let i = 0; i < 5; i++) {
        console.log("Inside Block, i is:", i);
    }

    console.log("After Block, i is:", i);
}