class Employee {
    private empName:string;
    constructor(name:string) {
        this.empName =name;
    }

    salary(salary:number= 10000) {
        console.log('Hello,' + this.empName + 'Your Salary:' + salary);
    }
}

let empl= new Employee("Anil").empName; //empName is private and & acc within class Employee