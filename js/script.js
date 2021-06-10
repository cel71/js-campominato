
var sixTeenRandomNumber = [];

while (sixTeenRandomNumber.length < 16){
    var random = Math.floor(Math.random() * 100) + 1;
    if(sixTeenRandomNumber.indexOf(random) === -1) {
        sixTeenRandomNumber.push(random);
    }
}
console.log(sixTeenRandomNumber);

var user = [];
var check = false;

while (user.length < 2 && check === false) {
    var number = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    for (var x = 0; x < sixTeenRandomNumber.length; x++) {
        if (number === sixTeenRandomNumber[x]) {
            check = true;
        }
        if (check) {
            document.getElementsByClassName("campo-minato")[0].innerHTML = "HAI PRESO UNA MINA";
        }
    }
    document.getElementsByClassName("risultato")[0].innerHTML = "NUMERI INSERITI: " + user;
}
