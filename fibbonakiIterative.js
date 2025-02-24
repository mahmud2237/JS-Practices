/**
Write a function to generate the nth Fibonacci number iteratively.
    Input: 6
    Output: 8
[Note - Series starting with 1 not 0!]
 */
function fibonacciIterative(n) {
    // write your code below
    if(n<=0) return 'Input must be a positive';
    if(n===1) return 1;
    if(n===2) return 1;

    let prev = 1;
    let curr = 1;

    for(let i = 3; i<=n; i++){
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

console.log(fibonacciIterative(2));
console.log(fibonacciIterative(6));
console.log(fibonacciIterative(8));
