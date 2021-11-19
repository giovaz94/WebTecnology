$(document).ready(function() {
    $("button").click(function() {
        $.ajax({url: "localhost/files/colors.json", success: function(result){
            console.log(result);
        }});
    })
});