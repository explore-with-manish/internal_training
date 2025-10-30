// In TS, error = Duplicate function implementation.

// function hello() {
//     console.log("Hello World");
// }

// function hello(name) {
//     console.log("Hello " + name);
// }

// hello();
// hello("John");

// ---------------------------------------------------
function hello(): void;
function hello(name: string): void;

function hello(...args: string[]): void {
    if (args.length === 0)
        console.log("Hello World");
    else
        console.log("Hello " + args.join(", "));
}

hello();
hello("John");
// hello("Manish", "Sharma");          // Expected 0-1 arguments, but got 2.