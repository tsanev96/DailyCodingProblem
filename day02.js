/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Airbnb.

Given a linked list and a positive integer k, rotate the list to the right by k places.

For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.

Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.

*/

const numbers = [7, 7, 3, 5];
const k = 4;

const cycles = k % numbers.length; // removing repetion

for (let j = 0; j < cycles; j++) {
    let lastElement = numbers[numbers.length - 1];
    for (let i = numbers.length - 1; i > 0; i--) {
        numbers[i] = numbers[i - 1];
    }
    numbers[0] = lastElement
}

console.log(numbers)