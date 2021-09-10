/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var number = 0;
    if (input.length % 2 == 0) {
        number.valueOf = Math.floor((input.length.valueOf() + 1)/2-1)
        console.log(number.valueOf())
        return input[number.valueOf()];
    }
    else {
        return input[input.length/2] + input[input.length/2 - 1];
    }

};

let testsix = median([1, 2, 2, 3, 4, 7, 9]);
console.log(testsix);