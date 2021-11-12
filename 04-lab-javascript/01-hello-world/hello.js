/**
 * Stampa hello world nella console.
 */
console.log("Hello, World!");

/**
 * Utilizzare sempre let o const
 */
// const helloSpan = document.querySelector("span#ciao");
const helloSpan = document.getElementById("ciao");
// Attenzione funziona solamente con un tag di apertura e di chiusura -->
helloSpan.innerHTML = "Hello, World!"; 
// E' possibile utilizzare anche helloSpan.innerText();

/**
 * Inserire la stringa <<2021>> all'interno del paragrafo con classe anno
 */
// Occhio, restituisce un oggetto array quindi occorre selezionare cosa usare tramite le square brackets. 
const yearPar = document.getElementsByClassName("anno")[0];
yearPar.innerText = "2021";