// 'use strict'

// // // In ES ‘this’ refers to the parent of the function and the object through which the function was called

// // // Function Declaration
// // function test1() {
// //     console.log(this);
// // }

// // // Function Expression
// // const test2 = function () {
// //     console.log(this);
// // }

// // // test1();
// // // test2();


// // var p1 = {
// //     id: 1,
// //     test: function () {
// //         console.log(this);
// //     }
// // }

// // // p1.test();

// // // setTimeout(test1, 2000);
// // // setTimeout(test2, 2000);
// // // setTimeout(p1.test, 2000);


// // var person = {
// //     age: 0,
// //     grow: function () {
// //         this.age += 1;
// //         console.log(this.age);
// //     }
// // }

// // // person.grow();
// // // person.grow();
// // // person.grow();

// // setInterval(person.grow, 2000);

// // In ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope and no further.
// var self = this;

// const test3 = () => {
//     console.log(this);
//     console.log(self === this);
// }

// test3();

// // console.log("Context of the file: ", this);
// setTimeout(test3, 2000);

// var p1 = {
//     id: 1,
//     name: "Manish",
//     toJson: function () {
//         console.log(JSON.stringify(this));
//     }
// };

// var p2 = {
//     id: 2,
//     name: "Abhieet",
//     city: "Pune",
//     toJson: function () {
//         console.log(JSON.stringify(this));
//     }
// };

// p1.toJson();
// p2.toJson();

// ------------------------------
function toJson() {
    console.log(JSON.stringify(this));
}

var p1 = {
    id: 1,
    name: "Manish",
};

var p2 = {
    id: 2,
    name: "Abhieet",
    city: "Pune"
};

// Fn Borrowing
// p1.toJson = toJson.bind(p1);
// p2.toJson = toJson.bind(p2);

// p1.toJson();
// p2.toJson();

toJson.call(p1);
toJson.call(p2);

// -------------------------------------

function add(x, y) {
    return x + y;
}

add(2, 3);
add.call(undefined, 2, 3);
add.apply(undefined, [2, 3]);