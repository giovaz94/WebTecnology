const risultato = document.querySelector("div");

document
    .querySelector("input[value = 'Testo uppercase']")
    .addEventListener("click", function () {
        let testo = risultato.innerHTML;
        testo = testo.toUpperCase();
        risultato.innerHTML = testo;
    });

document
    .querySelector("input:nth-child(2)")
    .addEventListener("click", function () {
        let testo = risultato.innerHTML;
        testo = testo.toLowerCase();
        risultato.innerHTML = testo;
    });

document
    .querySelector("input:nth-child(3)")
    .addEventListener("click", function () {
        let testo = risultato.innerHTML;
        testo = testo.slice(5, testo.length) + testo.slice(0, 5);
        risultato.innerHTML = testo;
    });



