/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var letterCount = 0;
    for (letter of A) {
        for (letters of B) {
            if (letter.charCodeAt() == letters.charCodeAt()) {
                letterCount += 1; 
            }
            
        }

    }
    return letterCount;
};
    

    let testfour = howManyCommon('asDf', 'dsssaaFa');
    console.log(testfour);