let cadena = "hola todos los que viven en colima son jotos. a mi me gustan los nacho, el agua y la cervesa.";
let divicion = cadena.split('');
let x = 1;
divicion.forEach(elemento => {
    switch (elemento) {
        case ".":
            x++;
            break;
        case ",":
            x++;
            break;
        case ";":
            x++;
            break;
    }
});
switch (divicion[divicion.length - 1]) {
    case ".":
        x--;
        break;
    case ",":
        x--;
        break;
    case ";":
        x--;
        break;
}
console.log("Numeor de Fraces: " + x);