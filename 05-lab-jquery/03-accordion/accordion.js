
function hideElement(element) {
    element
        .removeClass("selected")
        .next()
        .slideUp();
}

$(document).ready(function(){
    $("button").click(function(){
        if($(this).hasClass()) {
            hideElement($(this));
        } else {
            // Bottone non cliccato
            hideElement($("button.selected"));
            $(this).addClass("selected")
                .next()
                .slideDown();
        }
       
    });
});