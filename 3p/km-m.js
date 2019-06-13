function millas() {
    let kilometros = document.getElementById('km').value;
    let millas = kilometros * 0.62137;
    document.getElementById('m').innerHTML = millas.toFixed(2) + " millas";
}