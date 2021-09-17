/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {

    var increase = false;
    var decrease = false;
    if (input.length == 1 || input.length == 0) {
        return true;
    }
    else {
        if (input[0] >= input[1]) {
            decrease = true;
        }
        else {
            increase = true;
        }
        for (var i = 0; i < input.length - 1; i++) {
            //console.log(input[i] + " " + input[i + 1])
            if (increase == true) {
                if (input[i] > input[i + 1]) {
                    console.log("hit 1st")
                    return false;
                    
                }
            }
            if (decrease == true) {
                if (input[i] < input[i + 1]) {
                    console.log("hit 2nd")
                    return false;
                }
            }

    }
}
return true;
};

//let test5 = isMonotonic([12,6,2,2,2,3]);
//console.log(test5);