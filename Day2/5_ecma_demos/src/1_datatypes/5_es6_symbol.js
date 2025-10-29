// const red = "red";

// function isRedColor(arg) {
//     return arg === red;
// }

// console.log(isRedColor(red));
// console.log(isRedColor("red"));

// let clr = "red";
// console.log(isRedColor(clr));

// // -----------------------------------

// const red = { code: "red" };

// function isRedColor(arg) {
//     return arg === red;
// }

// console.log(isRedColor(red));
// console.log(isRedColor({ code: "red" }));

// let clr = { code: "red" };
// console.log(isRedColor(clr));

// // -----------------------------------

const red = Symbol("red");

function isRedColor(arg) {
    return arg === red;
}

console.log(isRedColor(red));
console.log(isRedColor(Symbol("red")));

let clr = Symbol("red");
console.log(isRedColor(clr));
