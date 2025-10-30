let i = 10;
console.log("i is: ", i);
console.log("type of i is: ", typeof i);

let f = function () {
    console.log("Hello");
}
console.log("f is: ", f);
console.log("type of f is: ", typeof f);

// Function is a type, which can refer to a block of code

// Can we create a variable of type number?
// Yes, we should be able to create a variable of type function

// Can we create a variable of type number inside a function?
// Yes, we should be able to create a variable of type function inside a function (Nested Function)

// function f1() {
//     function f2() {

//     }
// }

// Can we return a variable of type number from a function?
// Yes, we should be able to return a variable of type function from a function (Closure/HOF/Fn Currying)

// function f1() {
//     function f2() {

//     }

//     return f2;
// }

// Can we pass a variable of type number to a function?
// Yes, we should be able to pass a variable of type function to a function (Callback)
// document.getElementById("btn").addEventListener("click", function () {
//     console.log("Button Clicked");
// });