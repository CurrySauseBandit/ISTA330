/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    fsum = 0;
    if(n == 0) {
        return fsum;
    }
    for (var i = 0; i < n; i++) {
        fsum += n - i;
    }
    return fsum;
};

//let test12 = F(30);
//console.log(test12);