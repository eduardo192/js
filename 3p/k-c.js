function cel() {

    let kelvins = document.getElementById('k').value;
    let celsiu = kelvins - 273.15;
    document.getElementById('c').innerHTML = celsiu.toFixed(3) + " grados";
}