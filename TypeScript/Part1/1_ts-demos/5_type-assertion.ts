// Type assertion is a mechanism which tells the compiler about the type of a variable. 
// Type assertion is explicitly telling the compiler that we want to treat the entity as a different type.

var data1: any = "Hello, I am a string";
// console.log(data1.toUpperCase());

// console.log((<string>data1).toUpperCase());
// console.log((data1 as string).toUpperCase());

let a1 = data1.length;
console.log(a1);

let a2 = (<string>data1).length;
console.log(a2);

let a3 = (data1 as string).length;
console.log(a3);

// Type assertion is a compile time concept. It does not have any impact on the generated code.

// Wrong usage of type assertion
// Wrong Assertion will cost you runtime error
// console.log((data1 as number).toFixed(2));