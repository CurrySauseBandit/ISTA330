/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var newString = "";
    var currIndex = 0;
    while (currIndex < shuffleIndices.length) {
        for (let i = 0; i< shuffleIndices.length; i++) {
            if (currIndex == shuffleIndices[i]) {
                newString += input.charAt(i);
        }
        }
        currIndex += 1;
    }
    return newString;
};

