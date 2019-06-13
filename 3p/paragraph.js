let cadena = "hola hueles a culo \n\n maldito perro desgraciado\n\nsoy marcos el destructorde mundos\n\n";
let arreglo = cadena.split('');
let parrafos = 1;
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == '\n' && arreglo[i + 1] == '\n') {
        parrafos++;
    }
}
if (arreglo[arreglo.length - 2] == '\n' && arreglo[arreglo.length - 1] == '\n') {
    parrafos--;
}
console.log("Numero de parrafos: " + parrafos);