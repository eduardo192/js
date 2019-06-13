function tabla() {
    var numero = document.getElementById('numero').value;
    let resultado = 0;
    for (let count = 1; count <= 10; count++) {
        resultado = numero * count;
        document.write(resultado + "<br>");
    }

    document.write("<strong>DONE.....</strong>");

}