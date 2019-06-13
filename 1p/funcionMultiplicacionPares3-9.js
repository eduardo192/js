var multiplicasion=1;

function pares (){
	for(var i=3; i<=9; i++){

		multiplicasion *= validar(i);
	}
	return multiplicasion;		
}

function validar(i){
	if(i%2==0){
		return i;
	}
	else{
		return 1;
	}
}
print('El resutado de la multiplicasion es: ' + pares());