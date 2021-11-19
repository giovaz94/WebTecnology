$(document).ready(function() {
    $("button:first-of-type").click(function(e) {
        e.preventDefault();
        $("ul").append("<li>" + $("input#numero").val() + "</li>");
    });
    $("button:not(:first-of-type)").click(function(e) {
        e.preventDefault();
        let sum = 0;
        $("li").each(function() {
            sum += parseInt($(this).text());
        });

        $("ul + p").text(sum);
    });
});