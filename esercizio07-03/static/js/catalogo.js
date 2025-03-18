let arr = ["static/images/evangelion.jpg","static/images/overlord.jpg", "static/images/Attack_on_Titan.jpg", "static/images/Naruto.jpg", "static/images/Eminence.jpg", "static/images/jojo.jpg", "static/images/monster.jpg", "static/images/dragon.jpg", "static/images/rent_a_girlfriend.jpg", "static/images/solo-leveling.jpg"];

document.getElementById("modulo").addEventListener("change", seleziona);

function seleziona(){
let elemento = document.getElementById("modulo").value;

document.getElementById("img").innerHTML = "<img src='" + arr[elemento]+"'>"; 
}    

document.getElementById("pulsante").addEventListener("click", indietro);

function indietro() { 
    let select = document.getElementById("modulo"); 
    if (select.selectedIndex > 1) { 
        select.selectedIndex--; 
            
    } else {
        select.selectedIndex = select.options.length - 1;
    }
    seleziona();

}

document.getElementById("pulsante2").addEventListener("click", avanti);

function avanti() { 
    let select = document.getElementById("modulo"); 
    if (select.selectedIndex < select.options.length -1) { 
        select.selectedIndex++; 
        
    } else {
        select.selectedIndex = 1;
    }
    seleziona(); 
}