function litros() {
    let galones = document.getElementById('gal').value;
    let litros = galones * 3.79;
    document.getElementById('lit').innerHTML = litros.toFixed(2) + " litros";
}