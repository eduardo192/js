var aPoint = {//literal Obhect
    x:7,
    y:5,
    distanciaAB: function (bPoint){
        var d1 = bPoint.x - this.x;
        var d2 = bPoint.y - this.y;
        d1 = Math.pow(d1,2); // es igual d1 ** 2
        d2 = Math.pow(d2,2); // ** operador para elevar a una potencia
        return Math.sqrt( d1+d2 );
    }
};

var bPoint = {//literal objrct
    x:4,
    y:1
};

