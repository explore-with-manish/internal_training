console.log("Demo 2");

const Employee = (function () {
    function Employee(name) {
        this._name = name;
    }

    Employee.prototype.getName = function () {
        return this._name;
    }

    Employee.prototype.setName = function (value) {
        this._name = value;
    }

    return Employee;
})();

let e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());

let e2 = new Employee("Sumit");
console.log(e2.getName());
e2.setName("Ramakant");
console.log(e2.getName());
