/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    var paircount = 0;
    var currIndex = 0;
    for (number of input) {
        currIndex += 1
        for (let i = currIndex; i < input.length; i++) {
            if (number.valueOf() < input[i].valueOf()) {
                paircount += 1;
            }
        }
    }
    return paircount;
    
};
