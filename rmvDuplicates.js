/***
 * Write a function that removes duplicate elements from an array.
  * Input: [1, 2, 2, 3, 4, 4, 5]
   * Output: [1, 2, 3, 4, 5]
*/


function removeDuplicates(arr) {
    // write your code below
    let ans = [];
    for(let ar of arr){
        if(!ans.includes(ar)){
            ans.push(ar);
        }
    }
    return ans;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));