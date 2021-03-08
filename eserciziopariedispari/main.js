// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Creo la variabile pariodispari e la scelta del numero

var pariDispari = prompt("Scegli tra pari o dispari:");
console.log("La tua scelta:", pariDispari);
var numero = parseInt(prompt("Scegli un numero tra 1 e 5:"));
console.log("Il tuo numero", numero);

// Creo un if per essere sicuri che l'utente ci dia un numero e una parola
if (isNaN(numero)) {
  console.log("Devi scegliere un numero");
} else if (!isNaN(pariDispari))
  console.log("Devi scegliere tra pari e dispari");


computer();
// Usando una funzione genero un numero per l'avversario

function computer() {
  // Il numero generato casualmente deve andare tra 1 e 5
  var pcNumero =  Math.floor(Math.random() * 5 + 1);
  console.log("Il numero dell'avversario", pcNumero);
  if (pcNumero % 2) {
    console.log("La scelta dell'avversario è: pari");
  } else {
    console.log("La scelta dell'avversario è: dispari");
  }
}
