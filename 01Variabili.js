// 1.1 Dichiarazione e riassegnazione
var a = 10;
let b = 20;
const c = 30;

a = 15; 
b = 25; 
// c = 35; // Scommenta per vedere errore

console.log("1.1", a, b, c);

// 1.2 Cicli con var e let + setTimeout
console.log("1.2 Ciclo con var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

console.log("1.2 Ciclo con let:");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}

// 1.3 Hoisting con var
console.log("1.3 Hoisting con var, x:", x);
var x = 5;
