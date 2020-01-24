$(document).ready(function(event) {

    $("form#formOne").submit(function(event) {
        var val1 = parseInt($("#one").val());
        console.log(val1);
        event.preventDefault();
    });
});
