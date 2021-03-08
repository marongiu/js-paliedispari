// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola

var parola = prompt("Dammi una parola:");


// Richiamo la funzione
parolaContrario();

// Creo la funzione
function parolaContrario () {
  // Creo una variabile contrario con stringa vuota
  var contrario = "";
  // Creo un ciclo per leggere la parola al contrario
  for (var i = 0; i < parola.length; i++) {
    contrario = parola[i] + contrario;
    // Se la parola è uguale alla parola al contrario è palindroma
  } if (parola == contrario) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}
