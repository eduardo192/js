var suma=0;

function pares (){
	for(var i=3; i<=9; i++){

		suma += validar(i);
	}
	return suma;		
}

function validar(i){
	if(i%2==0){
		return i;
	}
	else{
		return 0;
	}
}
print('El resutado de la suma es: ' + pares());