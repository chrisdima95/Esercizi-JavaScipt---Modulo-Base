// 3.1 Pari o dispari
let numero = 4;
console.log("3.1 Pari o dispari:", numero % 2 === 0 ? "pari" : "dispari");

// 3.2 == vs ===
console.log("3.2 0 == '0':", 0 == '0');
console.log("3.2 0 === '0':", 0 === '0');
console.log("3.2 null == undefined:", null == undefined);
console.log("3.2 null === undefined:", null === undefined);

// 3.3 Operatore ternario
let eta = 20;
console.log("3.3 Maggiorenne o minorenne:", eta >= 18 ? 'maggiorenne' : 'minorenne');

// 3.4 || vs ??
let zero = 0;
let indefinito;

console.log("3.4 zero || 10:", zero || 10);
console.log("3.4 zero ?? 10:", zero ?? 10);
console.log("3.4 indefinito || 10:", indefinito || 10);
console.log("3.4 indefinito ?? 10:", indefinito ?? 10);
