class Employe {
    readonly empName: string;
    constructor(name: string) {
        this.empName = name;
    }

    salary(salary: number = 10000) {
        console.log('Hello, ' + this.empName + ' Your Salary -' + salary);
    }
}

let emp = new Employe('Anil');
emp.empName = 'Anil Singh';