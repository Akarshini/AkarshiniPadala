

//for loop
for (let i = 0; i < 3; i++) {
    console.log ("Block statement execution no." + i);
  }
//for..of loop
let str = "Hello World";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}
//for..in loop
let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}
