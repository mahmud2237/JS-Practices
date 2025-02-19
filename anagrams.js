/*
Write a function to check if two strings are anagrams of each other.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase

Input: "listen", "silent"
Output: true
*/

function areAnagrams(str1, str2){
    // Convert both str to lower case and remove any spaces
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check if the sorted characters of both strings are equal
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Examples
const Input1 = "listen";
const Input2 = "silent";
console.log(areAnagrams(Input1, Input2));
