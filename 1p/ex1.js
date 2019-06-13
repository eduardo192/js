var a = readline();
var b = readline();
var c = readline();
var radical;
var x1,x2;

 
if (a == 0 ){
    print(' El primer numero ingresado es numero neutro aditivo');
}
else{
    if(a < 0){
	print('Cuadrado de ' + a + ' : ' + a * a);
    }
}

if (b == 0){
    print( ' El segundo numero ingresado es numero neutro aditivo');
}
else{
     if(b < 0){
	 print('Cuadrado de '+  b + ':' + b*b);
    }
}


if (c == 0){
    print(' El tercer numeor ingresado es numero neutro aditivo');
}
else{
    
    if(c<0){

	print('cuadrado de ' + c + ': ' + c*c);
    }
}


radical = Math.sqrt( (b*b) - (4*a*c) );
x1 = ((b*-1) - radical) / 2;
x2 = ((b*-1) + radical) /2;

print(x1 + '\n' + x2);





