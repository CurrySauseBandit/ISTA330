/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        var largestnumber = Math.max.apply(Math, input);
        console.log(largestnumber);
        for (number of input) {
                if (Math.floor(largestnumber / 2) < Math.floor(number)) {
                        return false;
                }
        
        }
        return true;
};


