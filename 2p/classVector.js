class Vector {

    
    constructor(a){
        this._data = new Array();
        if(a!=undefined){
            if(a instanceof Array){
                if(typeof a[0] == "number"){
                    this._data = a;
                }
                else{
                    throw("El arreglo debe ser numerico");
                }
            }
            else{
                throw("EL parametrto debe ser un arreglo");
            }
            
        }    
    };

    //encontrar numero menor del arreglo
    menor(){
        let valor = this._data[0];
        for (let x of this._data){
            if(valor>x){
                valor=x;
            }
        }
        return valor;

    };

    //encontar el valor mayo del arreglo
    mayor(){
        let valor= this._data[0];
        for (let x of this._data){
            if(valor<x){
                valor=x;
            }
        }
        return valor;
    };

    //suma de los elementos del vector 
    suma(){
        let suma = 0;
        let i = 0;
        for(let x of this._data){
            i++;
            suma = suma + x;
        }
        return suma;
    };

    //inicializador altrnativo: dato y numero de datos del arreglo
    inisialisar(a,b){
        for(let x = 0;x<b;x++){
            this._data[x] = a;
        }
    };

    //promedio de los elementos del vector
    promedio(){
        let promedio = 0;
        let i =0;
        for(let x of this._data){
            i = i++;
            promedio = promedio + x;
        }
        return promedio/i;
    };

    //vectorizacion 
    vectorisar(a,b,c){
        const puntos = (b-a)/c;

        this._data[0]=a;
        for (let x=1;x<=c;x++){
            this._data[x] = this._data[x-1] + puntos; 
        }
    };
    //get data: regresa vector
    get data () {return this._data;};
}