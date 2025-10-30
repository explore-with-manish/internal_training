// const area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1 = { h: 10, w: 20 };
// console.log(area(s1));

// let s2 = { h: 10, w: 20, d: 30 };
// console.log(area(s2));

// let s3 = { h: 10, d: 30 };
// console.log(area(s3));

// // -------------------------------------------------- Type Alias
// type Shape = { h: number, w?: number };

// const area = function (rect: Shape) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1: Shape = { h: 10, w: 20 };
// console.log(area(s1));

// let s2: Shape = { h: 10, w: 20, d: 30 };
// console.log(area(s2));

// let s3: Shape = { h: 10, d: 30 };
// console.log(area(s3));

// // -------------------------------------------------- Interface
// interface IShape {
//     h: number;
//     w?: number;
// }

// const area = function (rect: IShape) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1: IShape = { h: 10, w: 20 };
// console.log(area(s1));

// // let s2: IShape = { h: 10, w: 20, d: 30 };
// // console.log(area(s2));

// // let s3: IShape = { h: 10, d: 30 };
// // console.log(area(s3));

// let s4: IShape = { h: 10 };
// console.log(area(s4));

// ------------------------------------------------------- With Methods
// interface IPerson {
//     name: string;
//     age: number;
//     greet: (msg: string) => string;
// }

// let p1: IPerson = {
//     name: "Manish",
//     age: 1,
//     greet: function (msg: string) {
//         return `Hola`;
//     }
// };

// let p2: IPerson = {
//     name: "Abhijeet",
//     age: 2,
//     greet: function (msg: string) {
//         return `Hello`;
//     }
// };

// console.log(p1.greet("Hi"));
// console.log(p2.greet("Hi"));

// type TPerson = {
//     name: string,
//     age: number,
//     greet: (msg: string) => string
// }

// let p3: TPerson = {
//     name: "Ramakant",
//     age: 3,
//     greet: function (msg: string) {
//         return `Hey`;
//     }
// };

// console.log(p3.greet("Hi"));

// // --------------------------------------------------------

// // Error - Duplicate identifier 'TShape'.
// // type TShape = {
// //     height: number
// // };

// // type TShape = {
// //     width: number
// // };

// // Interface Merging
// interface IShape { 
//     height: number;
// }

// interface IShape {
//     width: number;
// }

// let s1: IShape = {
//     height: 10,
//     width: 20
// };

// ----------------------------------------------------- Type Alias and Interface Used Together

// interface ICustomer {
//     doShopping(): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// // Typeguard (Type Alias)
// type ICustomerOrEmployee = ICustomer | IEmployee;

// var person1: ICustomerOrEmployee = {
//     doShopping: function () {
//         return "Shopping Online";
//     }
// };

// // Intersection (Type Alias)
// type ICustomerAndEmployee = ICustomer & IEmployee;

// var person2: ICustomerAndEmployee = {
//     doShopping: function () {
//         return "Shopping Online";
//     },
//     doWork: function () {
//         return "Learning TypeScript";
//     }
// };