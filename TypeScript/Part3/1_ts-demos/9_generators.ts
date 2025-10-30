// // Eager Executed
// function idNormal() {
//     console.log("Id is created via normal function");
// }

// // Lazy Executed
// function* idGenerator() {
//     console.log("Id is created via generator function");
// }

// // idNormal();
// // idGenerator();

// var genObj = idGenerator();
// // console.log(genObj);
// console.log(genObj.next());
// console.log(genObj.next());

// --------------------------------------------------

// function* idGenerator() {
//     console.log("Generator Function Execution Started...");
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     console.log("Generator Function Execution Completed...");
// }

// var genObj = idGenerator();
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());

// ----------------------------------------------------

// class GQueue<T> {
//     private _data: T[] = [];

//     push(item: T) {
//         this._data.push(item);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }

//     *[Symbol.iterator]() {
//         for (const item of this._data) {
//             yield item;
//         }
//     }
// }

class GQueue<T> {
    private _data: T[] = [];

    push(item: T) {
        this._data.push(item);
    }

    pop(): T | undefined {
        return this._data.shift();
    }

    *[Symbol.iterator]() {
        yield* this._data;
    }
}

type GOrder = {
    id: number,
    description: string
}

var gordersQ = new GQueue<Order>();
gordersQ.push({ id: 1, description: "Order One" });
gordersQ.push({ id: 2, description: "Order Two" });
gordersQ.push({ id: 3, description: "Order Three" });

for (const item of gordersQ) {
    console.log(JSON.stringify(item));
}