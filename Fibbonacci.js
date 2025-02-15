/***
 *  Write a function to generate the nth Fibonacci number.
 * * 0,1,1,2,3,5,8,13,21,,,,,,,
 * Input: 6
 * Output: 8
*/
function fibbonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;

    let prev = 0;  // Fibbonacci(0)
    let curr = 1;  // Fibbonacci(1)

    for(let i = 2; i <= n; i++){
        const next = prev + curr;   // calculate the next fibonacci number
        prev = curr;  // Update previous
        curr = next;  // Update curr
    }
    return curr;
}

console.log(fibbonacci(6));
console.log(fibbonacci(10));