//typeconversion From_ to string
console.log(String(42)); //"42"
console.log(typeof String(42)); // "string"
console.log(String(true)); //"true"
console.log(String(undefined)); //"undefined"
//from_to number
Number("0"); // 0
Number("abc"); //NaN
Number(true); // 1
//from_to boolean
Boolean("a"); // true
Boolean(null); // false
//from object to array
var planets = {
    mercury: { name: "Mercury", position: 1 },
    venus: { name: "Venus", position: 2 },
    earth: { name: "Earth", position: 3 }
};
var planetsArr = Object.keys(planets).map(function (key) { return planets[key]; });
console.log("planetsArr", planetsArr);
