// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Creo la variabile pariodispari e la scelta del numero

var pariDispari = prompt("Scegli tra pari o dispari:");
var numero = parseInt(prompt("Scegli un numero tra 1 e 5:"));
if (numero % 2 == 0) {
  document.getElementById('choice').innerHTML = "La tua scelta è pari";
} else {
  document.getElementById('choice').innerHTML = "La tua scelta è dispari";
}


// Creo un if per essere sicuri che l'utente ci dia un numero e una parola
if (isNaN(numero)) {
  console.log("Devi scegliere un numero");
} else if (!isNaN(pariDispari))
console.log("Devi scegliere tra pari e dispari");

// Stampo il numero scelto
document.getElementById('number').innerHTML = "Il numero da te scelto è: " + numero;

computer();
// Usando una funzione genero un numero per l'avversario
// Il numero generato casualmente deve andare tra 1 e 5
function computer() {
  var pcNumero = Math.floor(Math.random() * 5 + 1);
  document.getElementById('enemy-number').innerHTML = "Il numero scelto dall'avversario è: " + pcNumero;
  if (pcNumero % 2 == 0) {
    document.getElementById('enemy-choice').innerHTML = "La scelta dell'avversario è pari";
  } else {
    document.getElementById('enemy-choice').innerHTML = "La scelta dell'avversario è dispari";
  }

  var risultato = numero + pcNumero;
  if (risultato % 2 == 0) {
    document.getElementById('vincitore').innerHTML = "Ha vinto la scelta pari";
  } else {
    document.getElementById('vincitore').innerHTML = "Ha vinto la scelta dispari";
  }
}
