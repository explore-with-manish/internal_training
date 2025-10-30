// class Queue {
//     private _data: number[] = [];

//     push(item: number) {
//         this._data.push(item);
//     }

//     pop(): number | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// // --------------------------------------------------- Flexibility, we can use 'any' as type

// class Queue {
//     private _data: any[] = [];

//     push(item: any) {
//         this._data.push(item);
//     }

//     pop(): any | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// var ordersQ = new Queue();
// ordersQ.push("Order Id: 1");
// ordersQ.push("Order Id: 2");
// ordersQ.push("Order Id: 3");
// ordersQ.push(100);

// console.log(ordersQ.pop());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop().toUpperCase());

// --------------------------------------------------- Generic

// class Queue<T> {
//     private _data: T[] = [];

//     push(item: T) {
//         this._data.push(item);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue<number>();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// var ordersQ = new Queue<string>();
// ordersQ.push("Order Id: 1");
// ordersQ.push("Order Id: 2");
// ordersQ.push("Order Id: 3");

// console.log(ordersQ.pop());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop().toUpperCase());

// // --------------------------------------------------- Generic with Methods

// // Create a Generic Method to merge 2 objects
// function mergeObjects<T1, T2>(obj1: T1, obj2: T2) {
//     return { ...obj1, ...obj2 };
// }

// let rObj1 = mergeObjects({ id: 1, name: "Manish" }, { city: "Pune" });
// console.log(rObj1);

// let rObj2 = mergeObjects(10, true);
// console.log(rObj2);

// --------------------------------------------------- Generic Constraints

// // Create a Generic Method to merge 2 objects
// function mergeObjects<T1 extends object, T2 extends object>(obj1: T1, obj2: T2) {
//     return { ...obj1, ...obj2 };
// }

// let rObj1 = mergeObjects({ id: 1, name: "Manish" }, { city: "Pune" });
// console.log(rObj1);

// let rObj2 = mergeObjects(10, true);
// console.log(rObj2);

// -----------------------

var person = { id: 1, name: "Person 1", age: 30 };

// function getPropertyValue<T, K>(obj: T, key: K): T[K] {
//     return obj[key];                // Error: 'K' cannot be used to index type 'T'
// }

function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];   
}

console.log(getPropertyValue(person, "id"));
console.log(getPropertyValue(person, "name"));
console.log(getPropertyValue(person, "age"));