import { soma, mult, salvarResultado } from "./utils.js";

const a = 5;
const b = 3;

const path = "./result.txt";

console.log(`A: ${a}`);
console.log(`B: ${b}`);

console.log(`A + B = ${soma(a, b)}`);
console.log(`A * B = ${mult(a, b)}`);

salvarResultado(path, `A + B = ${soma(a, b)}\nA * B = ${mult(a, b)}`);
console.log(`Resultados salvo em ${path}.`);
