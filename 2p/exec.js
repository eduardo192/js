var re2 = /(\balumn[ao]{2,4}s?\b|\bprofesor(es|as?)?\b)/i;
var str = 'Este es un videotutorial para mis Alumnoos de programación';
var due = re2.exec(str);
console.log(due);

var texto = "En un lugar de la Mancha";
var reg = /(\w)([aeiou])(\w)/g;
var coin;
coin = reg.exec(texto);
console.log(coin);