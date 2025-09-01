// 2.1 Creazione e typeof
let str = "ciao";
let num = 123;
let bool = true;
let nul = null;
let undef;

console.log("2.1", typeof str, typeof num, typeof bool, typeof nul, typeof undef);

// 2.2 Problema 0.1 + 0.2  --> Floating point precision error
console.log("2.2 Somma 0.1 + 0.2:", 0.1 + 0.2);

// 2.3 Boolean() conversioni
console.log("2.3 Boolean(0):", Boolean(0));
console.log("2.3 Boolean(''):", Boolean(''));
console.log("2.3 Boolean('0'):", Boolean('0'));
console.log("2.3 Boolean([]):", Boolean([]));
console.log("2.3 Boolean({}):", Boolean({}));

// 2.4 Null vs undefined
let nonInizializzata;
let oggetto = {};
console.log("2.4 Variabile non inizializzata:", nonInizializzata);
console.log("2.4 Proprietà mancante:", oggetto.proprieta);
console.log("2.4 Null assegnato:", null);
