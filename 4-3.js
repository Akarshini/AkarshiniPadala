// program to check if the string is palindrome or not

function checkPalindrome(string) {
const arrayValues = string.split('');
const reverseArrayValues = arrayValues.reverse();
const reverseString = reverseArrayValues.join('');

if(string == reverseString) {
        console.log('It is a palindrome');
    }
else {
        console.log('It is not a palindrome');
    }
}

//take input
const string = prompt('Enter a string: ');
checkPalindrome(string);