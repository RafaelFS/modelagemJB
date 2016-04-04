var lambda = 1;
var mi = 1;
var dt = 1;
var C = 1;

var A = math.matrix([[math.bignumber(1-3*lambda*dt*C), math.bignumber(mi*dt), 0, math.bignumber(mi*dt)],
                     [math.bignumber(3*lambda*dt*C), math.bignumber(1-2*lambda*dt-mi*dt), 0, 0],
                     [math.bignumber(3*lambda*dt*(1-C)), 0, math.bignumber(1-2*lambda*dt), 0],
                     [0, math.bignumber(2*lambda*dt), math.bignumber(2*lambda*dt), math.bignumber(1-mi*dt)]]);

var p3Ok0 = math.bignumber(1);
var p2Ok0 = math.bignumber(1);
var pUD0 = math.bignumber(1);
var pf0 = math.bignumber(1);
var p0 = math.matrix([[p3Ok0],
                      [p2Ok0],
                      [pUD0],
                      [pf0]])

var An  = math.pow(A, 1000);
var result = math.multiply(An, p0);
printMatrix(result);
document.write(result);

function printMatrix (value) {
  var precision = 16;
  console.log(math.format(value, precision));
}
