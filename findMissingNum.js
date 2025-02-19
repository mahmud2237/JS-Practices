/**
 * Write a function to find the missing number in an array of integers from 1 to n.
 * Input: [1, 2, 3, 5]
 * Output: 4
 */

function findMissingNumber(arr) {
    // write your code below
    let max = Math.max(...arr);
    for(i=1; i < max; i++){
        if(!arr.includes(i)){
            return i;
        }
    }
    return max + 1;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));
console.log(findMissingNumber([1, 2, 3, 4]));
