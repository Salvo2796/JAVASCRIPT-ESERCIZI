alert("Devi inserire almeno 10 partecipanti prima di fermarti. Puoi inserire più partecipanti e scrivere 'stop' quando vuoi fermarti.");
        
        let blocco = [];
        
        while(true){
            let nome = prompt("Inserisci il nome del partecipante");
    
            if(nome.toLowerCase() === "stop" && blocco.length >= 10){
                break; 
            } else if (nome.toLowerCase() === "stop" && blocco.length <10) {
                alert("Devi inserire almeno 10 partecipanti prima di fermarti.");
            } else {
                blocco.push(nome);
            }
        }
    
        let vince = Math.floor(Math.random() * blocco.length);
        document.write("Il vincitore dell'estrazione è " + blocco[vince]);