class Human {
    name: string;
}

interface IEmployee extends Human{ 
    empCode: number;
}

let emp: IEmployee = { empCode  : 1, name:"James Bond" }