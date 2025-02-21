/**
Write a function to check if a given number is prime.
    Input: 7
    Output: true
 */
function isPrime(num) {
    // write your code below
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(6)); 
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));
