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
    let str1 = A.toString();
    let str2 = B.toString();
    var letterCount = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1.charAt(i))) {
            letterCount += 1;
        }

    }
    return letterCount;
};
    
