/**
Write a function to find the maximum element in an array.
    Input: [3, 1, 4, 1, 5, 9, 2, 6]
    Output: 9
 */

function findMax(arr) {
    // write your code below 
    return Math.max(...arr);
}
console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6]))