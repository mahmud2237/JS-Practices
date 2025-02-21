/*
Write a function that reverses the order of words in a sentence.

Input: "Hello World"
Output: "World Hello"
*/

function reverseWords(sentence) {
    // write your code below
    return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords("Hello World"));
