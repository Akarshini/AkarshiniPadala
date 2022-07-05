class Human {
    name: string;
}

interface IEmployee extends Human{ 
    empCode: number;
}

let empl: IEmployee = { empCode  : 1, name:"James Bond" }