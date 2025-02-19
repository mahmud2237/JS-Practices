/***
 * Write a function to count the number of vowels in a given string.
 * Input: "Hello"
 * Output: 2
 */

function countVowels(str) {
    // write your code below
    const s = [...str];
    let sum = 0;
    for(let i of s){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u' || i=='A' || i=='E' || i=='I' || i=='O' || i=='U'){
            sum += 1;
        }
    }
    return sum;
}

console.log(countVowels('Hello'));
console.log(countVowels('Vowel'));

