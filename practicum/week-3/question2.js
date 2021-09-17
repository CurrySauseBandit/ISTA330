
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
     var currSum = 0;
     var savedSum = 0;
     var firstsum = true;

     for (var i = 0; i < input.length(); i++) {
        for (var j = i + 1; j < input.length(); j++) {
                currSum += input[j];
        }
        currSum += input[i];
        if (firstsum == true) {
                savedSum = currSum;
                firstsum = false;
        }
        if (currSum > savedSum) {
                savedSum = currSum;
        }
        currSum = 0;
        console.log(savedSum);
     }
     return savedSum;
 };


