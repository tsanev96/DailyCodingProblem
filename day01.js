/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

let numbers = [10, 15, 3, 7];
let k = 17;

const map = new Map();
// value will be the number we are looking in the hash

for (let i = 0; i < numbers.length; i++) {
  map.set(numbers[i], k - numbers[i]);

  if (map.get(k - numbers[i])) {
    console.log(k - numbers[i], numbers[i]);
  }
}
