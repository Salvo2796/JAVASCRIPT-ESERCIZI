alert("Per visualizzare i risultati, scrivi 'stop' quando ti viene chiesto il nome dello studente");

let classe = [];
let insieme = [];
let nome;
let voto;

while (true) {

    nome= prompt("Il nome dello studente è: ");

    if (nome.toLowerCase() === "stop") {
        break;
    }

    voto = Number(prompt("Lo studente " + nome + " ha preso:"));

    let giudizio;

    switch (voto) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            giudizio = "insufficiente";
            break
        case 6:
            giudizio = "sufficiente";
            break
        case 7:
            giudizio = "discreto";
            break
        case 8:
            giudizio = "buono";
            break
        case 9:
            giudizio = "ottimo";
            break
        case 10:
            giudizio = "eccellente";
            break
        default:
            giudizio = "voto non valido";
    }

    let insieme = [nome, giudizio];
    classe.push(insieme);
}

document.write("<table>");
document.write("<tr>");
document.write("<th>");
document.write("Studente");
document.write("</th>");
document.write("<th>");
document.write("Voto");
document.write("</th>");
document.write("</tr>");

for (i = 0; i < classe.length; i++) {
    document.write("<tr>");
    document.write("<td>" + classe[i][0] + "</td>" + "<td>" + classe[i][1]+ "</td>");
    document.write("</tr>");
}

document.write ("</table>");