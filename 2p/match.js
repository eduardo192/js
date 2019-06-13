var texto = "En un lugar de la Mancha";
var reg = /(\w)([aeiou])(\w)/g; //con "g" para match
var bus = texto.match(reg);
console.log(bus)
