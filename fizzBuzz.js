/**
Challenge: Write a function that returns a string, such as, For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

Input: 15
Expected Output: "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"
Note - 

1. you need to return all as string

2. don't forgot spaces
*/

function fizzBuzz(n) {
    // write your code below
    let ans = [];
    for(let i = 1; i <= n; i++){
        if(i%3===0 && i%5===0){
            ans.push('FizzBuzz');
        }else if(i%3===0){
            ans.push('Fizz');
        }else if(i%5===0){
            ans.push('Buzz');
        }else{
            ans.push(i);
        }
    }
    return ans.join(' ');
}
console.log(fizzBuzz(15));