var distanciaTierra = {
    distancia: 7920,
    DsitanciaEntre: function(planeta){
        Validacion(planeta);
        if(typeof planeta != "object"){
            throw("Error de sistema")
        }
        var distancia = this.distancia - planeta.distancia;
        return distancia;
    }
}

var planeta = {
    distancia: 0,
    ObtenrDistancia: function(){
        this.distancia = prompt("ingresa la distancia del planeta")
    }
}

function Validacion(planeta){
    if (planeta.distancia == 0){
        planeta.ObtenrDistancia();
    }
    else{
        distanciaTierra.DsitanciaEntre(planeta);
    }
}