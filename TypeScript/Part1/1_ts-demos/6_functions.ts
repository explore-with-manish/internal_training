// function hello() {
//     console.log('Hello!');
// }

// // hello();

// // var r = hello();
// // console.log(r);
// // console.log(typeof r);

// let r1: undefined;
// // r1 = 10;        // Type '10' is not assignable to type 'undefined'.
// r1 = undefined;
// r1 = void 0;
// console.log(r1);

// let r2: void;
// // r2 = 10;       // Type 'number' is not assignable to type 'void'.
// r2 = undefined;;
// r2 = void 0;
// console.log(r2);

// let r3: never;
// // r3 = 10;        // Type 'number' is not assignable to type 'never'.
// // r3 = undefined; // Type 'undefined' is not assignable to type 'never'.
// // r3 = void 0;    // Type 'undefined' is not assignable to type 'never'. 
// console.log(r3);

// // let r4: any;
// // console.log(r4.trim());     // Runtime error

// // let r5: unknown;
// // console.log(r5.trim());         // Compile time error - Property 'trim' does not exist on type 'unknown'.

// // JAVASCRIPT - undefined, void
// // TypeScript - any, unknown, never

// -------------------------------------------------

// Write a function to log a message passed and throw exception to terminate the execution

// var app: any;

// app.get('/index', function (req: any, res: any) {
//     try {
//         // Database call
//     } catch (err) {
//         logAndTerminate(err, req, res);
//         console.log("Some more Code to execute");
//     }
// });

// function logAndTerminate(err: any, req: any, res: any): never {
//     console.log(err);
//     res.status(500).send('Something went wrong!');
//     throw new Error("Something went wrong!");
// }

// -----------

// function iterate(): never {
//     let i = 1;
//     while (true) {
//         console.log(++i);
//     }
// }

// iterate();
// console.log("Last Line in the Code...");

// -------------------------------------------------

// Funtion Declaration - Hoisted
function add1(x: number, y: number): number {
    return x + y;
}

// Function Expression
var add2 = function (x: number, y: number): number {
    return x + y;
}

let add3: (x: number, y: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
};

let add4: (x: number, y: number) => number;
add4 = function (x, y) {
    return x + y;
};

// Multiline Lambdas
let add5: (x: number, y: number) => number;
add5 = (x, y) => {
    return x + y;
};

// Singleline Lambdas
let add6: (x: number, y: number) => number;
add6 = (x, y) => x + y;

console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
console.log(add4(2, 3));
console.log(add5(2, 3));
console.log(add6(2, 3));

// Type Aliases
type AddFnType = (x: number, y: number) => number;
let add7: AddFnType;