
function pares(){
	for(var i = 1; i<=9; i++){
	
		print(validar(i));
	}
}

function validar( i ){
	if(i%2==0){
		return i;
	}
	else{
		return "";
	}
}

pares();