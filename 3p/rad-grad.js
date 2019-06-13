function grados() {
    let radianes = document.getElementById('r').value;
    let grados = radianes * (180 / 3.1416);
    document.getElementById('g').innerHTML = "Grados : " + grados.toFixed(3);
}