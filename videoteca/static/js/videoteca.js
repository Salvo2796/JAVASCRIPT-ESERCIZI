let titoliHorror = [];
let titoliAzione = [];
let titoliCommedia = [];
let titoliThriller = [];
let titoliFantascienza = [];
let generi = ["h", "a", "c", "t", "f"];

let titolo;
let genere;

while (true) {
    titolo = prompt("Inserisci il titolo del film (digita 'stop' per vedere i risultati)");
    if (titolo === "stop") {
        break;
    }

    genere = prompt("Inserisci il genere tra: h (Horror), a (Azione), c (Commedia), t (Thriller), f (Fantascienza)");

    if (genere === "h") {
        titoliHorror.push(titolo);
    } else if (genere === "a") {
        titoliAzione.push(titolo);
    } else if (genere === "c") {
        titoliCommedia.push(titolo);
    } else if (genere === "t") {
        titoliThriller.push(titolo);
    } else if (genere === "f") {
        titoliFantascienza.push(titolo);
    } else {
        alert("Genere non valido");
    }
}

for (y = 0; y < generi.length; y++){
    if (generi[y] === "h"){
        for (let i = 0; i < titoliHorror.length; i++) {
            document.getElementById("horror").innerHTML = document.getElementById("horror").innerHTML + ("<li>" + titoliHorror[i] + "</li>");
        }
        
    }  
    if(generi[y] === "a") {
        for ( i = 0; i < titoliAzione.length; i++) {
            document.getElementById("azione").innerHTML = document.getElementById("azione").innerHTML + ("<li>" + titoliAzione[i] + "</li>");
        }
        
    }  
    if(generi[y] === "c") {
        for ( i = 0; i < titoliCommedia.length; i++){
            document.getElementById("commedia").innerHTML = document.getElementById("commedia").innerHTML + ("<li>" + titoliCommedia[i] + "</li>");
        }
        
    }  
    if(generi[y] === "t") {
        for ( i = 0; i < titoliThriller.length; i++){ 
            document.getElementById("thriller").innerHTML = document.getElementById("thriller").innerHTML + ("<li>" + titoliThriller[i] + "</li>");
        }
        
    }  
    if(generi[y] === "f") {
        for ( i = 0; i < titoliFantascienza.length; i++) {
            document.getElementById("fantascienza").innerHTML = document.getElementById("fantascienza").innerHTML + ("<li>" + titoliFantascienza[i] + "</li>");
        }
        
    } 

}   