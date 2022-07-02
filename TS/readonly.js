var Employe = /** @class */ (function () {
    function Employe(name) {
        this.empName = name;
    }
    Employe.prototype.salary = function (salary) {
        if (salary === void 0) { salary = 10000; }
        console.log('Hello, ' + this.empName + ' Your Salary -' + salary);
    };
    return Employe;
}());
var emp = new Employe('Anil');
emp.empName = 'Anil Singh';
