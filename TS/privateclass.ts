class Employee {
    private empName:string;
    constructor(name:string) {
        this.empName =name;
    }

    salary(salary:number= 10000) {
        console.log('Hello,' + this.empName + 'Your Salary:' + salary);
    }
}

let emplye= new Employee("Anil").empName; //empName is private and & accessed within class Employee