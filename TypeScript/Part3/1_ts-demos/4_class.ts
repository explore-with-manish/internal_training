// class Employee {
//     // Data Properties
//     private _name: string;

//     // Multiple constructor implementations are not allowed.
//     // constructor() {
//     //     this._name = "na";
//     // }

//     // constructor(name: string) {
//     //     this._name = "na";
//     // }

//     constructor(name = "na") {
//         this._name = name;
//     }

//     getName(): string {
//         return this._name;
//     }

//     setName(name: string): void {
//         this._name = name;
//     }

//     // // Function Expression
//     // // Never use function expressions to create member functions, it will increase the memory usage
//     // getName = function (): string {
//     //     return this._name;
//     // }

//     // setName = function (name: string): void {
//     //     this._name = name;
//     // }

//     // // Lamda
//     // // Never use Lambda to create member functions, it will increase the memory usage
//     // getName = (): string => {
//     //     return this._name;
//     // }

//     // setName = (name: string): void => {
//     //     this._name = name;
//     // }
// }

// let e1 = new Employee();
// // let e1 = new Employee("Subodh");
// console.log(e1.getName());
// e1.setName("Manish");
// console.log(e1.getName());

// // ------------------------------------------------ Strict Mode

// class Employee {
//     // private _name: string;

//     // constructor(name = "") {
//     //     this._name = name;
//     // }

//     private _name: string = "";         // Required Property with default value
//     private _age?: number;              // Optional Property
//     private _city!: string;             // Switch off all checks for this property

//     getName(): string {
//         return this._name.toUpperCase();
//     }

//     setName(name: string): void {
//         this._name = name;
//     }

//     // getAge() {
//     //     if (this._age)
//     //         return this._age.toFixed();
//     //     else
//     //         return this._age;
//     // }

//     getAge() {
//         return this._age?.toFixed();
//     }

//     getCity() {
//         return this._city.toUpperCase();
//     }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// e1.setName("Manish");
// console.log(e1.getName());

// // ------------------------------------------------ Using Accessor and Mutator Methods
// class Employee {
//     // Data Properties
//     private _name: string = "na";
//     private _age: number = 0;

//     getName(): string {
//         return this._name;
//     }

//     setName(name: string): void {
//         this._name = name;
//     }

//     getAge() {
//         return this._age;
//     }

//     setAge(age: number): void {
//         this._age = age;
//     }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// console.log(e1.getAge());
// e1.setName("Manish");
// e1.setAge(20);
// console.log(e1.getName());
// console.log(e1.getAge());

// ------------------------------------------------ Using Accessor Properties
// class Employee {
//     // Data Properties
//     private _name: string = "na";
//     private _age: number = 0;

//     // Accessor Properties
//     get Name(): string {
//         return this._name;
//     }

//     set Name(name: string) {
//         this._name = name;
//     }

//     get Age() {
//         return this._age;
//     }

//     set Age(age: number) {
//         this._age = age;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);           // getter
// console.log(e1.Age);            // getter
// e1.Name = "Manish";             // setter
// e1.Age = 20;                    // setter
// console.log(e1.Name);
// console.log(e1.Age);

// ---------------------------------------------------------------------- Parameter Property / Parameter Members
// Parameter Property / Parameter Member let us create and initialize member variables in one place. 
// It is a shorthand for creating member variables.

// class Employee {
//     // Data Properties
//     // private _name: string;
//     // private _age: number;

//     // constructor(name = "na", age = 0) {
//     //     this._name = name;
//     //     this._age = age;
//     // }

//     constructor(private _name = "na", private _age = 0) { }

//     // Accessor Properties
//     get Name(): string {
//         return this._name;
//     }

//     set Name(name: string) {
//         this._name = name;
//     }

//     get Age() {
//         return this._age;
//     }

//     set Age(age: number) {
//         this._age = age;
//     }
// }

// let e1 = new Employee("Subodh", 10);
// console.log(e1.Name);           // getter
// console.log(e1.Age);            // getter
// e1.Name = "Manish";             // setter
// e1.Age = 20;                    // setter
// console.log(e1.Name);
// console.log(e1.Age);

// -------------------------------------------------------------------------

// Create a BankAccount Class with bankName and accName as data members and create Properties to access
// the data outside using instance.

// class BankAccount {
//     constructor(private _bankName: string, private _accName: string) { }

//     get BankName(): string {
//         return this._bankName;
//     }

//     set BankName(bankName: string) {
//         this._bankName = bankName;
//     }

//     get AccountHolderName(): string {
//         return this._accName;
//     }
// }

// let a1 = new BankAccount("HDFC", "Manish");
// console.log(`Bank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// let a2 = new BankAccount("HDFC", "Subodh");
// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// a1.BankName = "SBI";

// console.log("\nAfter Updating the BankName");
// console.log(`\nBank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// ------------------------------------------------------------------ Static (Class) Members

// class BankAccount {
//     // private static _bankName: string;
//     private static _bankName: string = "HDFC"; 

//     constructor(private _accName: string) { }

//     get BankName(): string {
//         return BankAccount._bankName;
//     }

//     static set BankName(bankName: string) {
//         BankAccount._bankName = bankName;
//     }

//     get AccountHolderName(): string {
//         return this._accName;
//     }
// }

// let a1 = new BankAccount("Manish");
// console.log(`Bank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// let a2 = new BankAccount("Subodh");
// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// BankAccount.BankName = "SBI";

// console.log("\nAfter Updating the BankName");
// console.log(`\nBank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// ------------------------------------------------------------------ Readonly Members

class BankAccount {
    // private static _bankName: string;
    private static _bankName: string = "HDFC";

    constructor(private readonly _accNumber: number, private _accName: string) { }

    get BankName(): string {
        return BankAccount._bankName;
    }

    static set BankName(bankName: string) {
        BankAccount._bankName = bankName;
    }

    get AccountNumber(): number {
        // this._accNumber = 10;                   // Error - Cannot assign to '_accNumber' because it is a read-only property.
        return this._accNumber;
    }

    get AccountHolderName(): string {
        return this._accName;
    }
}

let a1 = new BankAccount(1, "Manish");
console.log(`Bank Name: ${a1.BankName}`);
console.log(`Account Number: ${a1.AccountNumber}`);
console.log(`Account Holder Name: ${a1.AccountHolderName}`);

let a2 = new BankAccount(2, "Subodh");
console.log(`\nBank Name: ${a2.BankName}`);
console.log(`Account Number: ${a2.AccountNumber}`);
console.log(`Account Holder Name: ${a2.AccountHolderName}`);