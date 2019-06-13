let n = parseInt(prompt("ingrese el numero de columnas"));
if (n == NaN) {
    throw ("Ingresa solo numeros!!!!!");
} else {
    let a = new Array(n);
    for (let i = 1; i <= n; i++) {
        a[i] = new Array(n);
    }
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            a[i][j] = combina(i - 1, j - 1);
        }
    }

    for (i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(a[i][j]);
            document.write(" ");
        }
        document.write("<br>");
    }

    function combina(x, y) {
        return Math.round(factorial(x) / (factorial(y) * factorial(x - y)));
    }

    function factorial(z) {
        let f = 1;
        if (z !== 0) {
            for (let k = 1; k <= z; k++) {
                f *= k;
            }
        }
        return f;
    }
}