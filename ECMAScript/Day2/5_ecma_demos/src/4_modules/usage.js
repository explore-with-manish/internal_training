// Case 1 - Default Import
// import square from "./lib";
// console.log("Square:", square(20));

// import sqr from "./lib";
// console.log("Square:", sqr(20));

// import * as lib from './lib';
// console.log("Square:", lib.default(20));

// Case 2 - Named Import
// import { square } from "./lib";
// console.log("Square:", square(20));

// import { square as sqr } from "./lib";
// console.log("Square:", sqr(20));

// import * as lib from './lib';
// console.log("Square:", lib.square(20));

// Case 3 - Multiple Import
// import square, { check } from "./lib";
// console.log("Square:", square(20));
// console.log("Check: ", check(20));

// import sqr, { check as chk } from "./lib";
// console.log("Square:", sqr(20));
// console.log("Check: ", chk(20));

import * as lib from './lib';
console.log("Square:", lib.default(20));
console.log("Check: ", lib.check(20));