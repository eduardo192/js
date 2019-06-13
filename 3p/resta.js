const arreglo = [22, 9, 60, 12, 4, 56];
const resta = (x, y) => x - y;
const rest = array => array.reduce(resta, 0);
console.log(rest(arreglo));