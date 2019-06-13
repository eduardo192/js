var x,y;
print('ingresa el primer numero: ');
x = readline();
print('ingresa el segundo numero: ');
y = readline();

print(divicion(x,y));

function divicion(a,b){
    validar(a,b);
   
}

/*function argumentoRequerido(arg){
    if(arg === null)
    throw new Error('El valor no puede ser 0');
}*/

function validar(a,b){
    print('funcion validar');
    if (typeof a === 'number' && typeof b === 'number'){
        //argumentoRequerido(b);
        return a/b;
    }
    else
        return 'Ingrese numeros';

}