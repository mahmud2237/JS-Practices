/***
 Write a function that converts the first letter of each word in a sentence to uppercase.
    Input: "this is a title"
    Output: "This Is A Title"
 */

function titleCase(sentence) {
    // write your code below   
    return sentence.toLowerCase().split(' ').map(function(word){
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

console.log(titleCase('this is a title case solution'))
