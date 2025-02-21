/*
Write a function to merge two sorted arrays into a single sorted array.

Input: [1, 3, 5], [2, 4, 6]
Output: [1, 2, 3, 4, 5, 6]
*/
function mergeSortedArrays(arr1, arr2) {
    // write your code below
    let arr3 = [...arr1, ...arr2].sort();
    return arr3;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
