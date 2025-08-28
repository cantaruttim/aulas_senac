// 1. QUAL A DIFERENÇA ENTRE VAR, LET E CONST?

const PI = 3.14;
console.log("Value of PI:", PI);

let radius = 5;
let area = PI * radius * radius;
console.log("Area of circle with radius", radius, "is:", area);

let nome = "Mathues"


console.log("............");

console.log(typeof(PI));
console.log(typeof(radius));
console.log(typeof(area));
console.log(typeof(nome));


// 2. COMO PODEMOS REALIZAR A ENTRADA DE DADOS?

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu nome: ", function(nome) {
  console.log("Olá, " + nome + "!");
  rl.close();
});
