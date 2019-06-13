function texto (){
    let informacion = document.getElementById("text").value;
    document.getElementById('caracteres').innerHTML = "Numero de Caracteres: " + informacion.length; 
    let letras = informacion.split("");
    document.getElementById('parrafos').innerHTML = "Numero de palabras: " + informacion.split(' ').length; 
    
}