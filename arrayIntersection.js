/**
Write a function to find the intersection of two arrays.
    Input: [1, 2, 3, 4, 5], [3, 4, 5, 6]
    Output: [3, 4, 5]
 */

function arrayIntersection(arr1, arr2) {
    // write your code below
    let ans = [];
    for(let ar of arr1){
        if(arr2.includes(ar)){
            ans.push(ar);
        }
    }
    return ans;
}
console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6]));
