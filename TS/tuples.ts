var employee: [number, string] = [1, "Akarshini"];
var person: [number, string, boolean] = [1, "Akarshini", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Akarshini", true, 20, "Admin"];// initialize tuple variable

//accesing tuple
var employee: [number, string] = [1, "Akarshini"];
employee[0]; // returns 1
employee[1]; // returns "Steve"

//push elements
var employee: [number, string] = [1, "Akarshini"];
employee.push(2, "Padala"); 
console.log(employee); //Output: [1, 'Akarshini', 2, 'Padala']

//array methods
var employee: [number, string] = [1, "Akarshini"];

// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" padala"); 
console.log(employee); //Output: [1, 'Akarshini padala']
