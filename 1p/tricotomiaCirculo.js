var radio, a, c,distancia;
print('Ingresa el radio del circulo: ');
radio = readline();
print('ingresa la cordenada en el eje X: ');
a = readline();
print('ingresa la cordenada en el eje Y: ');
c = readline();

distancia = (a*a) + (c*c);
radio = radio *radio;
if(distancia == radio || distancia < radio){
	if(distancia == radio){
		print('El punto (' + a +',' + c +') esta sobre el circulo');
	}
	else{
		print('El punto (' + a +',' + c +') esta dentro del circulo');
	}
}
else{
	print('El punto (' + a +',' + c +') esta fuera del circulo');
}