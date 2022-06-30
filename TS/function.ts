//basic function
function sum(a: number, b: number): number {
    return a + b;
}


// higher-order-function that returns a function
function add(x: number): (y: number) => number {
    // function returned as closure
    return (y: number): number => x + y;
}

//  add method
var add10 = add(10);
var add20 = add(20);
var add30 = add(30);

console.log(add10(5)); // 15
console.log(add20(5)); // 25
console.log(add30(5)); // 35

//recursion
function factorial(num: number): number {
    let result = 1;
    for (; num > 0; num--) {
        result *= num;
    }
    return result;
}

console.log(factorial(20));