//Constantes principais
var mttf = 5000; // horas
var mttrc = 1; //horas
var mttrp = 5*30*24; //horas = 5 meses

//Constantes derivadas
var lambda = 1/mttf;
var mic = 0;
// var mic = 1/mttrc;
var mip = 0;
//var mip = 1/mttrp;
var C = 0.8; //Deve ser entre 0,8 e 1

var dt = 1/60; //Intervalo de tempo (h) = 1 minuto
var N =  60*24*365*1;     //Número de passos de forma que N*dt = 1 ano

var A = math.matrix([[math.bignumber(1-3*lambda*dt), math.bignumber(mic*dt), math.bignumber(mip*dt), math.bignumber(mic*dt)],
                     [math.bignumber(3*lambda*dt*C), math.bignumber(1-2*lambda*dt-mic*dt), 0, 0],
                     [math.bignumber(3*lambda*dt*(1-C)), 0, math.bignumber(1-2*lambda*dt-mip*dt), 0],
                     [0, math.bignumber(2*lambda*dt), math.bignumber(2*lambda*dt), math.bignumber(1-mic*dt)]]);

var p3Ok0 = math.bignumber(1);
var p2Ok0 = math.bignumber(0);
var pUD0 = math.bignumber(0);
var pf0 = math.bignumber(0);
var p0 = math.matrix([p3Ok0,
                      p2Ok0,
                      pUD0,
                      pf0])
var An  = math.pow(A, N);
var result = math.multiply(An, p0);

printMatrix(result);
printResultToHtml(result);

function printMatrix (value) {
  var precision = 16;
  console.log(math.format(value, precision));
}

function printResultToHtml(result){
  var resultString = createResultString(result);
  printStringToHtml(resultString);
}

function printStringToHtml(string){
  var span = document.createElement("span");
  var text = document.createTextNode(string);     // Create a text node
  var br = document.createElement("br");
  span.appendChild(text);
  span.appendChild(br);
  document.body.appendChild(span);
}

function createResultString(result){
  var p3OkN = math.format(math.subset(result, math.index(0)), 16);
  var p2OkN = math.format(math.subset(result, math.index(1)), 16)
  var pUDN = math.format(math.subset(result, math.index(2)), 16)
  var pfN = math.format(math.subset(result, math.index(3)), 16)
  return p3OkN + ', ' + p2OkN + ', ' + pUDN + ', '+ pfN
}
