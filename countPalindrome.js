/**
Write a function to count the number of palindromic substrings in a string.
    Input: "abba"
    Output: 6 (a, b, b, a, bb, abba)
   ---------> 
    Input: "level" 
    Output: 7 (l, e, v, e, l, eve, level)
 */
function countPalindromes(str) {
    // write your code below
    let count = 0;
    const strLength = str.length;

    const isPalindrome = (sub) =>{
        return sub === sub.split('').reverse().join('');
    };

    for(let i = 0; i < strLength; i++){
        for(let j = i; j < strLength; j++){
            if(isPalindrome(str.substring(i, j+1))){
                count++;
            }
        }
    }
    return count;
}

console.log(countPalindromes('abba'));
console.log(countPalindromes('level'));


