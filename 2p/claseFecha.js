class Fecha{
    constructor(dia,mes,año){
        this._dia = dia;
        this._mes = mes;
        this._año = año;

        if( typeof this._dia == 'number' && typeof this._mes == 'number' && typeof this._año == 'number'){
            if( !( (this._dia >= 1 && this._dia <= 31) && (this._mes >= 1 && this._mes <= 12) ) ){
                throw("ingrece dia entre 1 y 31 \n ingrese mes entre 1 y 12");
            }
        }else{
            throw("Ingresa solo numeros!!!!!!");
        }
        

    }

    get dia () {return this._dia;}
    get año (){return this._año;}
    get mes (){return this._mes;}

    set dia (x){this._dia = x;}
    set mes (x){
        this._mes = x;
        
    }
    set año (x){this._año = x;}

    aumentarDia(){
        if(this._dia == 31){
    
            this._dia = 1;

            if(this._mes == 12){
                
                this._mes = 1;
                this._año++
            }
            else{
                this._mes++;
            }
    
        }else{
            this._dia++;
        }
        
    }
}