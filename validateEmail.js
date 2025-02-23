/**
Write a function to validate whether a given string is a valid email address.

Valid email is a string in the format: {prefix}@{domain}.{domain suffix}

    Input: "user@example.com"
    Expected Output: true
*/

function isValidEmail(email) {
    // write your code below 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Now check if the email pattern matches the pattern
    return (emailPattern.test(email));
}
console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("john.doe@company-name.co.uk")); // true
console.log(isValidEmail("invalid-email")); // false
console.log(isValidEmail("missing@domain")); // false
console.log(isValidEmail("@example.com")); // false
console.log(isValidEmail("user@.com")); // false
console.log(isValidEmail("user@example.")); // false