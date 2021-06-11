
var sixTeenRandomNumber = [];

while (sixTeenRandomNumber.length < 16){
    var randomNumberComputer = Math.floor(Math.random() * 100) + 1;
    if(!sixTeenRandomNumber.includes(randomNumberComputer)) {
        sixTeenRandomNumber.push(randomNumberComputer);
    }
}
console.log(sixTeenRandomNumber);

var user = [];
var check = false;
var tentativiUser = "";
var max = "";

var livello = parseInt(prompt("CAMPO MINATO: Scegli il livello di difficoltà da 0 a 2"));
while (livello !== 0 && livello !== 1 && livello !== 2) {
    alert("ATTENZIONE SCEGLI LA DIFFICOLTA'");
    livello = parseInt(prompt("Scegli il livello di difficoltà da 0 a 2"));
}

switch (livello) {
    case 0:
        max = 100;
        tentativiUser = 84;
        break;
    case 1:
        max = 80;
        tentativiUser = 64;
        break;    
    case 2:
        max = 50;
        tentativiUser = 34;
        break;
}

while (user.length < tentativiUser) {
    if (livello === 0){
        var number = parseInt(prompt("BENVENUTO: Inserisci un numero tra 1 e 100"));
        if (number < 1 || number > 100 || isNaN(number)) {
            alert("I NUMERI INSERITI NON SONO COMPRESI TRA 1 E 100");
            check = true;
            break;
        }
    } else if (livello === 1){
        var number = parseInt(prompt("BENVENUTO: Inserisci un numero tra 1 e 80"));
        if (number < 1 || number > 80 || isNaN(number)) {
            alert("I NUMERI INSERITI NON SONO COMPRESI TRA 1 E 80");
            check = true;
            break;
        }
    } else if (livello === 2){
        var number = parseInt(prompt("BENVENUTO: Inserisci un numero tra 1 e 50"));
        if (number < 1 || number > 50 || isNaN(number)) {
            alert("I NUMERI INSERITI NON SONO COMPRESI TRA 1 E 50");
            check = true;
            break;
        }
    }
    
    if (!user.includes(number)) {
        if (sixTeenRandomNumber.includes(number)) {
            alert("HAI PRESO UNA MINA");
            check = true;
            break;
        } else {
            user.push(number);
            console.log(user);
        }
    } else {
        alert("HAI GIA' INSERITO QUESTO NUMERO");
    }
}

if (!check) {
    document.getElementsByClassName("campo-minato")[0].innerHTML = "HAI VINTO: FINE DEL GIOCO";
} else {
    document.getElementsByClassName("campo-minato")[0].innerHTML = "HAI PERSO: FINE DEL GIOCO";
}

document.getElementsByClassName("risultato")[0].innerHTML = "NUMERI INSERITI: " + user.length;
