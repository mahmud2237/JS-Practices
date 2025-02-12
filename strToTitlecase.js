/***
 * Write a function to convert a string to titlecase. 
 * Exm Input: 'I am a student'  Output: 'I Am A Student'
 * Exm Input: 'i am learning js'  Output: 'I Am Learning Js'
 */

function strToTitleCase(str){
    return str.toLowerCase().split(' ').map(function(word){
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

console.log(strToTitleCase('I am a student'));
console.log(strToTitleCase('i am learning js'));