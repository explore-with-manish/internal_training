// In TS, Function Parameters are required and you cannot pass extra arguments to a function
// In TS, Function Parameters are also typesafe, if you donot use 'any' type explicitly

// function hello_ts(name: string) {
//     console.log("Hello " + name);
// }

// hello_ts("TypeScript");
// hello_ts(1);
// hello_ts("Manish", "Sharma");
// hello_ts();

// // ---------------------------------------------------------- Optional Paramaters (?)
// // A required parameter cannot follow an optional parameter.
// function Add(x?: number, y?: number) {
//     if(x === void 0) x = 0;
//     if(y === void 0) y = 0;

//     return x + y;
// }

// console.log(Add(2, 3));
// console.log(Add(2));
// console.log(Add());

// ---------------------------------------------------------- Default Paramaters
// A required parameter cannot follow an default parameter.
function Add(x = 0, y = 0) {
    return x + y;
}

console.log(Add(2, 3));
console.log(Add(2));
console.log(Add());