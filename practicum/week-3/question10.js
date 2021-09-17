/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {

    var stored_pairs = [];
    diff = Number.MAX_VALUE;

    for (var i = 0; i < input.length; i++) {
      for (var j = i + 1; j < input.length; j++) {
          if (diff > input[j] - input[i]) {
              stored_pairs = [];
              stored_pairs.push([input[j], input[i]]);
          }
          if (diff == input[j] - input[i]) {
              stored_pairs.push(input[j], input[i]);
          }
      }
    }
    return stored_pairs;
};

let test10 = minPairs([1,-5,-10,24,19,-4,-14,23]);
console.log(test10);