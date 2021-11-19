
// Attendo che il documento carichi correttamente
$(document).ready(function() {
    $("span#ciao").text("Hello, World!"); 

    /**
     * Versione Javascript vanilla
     */
    // const elements = document.getElementsByClassName("anno");
    /* for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = "2021";
    } */
    /*Array.from(elements).forEach(function(item) {
        item.innerText = "2021";
    });*/

    /**
     * Versione Jquery
     */
    $(".anno").text("2021");
});




