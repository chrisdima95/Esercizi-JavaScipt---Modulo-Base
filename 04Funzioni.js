// 4.1 Funzione dichiarata media
function media(a, b) {
  return (a + b) / 2;
}
console.log("4.1 media(4, 8):", media(4, 8));

// 4.2 Funzioni espressione e arrow
const mediaExpr = function(a, b) { return (a + b) / 2; }
const mediaArrow = (a, b) => (a + b) / 2;
console.log("4.2 mediaExpr(4, 8):", mediaExpr(4, 8));
console.log("4.2 mediaArrow(4, 8):", mediaArrow(4, 8));

// 4.3 Raddoppia array
function raddoppiaArray(arr) {
  return arr.map(n => n * 2);
}
console.log("4.3 raddoppiaArray([1,2,3]):", raddoppiaArray([1,2,3]));

// 4.4 Parametro default
function saluto(nome = "ospite") {
  return `Ciao, ${nome}!`;
}
console.log("4.4 saluto('Luca'):", saluto("Luca"));
console.log("4.4 saluto() senza argomento:", saluto());
