/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {

    var currNum = -1;
    var currCount = 0;
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j < input.length; j++) {
            console.log(input[i] + " " + input[j]);
            if (input[i] == input[j]) {
                currCount += 1;
            }
            
            
        }
        if (currCount == input[i]) {
            if (currNum < input[i]) {
                currNum = input[i];
            } 
        }
        currCount = 0;
    }
    return currNum;
};

//let test8 = d_integer([3,5,3,4,4,3,5,1,4,4]);
//console.log(test8);