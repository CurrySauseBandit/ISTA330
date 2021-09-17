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

    input.sort((a,b) => a - b);
    var stored_pairs = [];
    var diff = 10000;

    for (var i = 0; i < input.length; i++) {
        var curr_num = input[i] - input[i - 1];
        //console.log("diff 1 : " + diff);
        if (diff > curr_num) {
            diff = curr_num;
            
        }
        //diff = Math.min(diff, curr_num);
      }
      for (var i = 1; i < input.length; i++) {
          diff = Math.min(diff, input[i] - input[i - 1]);
          //console.log(input[i - 1] + " " + input[i]);
          //console.log(input[i] - input[i - 1]);
         //console.log("diff 2 : " + diff);
          if (input[i] - input[i - 1] == diff) {
              stored_pairs.push([input[i-1], input[i]]);
          }
        }
    return stored_pairs;
};

let test10 = minPairs([1,-5,-10,24,19,-4,-14,23]);
console.log(test10);