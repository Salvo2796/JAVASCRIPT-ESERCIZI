document.getElementById("invia").addEventListener("click", mostraRicevuta);

function mostraRicevuta(){
    let nome1 = document.getElementById("nome").value;
    let cognome1 = document.getElementById("cognome").value;
    let smartphone1 = document.getElementById("smartphone").value;

    let nome, img, car;
    
    if (smartphone1 === "iphone") {
        nome = "Apple iPhone 13";
        img = "https://static1.unieuro.it/medias/sys_master/root/h6b/h79/33055367004190/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-5fbac7f05cd41d85100ffe253db88ca2-preview-sgmConversionBaseFormat-sgmProductFormat.jpg";
        car = "Memoria interna: 128 GB, Colore: Bianco, Tipo di display: OLED, Fotocamera: 12 MP";
    } else if (smartphone1 === "motorola") {
        nome = "Motorola moto g55";
        img = "https://static1.unieuro.it/medias/sys_master/root/hf8/h8f/46709334081566/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-b4b15e639e61bfeafe198678c87e91a2-preview-sgmConversionBaseFormat-sgmProductFormat.jpg";
        car = "Memoria interna: 256 GB, Colore: Grigio, Fotocamera: 50 MP, RAM: 8 GB";
    } else if (smartphone1 === "honor") {
        nome = "Honor Magic6 Lite";
        img = "https://static1.unieuro.it/medias/sys_master/root/hf9/ha7/45565842161694/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-4d709141f45dbc3689232bf17e6edef3-preview-sgmConversionBaseFormat-sgmProductFormat.jpg";
        car = "Memoria interna: 512 GB, Colore: Nero, Fotocamera: 108 MP, RAM: 8 GB";
    } else if (smartphone1 === "oneplus") {
        nome = "OnePlus 13R";
        img = "https://static1.unieuro.it/medias/sys_master/root/h2f/h08/46363807514654/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-37671e979fabadc1f82b1b7b2b0ea352-preview-sgmConversionBaseFormat-sgmProductFormat.jpg";
        car = "Memoria interna: 256 GB, Colore: Nero, Fotocamera: 50 MP, RAM: 12 GB";
    } else if (smartphone1 === "samsung") {
        nome = "Samsung Galaxy A35";
        img = "https://static1.unieuro.it/medias/sys_master/root/h0e/h34/44935255588894/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-e923cc22b5dba1fecbfeb3bb4facf2e6-preview-sgmConversionBaseFormat-sgmProductFormat.jpg";
        car = "Memoria interna: 128 GB, Colore: Lillà, Fotocamera: 50 MP, RAM: 6 GB";
    } else if (smartphone1 === "realmi") {
        nome = "realme Note 60";
        img = "https://static1.unieuro.it/medias/sys_master/root/he9/hcf/45803582160926/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-7ffa99f43d3c5f47cfa32aa9bd6be397-preview-sgmConversionBaseFormat-sgmProductFormat.jpg";
        car = "Memoria interna: 128 GB, Colore: Nero, Fotocamera: 32 MP, RAM: 4 GB";
    }

    
    document.getElementById("nomeRicevuta").textContent = nome1;
    document.getElementById("cognomeRicevuta").textContent = cognome1;
    document.getElementById("smartphoneRicevuta").textContent = nome;
    document.getElementById("imgRicevuta").innerHTML = "<img src='" + img + " 'class='immagine' >";
    document.getElementById("specifiche").textContent = car;

    document.getElementById("ricevuta").style.display = "block";
    document.getElementById("modulo").style.display = "none";
}

document.getElementById("reset").addEventListener("click", tornaIndietro);

function tornaIndietro(){
    
    document.getElementById("modulo").style.display = "block";
    document.getElementById("ricevuta").style.display = "none";
    document.getElementById("form").reset();
}