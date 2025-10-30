function hello(name) {
    return "Hello " + name;
}

// console.log(hello("Manish"));

function HOF(fn) {
    return function (...args) {
        console.log("HOF Called...", args);
        // Logic to verify the args
        return fn(args[0]);
    }
}

var helloHOF = HOF(hello);
console.log(helloHOF("Manish", "Pune"));