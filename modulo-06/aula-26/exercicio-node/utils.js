import fs from 'fs';

export function soma(a, b) {
    return a + b;
}

export function mult(a, b) {
    return a * b;
}

export function salvarResultado(path, resultado) {
    fs.writeFileSync(path, resultado);
}
