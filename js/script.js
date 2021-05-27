var name = prompt('Inserisci il tuo nome');
var surname = prompt('Inserisci il tuo cognome');
var color = prompt('Inserisci il tuo colore preferito');

var password = name + surname + color + '21';

document.getElementById('pwd').innerHTML = password;