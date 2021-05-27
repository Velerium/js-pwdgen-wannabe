var name = prompt('Inserisci il tuo nome');
var surname = prompt('Inserisci il tuo cognome');
var pet = prompt("Inserisci l'animale da compagnia che hai/vorresti!")
var number1 = Math.floor(Math.random() * 100);
var number2 = Math.floor(Math.random() * 100);

var password = name + number1 + pet + number2 + surname;

document.getElementById('pwd').innerHTML = password;