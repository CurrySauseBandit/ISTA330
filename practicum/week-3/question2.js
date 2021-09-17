
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
     var savedSum = -1000;

     for (var currStart = 0; currStart < input.length; currStart++) {
             currSum = Math.max(input[currStart], currSum + input[currStart]);
             savedSum = Math.max(currSum, savedSum);       
        }
        //console.log(savedSum);
        
        return savedSum;        
 };

 //let test4 = largestSubarray([-12,3,-1,5,-2,1,-7]);
 //console.log(test4);
