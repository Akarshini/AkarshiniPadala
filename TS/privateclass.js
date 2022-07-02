var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.salary = function (salary) {
        if (salary === void 0) { salary = 10000; }
        console.log('Hello,' + this.empName + 'Your Salary:' + salary);
    };
    return Employee;
}());
var empl = new Employee("Anil").empName; //empName is private and & acc within class Employee
