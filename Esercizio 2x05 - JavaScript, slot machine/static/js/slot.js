
function generaImg() {
let immagini = ["static/images/1.png", "static/images/2.png", "static/images/3.png"];
return immagini[Math.floor(Math.random() * immagini.length)];
}

let timer;
let tentativi = 0;

document.querySelector(".pulsantegioca").addEventListener("click", gioca);

function gioca() {
document.querySelector(".pulsantegioca").disabled = true;
document.querySelector(".pulsantestop").disabled = false;

function imgCasuale() {
document.getElementById("uno").innerHTML = '<img src="' + generaImg() + '">';
document.getElementById("due").innerHTML = '<img src="' + generaImg() + '">';
document.getElementById("tre").innerHTML = '<img src="' + generaImg() + '">';

timer = setTimeout(imgCasuale, 200);

document.getElementById("esito").style.display = "none";
}

imgCasuale();

tentativi++;
document.getElementById("tentativi").innerHTML = tentativi;

}

let vittorie = 0;
let percentuale;
let percentualeIntero;

document.querySelector(".pulsantestop").addEventListener("click", stop);

function stop() {

document.querySelector(".pulsantegioca").disabled = false;
document.querySelector(".pulsantestop").disabled = true;

clearTimeout(timer); 

let risultato1 = generaImg();
let risultato2 = generaImg();
let risultato3 = generaImg();

document.getElementById("uno").innerHTML = '<img src="' + risultato1 + '">';
document.getElementById("due").innerHTML = '<img src="' + risultato2 + '">';
document.getElementById("tre").innerHTML = '<img src="' + risultato3 + '">';

document.getElementById("esito").style.display = "block";

if (risultato1 === risultato2 && risultato2 === risultato3){
    document.getElementById("esito").innerHTML = "HAI VINTO!";
    vittorie++;
    document.getElementById("vittorie").innerHTML = vittorie;
    
} else {
    document.getElementById("esito").innerHTML = "RITENTA!";
}

percentuale = ((vittorie / tentativi) * 100);
percentualeIntero =  Math.floor(percentuale);
document.getElementById("percentuale").innerHTML = percentualeIntero + "%";
}