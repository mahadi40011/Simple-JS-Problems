// Problem 1: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Problem-1: ", reverseString("hello"));

// Problem 2: Count Vowels in a String
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("Problem-2: ", countVowels("programming"));

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("Problem-3: ", isPalindrome("madam"));

// Problem 4: Find the Maximum Number
function findMax(arr) {
  return Math.max(...arr);
}
console.log("Problem-4: ", findMax([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4]
// Output: 10

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
// Example:
// Input: "hello world"
// Output: "Hello World"

// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.
// Example:
// Input: 5
// Output: 120

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.
// Example:
// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:
// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..
