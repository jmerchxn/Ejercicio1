import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { numeroPrimo } = require('./common.cjs');

const numero = Math.ceil(Math.random() * 100);
console.log(`Número generado: ${numero}`);

if (numeroPrimo(numero)) {
    console.log(`${numero} es un número primo`);
} else {
    console.log(`${numero} no es un número primo`);
}
