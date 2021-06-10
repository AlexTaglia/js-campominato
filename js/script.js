/*
Consegna Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente per (100 - 16) volte di inserire 
un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, 
altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o 
raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il 
numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto) all’inizio il software 
richiede anche una difficoltà all’utente che cambia il range di numeri 
casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 
con difficoltà 2 => tra 1 e 50

*/

// --------------------------------------------------------------------------
// 1 creo un'array che conterrà i miei 16 numeri
// 2 creo una funzione che mi generi 16 numeri casuali
// 2.1 Verifico con while se il numero random generato non è gia nell'array e se non è presente lo pusho


// Funzione numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione che cerca se un elemento è in un array
function isInArray(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true;
        }
    }
    return false;
}

// preparo l'array per la lista dei numeri del PC
var listNumPC = [];

// Dicharo ilnumero di bombe
var numBombs = 16;

// Faccio inserire all'untente il livello
var level = prompt('inserisci un livello di difficoltà 0 (Facile), 1 (Medio) o 2 (Difficile) 3 (Veterano)');


// Ciclo fino a che l'utente inserisce il numero corretto del livello
while (isNaN(level) || level < 0 || level > 3){
    alert('Attenzione! devi sciegliere il livello da 0 a 3');
    level = prompt('inserisci un livello di difficoltà 0 (Facile), 1 (Medio) o 2 (Difficile) 3 (Veterano)');
}

// setto la selezione del livello
switch (level) {

    case "0":
        var maxBoxes = 100;
        break; 
    
    case "1":
        var maxBoxes = 80;
        break;
    
    case "2":
        var maxBoxes = 50;
        break;
           
    case "3":
        var maxBoxes = numBombs * 2;
        break;
}

// creo un numero random fino alla lunghezza massima <di numBombs
while (listNumPC.length < numBombs) {
    var randomNum = getRandomNumber(1, maxBoxes)

    // se !non è nell'array dei numeri del PC lo pusho
    if (!isInArray(listNumPC, randomNum)) {
        listNumPC.push(randomNum);
    }
}

console.log('lista PC', listNumPC);
// Ho creato la mia lista di  "maxBoxes " numeri non duplicati

// --------------------------------------------------------------------------
// chiedo all'utente per (maxBoxes - numBombs) di inserire un numero alla volta tra 1 e maxBoxes
// !!!l'utente non puo inserire un numero gia inserto, 
//  se numUtente isInArray listNumPC partita termina else pusho il num in numUtente e cosi via
//  satmpo il risultato numUtente.lenght 

// tentativi a disposizione 
var userAttempts = maxBoxes - numBombs;
console.log('numero tentativi', userAttempts);

// preparo l'array per la lista dei numeri dell'utente
var listNumUser = [];

// ciclo fino a che la lista dei numeri dell'utente  fino ai tentativi che ha a disposizione
while (listNumUser.length < userAttempts) {
    // chiedo iun numero tra 1 e maxBoxes
    var numUser = parseInt(prompt('inserisci un numero tra 1 e ' + maxBoxes));

    // ciclo fino a che l'utente non inserisce i valori desiderati
    while (isNaN(numUser) || numUser < 1 || numUser > maxBoxes) {
        alert(('Attenzione! devi inserire un numero da 1 a ') + maxBoxes);
        numUser = parseInt(prompt('Inserisci un numero da 1 a ' + maxBoxes));
    }

    // se il numUser è contenuto nella listNumPC esco  
    if (isInArray(listNumPC, numUser)) {
        break;

    // se il numUser è già contenuto nella listNumUser comunico all'utente che ha gia inserito il numero   
    } else if (isInArray(listNumUser, numUser)) {
        alert('hai già inserito il numero '), numUser;

    // invece se il numUser non è già nell'array lo pusho 
    } else if (!isInArray(listNumUser, numUser)) {
        listNumUser.push(numUser);
        console.log('lista Utente ' + listNumUser);
    }
}

// stramo il risultato 
if (listNumUser.length === userAttempts){
    alert('Sei stato molto fortunato! il tuo punteggio è ' + listNumUser.length)
} else {
    alert('Partita finita, il tuo punteggio è ' + listNumUser.length)
}
