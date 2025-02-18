/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {

    var currNum = 0;
    var currCount = 0;
    for (var i = 0; i < input.length; i++) {
        for (var j = i + 1; j < input.length; j++) {
            console.log(input[i] + " " + input[j]);
            if (input[i] == input[j]) {
                currCount += 1;
            }
            if (currCount >= 3) {
                return input[i];
            }
            
        }
        currCount = 0;
    }
    return -1;
};

