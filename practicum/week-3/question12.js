/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    var container = [];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    fsum = 0;
    a = 0;
    b = 1;
    if(n == 0) {
        return fsum;
    }
    while (n > 0) {
        fsum = a + b;
        container.push(fsum);

        a = b;
        b = fsum;
        n = n - 1;
    }
    //console.log(container);
    return container[container.length - 2];
};

let test12 = F(30);
console.log(test12);