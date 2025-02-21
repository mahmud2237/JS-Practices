/**
Write a function to rotate elements in an array to the right by a given number of steps.
    Input: [1, 2, 3, 4, 5], 2
    Output: [4, 5, 1, 2, 3]
 */

function rotateArray(steps, arr) {
    // write your code below
    if(!arr.length) return arr;

    // Normalize steps to handle cases where steps > array length
    steps = steps % arr.length;

    // For right rotation, take the last 'steps' elements
    const rotationIndex = arr.length - steps;

    // Split array into two parts
    const firstPart = arr.slice(rotationIndex);
    const secondPart = arr.slice(0, rotationIndex);

    // Now combine the part in the currect order
    return [...firstPart, ...secondPart];
}


console.log(rotateArray(2, [1, 2, 3, 4, 5]));
console.log(rotateArray(3, [7, 8, 9, 10, 11, 12]));
