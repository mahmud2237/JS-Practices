/**
Write a function to calculate the power of a number.
    Input: 2, 3
    Output: 8
 */

function calculatePower(base, exponent){
    let ans = 1;
    for(let i = 1; i <= exponent; i++){
        ans *= base;
    }
    return ans;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(3, 2));