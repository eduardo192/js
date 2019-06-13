let cadena = "hola que tal";
let x = 1;
let array = cadena.split('');
for (let i = 0; i < array.length; i++) {
    if (array[i] == " ") {
        x++;
    }
}
if (array[array.length - 1] == " ") {
    x--;
}
console.log(x);