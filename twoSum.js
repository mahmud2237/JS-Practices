/**
Given an array of numbers and a target sum, find two numbers in the array that add up to the target and return their indexes!

Input: arr = [2, 7, 11, 15], target = 9
Expected Output: [0, 1] (2 + 7 = 9)
*/

function twoSum(arr, target) {
    // write your code below 
    let ans = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if ((arr[i] + arr[j]) === target) {
                ans.push(i, j);
                return ans;
            }
        }

    }
    return ans;
}
console.log(twoSum([2, 7, 11, 15], 9));  // Expected Output: [0, 1]
