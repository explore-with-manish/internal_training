'use strict'

// Function Creation
// function <FunctionName>(<Parameters>) {
//     <Function Body>
// }

// Function Call
// <FunctionName>(<Arguments>)

// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
// }

// hello('Manish');
// hello(10);
// hello();
// hello('Manish', 'Sharma');

// function add(a, b) {
//     // a = a || 0;
//     // b = b || 0;

//     if (a === void 0) a = 0;
//     if (b === void 0) b = 0;

//     if (typeof a !== 'number' || typeof b !== 'number')
//         throw new Error("Invaid Arguments")

//     return a + b;
// }

function add(a = 0, b = 0) {
    if (typeof a !== 'number' || typeof b !== 'number')
        throw new Error("Invaid Arguments")

    return a + b;
}

console.log(add(2, 3));
console.log(add(2));
console.log(add());