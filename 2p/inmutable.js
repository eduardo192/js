//IMMUTABILITY

var careful = 3.1;
careful = 1.3 //watch out
var careful = null //worst

let price = 120.25
let price = 20.125 //problema 
//price = 20.125//correcto 
price = 110.10
price = null

const tax = 0.825
const tax = 15.2// error de sintaxis
tax = 10 //error, no es pocible redefinir valor

const sam = {first: 'same', age: 2}
const sam = {} //sintaxis error
sam.age = 3

const greet = 'dude'
gree[0] = 'r' // cadena es inmutable

const pearl = Object.freeze({first:'pearl',age:1})
const pearl = {}
pearl.age = 3 //no se puede 
