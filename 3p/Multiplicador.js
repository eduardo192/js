const Multiplicador = (a,b) => {
    let resultado = 1; 
     for(let count = a; count<=b; count++){
        resultado *= count;
    }
    return resultado;
}