/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var numbsasString = n.toString().split("");
    var intArray = numbsasString;
    for (let i = 0; i < intArray.length; i++) {
        intArray[i] = parseInt(intArray[i])
    }
    var minValue = intArray[0];
    var maxValue = intArray[0];

    for (let i = 0; i < intArray.length; i++) {
        if (intArray[i] < minValue) {
            minValue = intArray[i];
        }
    }
    for (number of intArray) {
        if (number > maxValue) {
            maxValue = number;
        }
    }

    return maxValue - minValue;
};
