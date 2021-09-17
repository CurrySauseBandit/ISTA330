
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

     for (var i = 0; i < input.length - 1; i++) {
             currSum += input[i];
                        console.log(currSum);
                }
        
     console.log(savedSum);
     return savedSum;
 };

 let test4 = largestSubarray([-12,3,-1,5,-2,1,-7]);
 //console.log(test4);
