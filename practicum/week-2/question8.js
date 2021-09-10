/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    var greaterthanList = [];
    currCount = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            console.log(input[i] + " " +input[j]);
            if (i != j) {
                if (input[i] <= input[j]) {
                    currCount += 1;
                }
            }
        }
        greaterthanList.push(currCount);
        currCount = 0;
    }
    return greaterthanList;
};

