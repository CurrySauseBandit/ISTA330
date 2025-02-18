/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  var tcontainer = [];
  for (var row = 0; row < n; row++) {
    tcontainer[row] = [];
    for (var col = 0; col <= row; col++) {
      if(col == 0 || col == row ){
        tcontainer[row].push(1);
      }
      else {
        tcontainer[row][col] = tcontainer[row-1][col-1] + tcontainer[row-1][col];
      }
    }
  }
  return tcontainer;
};

