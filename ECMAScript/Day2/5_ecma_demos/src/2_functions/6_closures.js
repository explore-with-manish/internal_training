'use strict'

// let count = 0;

// function next() {
//     return count += 1;
// }

// setInterval(()=>{
//     console.log(next());
// }, 2000);

// setTimeout(()=>{
//     count = "abc";
// }, 5000);

// ------------------------------------------


// function next() {
//     let count = 0;
//     return count += 1;
// }

// setInterval(()=>{
//     console.log(next());
// }, 2000);

// ------------------------------------------

// function getNext() {
//     let count = 0;
    
//     return function() {
//         return count += 1;
//     }
// }

// let next = getNext();

let next = (function () {
    let count = 0;
    
    return function() {
        return count += 1;
    }
})();

setInterval(()=>{
    console.log(next());
}, 2000);