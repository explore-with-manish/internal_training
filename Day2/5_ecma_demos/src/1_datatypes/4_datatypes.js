'use strict'

let language;
console.log("language is:", language);
console.log("Type of language is:", typeof language);

language = null;
console.log("language is:", language);
console.log("Type of language is:", typeof language);

// language = 10;
// language = 10.5;
// language = Number.MAX_SAFE_INTEGER;
// language = 0b1001;
// language = 0o1001;
language = 0x1001;
console.log("language is:", language);
console.log("Type of language is:", typeof language);

// language = "JavaScript";
// language = 'JavaScript';

// ECMAScript 2015 - Template / String Literals - Multi-line Strings
// language = `Java

//         Script`;
// console.log("language is:", language);
// console.log("Type of language is:", typeof language);

let fname = "Manish";
let lname = "Sharma";

// language = "Hello, " + fname + " " + lname + "!";
language = `Hello, ${fname} ${lname}!`;
console.log("language is:", language);
console.log("Type of language is:", typeof language);

language = true;
console.log("language is:", language);
console.log("Type of language is:", typeof language);

language = Symbol("JavaScript");
console.log("language is:", language);
console.log("Type of language is:", typeof language);

// language = new Object();
language = {};
// language = null;
console.log("language is:", language);
console.log("Type of language is:", typeof language);


// number       Number
// object       Object
// string       String

language = Symbol(10);
console.log("language is:", language);
console.log("Type of language is:", typeof language);
