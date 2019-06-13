function change() {
    let euros = document.getElementById('euros').value;
    let dolar = euros * 1.13;
    document.getElementById('dolares').innerHTML = "$" + dolar.toFixed(2);
}