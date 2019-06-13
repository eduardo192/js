//isNumber(x)
// ture si es un numero
// false si no es numero

var isNumber = function (x){
    if(typeof x === 'number' )
    	       return true;
     else
	       return false;
}

print(isNumber('hola'));
