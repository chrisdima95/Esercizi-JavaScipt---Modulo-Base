// 5.1 Area rettangolo + log
function areaRettangolo(base, altezza) {
  console.log("5.1 Base:", base);
  console.log("5.1 Altezza:", altezza);
  let area = base * altezza;
  console.log("5.1 Area:", area);
  return area;
}
areaRettangolo(5, 10);

// 5.2 console.log vs console.table
const utente = { nome: "Luca", età: 30, città: "Roma" };
console.log("5.2 Utente log:", utente);
console.table(utente);

// 5.3 console.log nel ciclo for
for (let i = 0; i < 3; i++) {
  console.log("5.3 Passo", i);
}

// 5.4 Debug funzione mistero
function mistero(x) {
  console.log("5.4 Input:", x);
  let y = x * 2;
  console.log("5.4 Dopo moltiplicazione:", y);
  let risultato = y - 1;
  console.log("5.4 Risultato finale:", risultato);
  return risultato;
}
mistero(5);
