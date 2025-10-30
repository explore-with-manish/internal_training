// // Implicitly Typed Arrays
// // var arr1 = [1, 2, 3];
// // var arr2 = ["Manish", "Pune"];
// // var arr3 = [1, "Manish", true];

// // Explicitly Typed Arrays
// var arr4: number[];
// arr4 = [1, 2, 3, 4];

// var arr5: Array<number>;
// arr5 = [1, 2, 3, 4];

// var arr6: Array<number> = [1, 2, 3, 4];

// var arr7 = new Array();
// console.log(arr7);
// console.log(arr7.length);

// var arr8 = new Array(4);
// console.log(arr8);
// console.log(arr8.length);

// var arr9 = new Array("Manish");
// console.log(arr9);
// console.log(arr9.length);

// var arr10 = Array.of(10);
// console.log(arr10);
// console.log(arr10.length);

// var arr = [1, 2, 3, 4, 5];

// var arr11 = new Array(arr);
// console.log(arr11);
// console.log(arr11.length);

// var arr12 = Array.from(arr);
// console.log(arr12);
// console.log(arr12.length);

// var arr13 = [...arr];
// console.log(arr13);
// console.log(arr13.length);

// --------------------------------------------- Array of Objects

// var employees: Array<{ id: number, name: string, city: string }>;

// employees = [
//     { id: 1, name: "Manish", city: "Pune" },
//     { id: 2, name: "John", city: "Mumbai" },
//     { id: 3, name: "Mary", city: "Pune" },
//     { id: 4, name: "Mike", city: "Mumbai" },
//     { id: 5, name: "Steve", city: "Pune" }
// ];

// employees.push({ id: 6, name: "Scott", city: "Mumbai" });

// console.log(employees);

// -------------- Type Alias

type Employee = { id: number, name: string, city: string };

var employees: Array<Employee>;

employees = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "John", city: "Mumbai" },
    { id: 3, name: "Mary", city: "Pune" },
    { id: 4, name: "Mike", city: "Mumbai" },
    { id: 5, name: "Steve", city: "Pune" }
];

employees.push({ id: 6, name: "Scott", city: "Mumbai" });

// console.log(employees);

// -------------------------------------- Array Iteration
// delete employees[2];

// console.log(employees);

// employees.forEach(function (item, index) {
//     console.log(`${index}               ${JSON.stringify(item)}`);
// });

// for (let i = 0; i < employees.length; i++) {
//     console.log(`${i}               ${JSON.stringify(employees[i])}`);
// }

// for (const item of employees) {
//     console.log(item);
// }

// for (const item of employees.entries()) {
//     console.log(`${JSON.stringify(item)}`);
// }

// for (const [index, item] of employees.entries()) {
//     console.log(`${index}               ${JSON.stringify(item)}`);
// }

// ----------------------------------------- Array Methods

var r1 = employees.find(e => e.id == 4);
console.log(r1);

var r2 = employees.findIndex(e => e.id == 4);
console.log(r2);

var names = employees.map(e => e.name.toUpperCase());
console.log(names);

var ids = employees.map(e => e.id);
console.log(ids);

var sum = ids.reduce((x, y) => x + y);
console.log(sum);