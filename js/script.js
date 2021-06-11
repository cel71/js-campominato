
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
var tentativiUser = 5;

while (user.length < tentativiUser) {
    var number = parseInt(prompt("BENVENUTO: Inserisci un numero tra 1 e 100"));
    if (number < 1 || number > 100 || isNaN(number)) {
        alert("I NUMERI INSERITI NON SONO COMPRESI TRA 1 E 100");
        check = true;
        break;
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
