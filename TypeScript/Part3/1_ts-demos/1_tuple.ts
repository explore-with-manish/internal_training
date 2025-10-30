// Typeguard Array
var dataArr1: (number | string)[];
dataArr1 = [1, "Manish"];
dataArr1 = ["Abhijeet", 1];
dataArr1 = [1, 2, 3, 4, 5];
dataArr1 = ["Manish", "Pune"];
dataArr1 = [1, "Manish", "Pune", 411021];

function insertData1(data: (number | string)[]) {
    console.log(data);
}

insertData1(dataArr1);

// Tuple - Stores a fixed collection of values of same or varied types, maintaining the sequence
let dataRow: [number, string];
dataRow = [1, "Manish"];
// dataRow = ["Abhijeet", 1];
// dataRow = [1, 2, 3, 4, 5];
// dataRow = ["Manish", "Pune"];
// dataRow = [1, "Manish", "Pune", 411021];

function insertData2(data: [number,string]) {
    console.log(data);
}

// insertData1(dataRow);

insertData2([1, "Manish"]);
// insertData2(["Manish", 1]);