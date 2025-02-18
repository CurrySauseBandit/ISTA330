/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
    opCount = 0;

    while (n != 0) {
        if (n == 1) {
            n = n - 1;
            opCount += 1;
        }
        else if (isPrime(n) == true) {
            n = n - 1;
            opCount += 1;
        }
        else if (n % 2 == 0) {
            n = Math.round(n / 4);
            opCount += 1;
        }
        else if (n % 2 == 1) {
            n = Math.round(n / 3)
            opCount += 1;
        }
    }
    if (opCount == 0) {
        return 0;
    }
    else {
        return opCount - 1;
    }
};
    

    function isPrime(n) {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) return false;
            return n > 1;
        }
    }


