let mapeo = function(s) {
    return s.map(function(elemento) {
        switch (elemento) {
            case 'a':
                return 3;
                break;
            case 'b':
                return 2;
                break;
            case 'c':
                return 1;
                break;
        }
    });
};

let cadena = "abcabcabc";
let array = cadena.split('');
mapeo(array);