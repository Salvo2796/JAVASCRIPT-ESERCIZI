let operat = false;
let recupero = "";
let val = "";

const tim = document.getElementById("tim");
const vodafone = document.getElementById("vodafone");
const windtre = document.getElementById("windtre");
const fastweb = document.getElementById("fastweb");
const iliad = document.getElementById("iliad");
const altro = document.getElementById("altro");

[tim, vodafone, windtre, fastweb, iliad, altro].forEach(function(gestore){
    gestore.addEventListener("click", scelta);

    function scelta() {
        operat = true;

        for (i = 0; i < document.modulo.operatore.length; i++) {
            if (document.modulo.operatore[i].checked == true) {
                val = document.modulo.operatore[i].value;

                if (val === "altro") {
                    document.modulo.altroOperatore.disabled = false;
                    document.modulo.altroOperatore.focus();
                    document.modulo.altroOperatore.value = recupero;
                } else {
                    if (document.modulo.altroOperatore.value !== "") {
                        recupero = document.modulo.altroOperatore.value;
                    }

                    document.modulo.altroOperatore.disabled = true;
                    document.modulo.altroOperatore.value = "";
                }
            }
        }

        if (val === "altro") {
            val = document.modulo.altroOperatore.value;
        }
    }
});

document.getElementById("submit").addEventListener("click", trasmetti);

function trasmetti() {
    let codiceFiscale = document.modulo.codice_fiscale.value;

    if (codiceFiscale.length !== 16) {
        alert("Il codice fiscale deve essere di 16 caratteri.");
        return;
    }

    if (document.modulo.operatore.value === "altro") {
        val = document.modulo.altroOperatore.value;
    }

    document.getElementById("form").style.display = "none";
    document.getElementById("risultato").style.display = "block";
    document.getElementById("reset").style.display = "block";

    document.modulo2.uno.value = document.modulo.nome.value;
    document.modulo2.due.value = document.modulo.cognome.value;
    document.modulo2.tre.value = document.modulo.codice_fiscale.value;
    document.modulo2.quattro.value = document.modulo.citta.value;
    document.modulo2.cinque.value = val;
    document.modulo2.sei.value = document.modulo.telefono.value;
    document.modulo2.sette.value = document.modulo.marca.value;
    document.modulo2.otto.value = document.modulo.modello.value;
    document.modulo2.nove.value = document.modulo.problema.value;

    if (document.modulo.recapito.value === "") {
        document.modulo2.dieci.value = document.modulo.telefono.value;
    } else {
        document.modulo2.dieci.value = document.modulo.recapito.value;
    }
}

document.getElementById("reset").addEventListener("click", resetta);

function resetta() {
    document.getElementById("form").style.display = "block";
    document.getElementById("risultato").style.display = "none";
    document.getElementById("form").reset();
}