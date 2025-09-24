// Funzione per generare i radio button delle categorie
function renderCategories(products) {
  const categories = [...new Set(products.map(p => p.category))];
  const form = document.getElementById("categories-form");

  // RADIO "Tutti" per mostrare tutti i prodotti
  const allInput = document.createElement("input");
  allInput.type = "radio";
  allInput.name = "category";
  allInput.id = "cat-all";
  allInput.value = "all";
  allInput.checked = true; // selezionato di default

  const allLabel = document.createElement("label");
  allLabel.htmlFor = "cat-all";
  allLabel.textContent = "Tutti";

  form.appendChild(allInput);
  form.appendChild(allLabel);
  form.appendChild(document.createElement("br"));

  // listener per "Tutti"
  allInput.addEventListener("change", () => {
    renderProducts(products); // mostra tutti i prodotti
  });

  // radio per ogni categoria
  categories.forEach((cat, i) => {
    const id = `cat-${i}`;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "category";
    input.id = id;
    input.value = cat;

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = cat;

    form.appendChild(input);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));

    // listener per filtrare i prodotti
    input.addEventListener("change", () => {
      const filtered = products.filter(p => p.category === cat);
      renderProducts(filtered);
    });
  });
}

// FUNZIONE PER GENERARE LISTA PRODOTTI
function renderProducts(products) {
  const container = document.getElementById("prodotti");
  container.innerHTML = "";

  //CARD
  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "prodotto";

    const title = document.createElement("h2");
    title.textContent = p.title;

    const imgMain = document.createElement("img");
    imgMain.src = p.images[0] || "";
    imgMain.alt = p.title;

    const price = document.createElement("p");
    price.textContent = `${p.price} €`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${p.rating}`;

    // DIV DETTAGLI
    const divDetails = document.createElement("div");
    divDetails.className = "prodotto-dettagli";
    divDetails.style.display = "none"; // inizialmente nascosto

    const description = document.createElement("p");
    description.textContent = p.description;
    divDetails.appendChild(description);

    // GESTIONE DELLE IMMAGINI IN DIV DETAIL
    if (p.images.length > 1) {
  let currentIndex = 1; // parte dalla seconda immagine
  const imgExtra = document.createElement("img");
  imgExtra.src = p.images[currentIndex];
  imgExtra.alt = p.title;
  divDetails.appendChild(imgExtra);

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 1) currentIndex = p.images.length - 1; // salta l'immagine principale
    imgExtra.src = p.images[currentIndex];
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= p.images.length) currentIndex = 1; // salta l'immagine principale
    imgExtra.src = p.images[currentIndex];
  });

  divDetails.appendChild(prevBtn);
  divDetails.appendChild(nextBtn);
}

    //PULSANTE DETTAGLI
    const btnDettagli = document.createElement("button");
    btnDettagli.textContent = "Dettagli";
    btnDettagli.addEventListener("click", () => {
      divDetails.style.display = divDetails.style.display === "none" ? "block" : "none";
    });

    //PULSANTE AGGIUNGI AL CARRELLO
    const btnCarrello = document.createElement("button");
    btnCarrello.textContent = "Aggiungi al carrello";
    btnCarrello.addEventListener("click", () => {

      const ul = document.getElementById("lista-carrello");
      const totalEl = document.getElementById("carrello-totale");

      // Funzione per aggiornare il totale
      function aggiornaTotale() {
        let totale = 0;
        [...ul.children].forEach(li => {
          const prezzo = parseFloat(li.dataset.price);
          const qty = parseInt(li.querySelector("input").value);
          totale += prezzo * qty;
        });
        totalEl.textContent = `Totale: ${totale.toFixed(2)} €`;
      }

      //AGGIUNTA AL CARRELLO
      if ([...ul.children].some(li => li.textContent.includes(p.title))) return; //se il prodotto è già nel carrello non lo aggiunge
      const li = document.createElement("li");
      li.dataset.price = p.price;
      li.textContent = `${p.title}` + " Price: " +  li.dataset.price;

      const counter = document.createElement("input");
      counter.type = "number";
      counter.value = 1;
      counter.min = 1;
      counter.textContent = "Quantity";

      counter.addEventListener("input", aggiornaTotale); //aggiorna se cambia la quantità

      //PULSANTE RIMUOVI
      const btnRemove = document.createElement("button");
      btnRemove.textContent = "Rimuovi";
      btnRemove.addEventListener("click", () => {
        li.remove();
        aggiornaTotale(); //aggiorna se rimuovo
      })

      li.appendChild(counter);
      li.appendChild(btnRemove);
      ul.appendChild(li);

      aggiornaTotale();
    });

    div.appendChild(title);
    div.appendChild(imgMain);
    div.appendChild(price);
    div.appendChild(rating);
    div.appendChild(btnDettagli);
    div.appendChild(divDetails);
    div.appendChild(btnCarrello);


    container.appendChild(div);
  });
}

//GESTIONE DEL FORM
const form = document.getElementById("payment-form");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // blocca invio del form per validazione

  const nome = document.getElementById("nome").value.trim();
  const card = document.getElementById("card").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  // reset messaggio errore
  errorMsg.textContent = "";

  // Validazioni
  if (nome.length < 3) {
    errorMsg.textContent = "Il nome deve contenere almeno 3 caratteri.";
    return;
  }

  if (!/^\d{16}$/.test(card)) {
    errorMsg.textContent = "Il numero della carta deve contenere esattamente 16 cifre.";
    return;
  }

  if (!/^\d{3}$/.test(cvv)) {
    errorMsg.textContent = "Il CVV deve contenere esattamente 3 cifre.";
    return;
  }

  // Se tutto va bene
  alert("Pagamento effettuato con successo!");
  form.reset();
});


// FETCH DEI DATI
fetch("products.json")
  .then(response => response.json())
  .then(products => {
    renderCategories(products);
    renderProducts(products);
  })
  .catch(err => console.error("Errore nel caricamento JSON:", err));
