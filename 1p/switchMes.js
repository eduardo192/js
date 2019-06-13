var mes;
print('ingresa el dia dle mes: ');
mes = Number(readline());

switch(mes){
	case 1: {print('Enero'); break;}
	case 2: {print('Febrero'); break;}
	case 3: {print('Marzo'); break;}
	case 4: {print('Abril'); break;}
	case 5: {print('Mayo'); break;}
	case 6: {print('Junio'); break;}
	case 7: {print('Julio'); break;}
	case 8: {print('Agosto'); break;}
	case 9: {print('Septiembre'); break;}
	case 10: {print('Octubre'); break;}
	case 11: {print('Nobiembre'); break;}
	case 12: {print('Diciembre'); break;}
	default: print('error de entrada' + mes)
}