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

// Creo un if per essere sicuri che l'utente ci dia un numero e una parola e un numero tra 1 e 5
if (isNaN(numero)) {
  location.reload(alert("Non hai inserito correttamente i dati"));
} else if (!isNaN(pariDispari)) {
  location.reload(alert("Non hai inserito correttamente i dati"));
} else if (numero > 5) {
  location.reload(alert("Non hai inserito correttamente i dati"));
} else if (numero < 1) {
  location.reload(alert("Non hai inserito correttamente i dati"));
} else if (pariDispari != "pari" && pariDispari != "dispari") {
  location.reload(alert("Non hai inserito correttamente i dati"));
}

// Stampo il numero scelto
document.getElementById('number').innerHTML = "Il numero da te scelto è: " + numero;

var avversario = computer();
// Stampo la scelta dell'avversario
if (avversario % 2 == 0) {
  document.getElementById('enemy-choice').innerHTML = "La scelta dell'avversario è pari";
} else {
  document.getElementById('enemy-choice').innerHTML = "La scelta dell'avversario è dispari";
}

// Stampo la somma dei due risultati
var totale = somma();

// Dichiaro il vincitore di conseguenza

if (totale % 2 == 0) {
  document.getElementById('vincitore').innerHTML = "Ha vinto la scelta pari";
} else {
  document.getElementById('vincitore').innerHTML = "Ha vinto la scelta dispari";
}



// Funzioni

// Usando una funzione genero un numero per l'avversario
// Il numero generato casualmente deve andare tra 1 e 5
function computer() {
  var pcNumero = Math.floor(Math.random() * 5 + 1);
  document.getElementById('enemy-number').innerHTML = "Il numero scelto dall'avversario è: " + pcNumero;
  return pcNumero;
}

// Creo una funzione Somma
function somma() {
  var risultato = numero + avversario;
  return risultato;
}
