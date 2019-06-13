const arreglo = [22, 9, 60, 12, 4, 56];
const div = (x, y) => x / y;
const divicion = numeros => numeros.reduce(div, 1);
console.log(divicion(arreglo));