
var sixTeenRandomNumber = [];

while (sixTeenRandomNumber.length < 16){
    var random = Math.floor(Math.random() * 100) + 1;
    if(sixTeenRandomNumber.indexOf(random) === -1) {
        sixTeenRandomNumber.push(random);
    }
}
console.log(sixTeenRandomNumber);

var user = [];

while (user.length < 2) {
    var number = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    if (user.indexOf(number) === -1) {
        if (number === sixTeenRandomNumber) {
            alert("HAI PRESO UNA MINA")
            break;
        } else {
            user.push(number);
        }
    }
}

document.getElementsByClassName("campo-minato")[0].innerHTML = user;

