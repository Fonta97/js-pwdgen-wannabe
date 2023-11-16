// richiesta dati per creare pw
const userName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const favColor = prompt("Qual'è il tuo colore preferito?");

console.log(userName, userSurname, favColor)

let passwordSpeciale = userName + userSurname + favColor + 23;

console.log(passwordSpeciale)

document.getElementById("password_finale").innerHTML = "Ecco la tua password super sicura:" + passwordSpeciale;
