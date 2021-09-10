/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var number = 0;
    input.sort();
    if (input.length % 2 == 1) {
        position = (input.length + 1) / 2 - 1
        return input[position];
    }
    else {
        position = input[input.length/2 - 1] + input[((input.length/2) + 1) - 1] / 2
        return position
    }

};

