// interface IPerson {
//     name: string;
//     age: number;
//     greet(msg: string): string;
// }

// class Person implements IPerson {
//     constructor(public name: string, public age: number) { }

//     greet(msg: string) {
//         return `Hello`;
//     }
// }

// let p1: IPerson = new Person("Manish", 1);
// console.log(p1.greet("Hi"));

// let p2: Person = new Person("Abhijeet", 2);
// console.log(p2.greet("Hi"));

// // --------------------------------------------------- Multiple Interface Implementation

// interface IPerson {
//     name: string;
//     age: number;
//     greet(msg: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// class Person implements IPerson, IEmployee {
//     constructor(public name: string, public age: number) { }

//     greet(msg: string) {
//         return `Hello`;
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }
// }

// let p1: Person = new Person("Manish", 1);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());

// // --------------------------------------------------- Interface Extraction

// interface IPerson {
//     name: string;
//     age: number;
//     greet(msg: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// interface ICustomer {
//     doShopping(): string;
// }

// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }

//     greet(msg: string) {
//         return `Hello`;
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }

//     doShopping(): string {
//         return "I am shopping online";
//     }
// }

// let p1: Person = new Person("Manish", 1);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());
// console.log(p1.doShopping());

// // Interface Extraction
// let p2: IPerson = new Person("Abhijeet", 2);
// console.log(p2.greet("Hi"));

// let e1: IEmployee = new Person("Ramakant", 3);
// console.log(e1.doWork());

// let c1: ICustomer = new Person("Ramesh", 4);
// console.log(c1.doShopping());

// --------------------------------------------------- Interface Extension - Interface can extend other Interface(s)

// interface IPerson {
//     name: string;
//     age: number;
//     greet(msg: string): string;
// }

// interface IEmployee extends IPerson {
//     doWork(): string;
// }

// interface ICustomer extends IPerson {
//     doShopping(): string;
// }

// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }

//     greet(msg: string) {
//         return `Hello`;
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }

//     doShopping(): string {
//         return "I am shopping online";
//     }
// }

// let e1: IEmployee = new Person("Ramakant", 3);
// console.log(e1.doWork());
// console.log(e1.greet("Hi"));

// let c1: ICustomer = new Person("Ramesh", 4);
// console.log(c1.doShopping());
// console.log(c1.greet("Hi"));

// --------------------------------------------------- Interface can extend from class(es) - For Creating Mixins

// class Control {
//     focus(): string {
//         return "Control focused";
//     }
// }

// class SelectableControl {
//     select(): string {
//         return "Control selected";
//     }
// }

// class Button { }
// interface Button extends Control, SelectableControl { }

// applyMixins(Button, [Control, SelectableControl]);

// const button = new Button();
// console.log(button.focus());
// console.log(button.select());

// function applyMixins(deriveredCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             Object.defineProperty(
//                 deriveredCtor.prototype,
//                 name,
//                 Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
//             );
//         });
//     });
// }

// class Employee {
//     doWork(): string {
//         return "I am learning TypeScript";
//     }
// }

// class Developer extends Employee {
//     doWork(): string {
//         return "I am developing TypeScript Application";
//     }
// }

// class Manager extends Employee {
//     doWork(): string {
//         return "I am managing TypeScript Application";
//     }
// }

// class Tester extends Employee {
//     doWork(): string {
//         return "I am testing TypeScript Application";
//     }
// }

// // Is Developer extension of Employee?
// // Is Developer specialized Employee?