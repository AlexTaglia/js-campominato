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

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInArray(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true;
        }
    }
    return false;
}

var listNumPC = [];
var numBombs = 16;
var maxBoxes = 100;

while (listNumPC.length < numBombs) {
    var randomNum = getRandomNumber(1, maxBoxes)

    if (!isInArray(listNumPC, randomNum)) {
        listNumPC.push(randomNum);
    }
}

console.log('lista PC', listNumPC);
// creata lista 16 numeri non duplicati

// --------------------------------------------------------------------------
// chiedo all'utente per (maxBoxes - numBombs) di inserire un numero alla volta tra 1 e maxBoxes
// !!!l'utente non puo inserire un numero gia inserto, 
//  se numUtente isInArray listNumPC partita termina else pusho il num in numUtente e cosi via
//  stmpo il risultato numUtente.lenght 

var userAttempts = maxBoxes - numBombs;
console.log('numero tentativi', userAttempts);

var listNumUser = [];

while (listNumUser.length < userAttempts) {
    var numUser = parseInt(prompt('inserisci un numero tra 1 e ' + maxBoxes));

    while (isNaN(numUser) || numUser < 1 || numUser > maxBoxes) {
        alert(('Attenzione! devi inserire un numero da 1 a ') + maxBoxes);
        numUser = parseInt(prompt('Inserisci un numero da 1 a ' + maxBoxes));
    }

    if (isInArray(listNumPC, numUser)) {
        break;

    } else if (isInArray(listNumUser, numUser)) {
        alert('hai già inserito il numero '), numUser;

    } else if (!isInArray(listNumUser, numUser)) {
        listNumUser.push(numUser);
        console.log('lista Utente ' + listNumUser);
    }
}

if (listNumUser.length === userAttempts){
    alert('Sei stato molto fortunato! il tuo punteggio è ' + listNumUser.length)
} else {
    alert('Partita finita, il tuo punteggio è ' + listNumUser.length)
}
