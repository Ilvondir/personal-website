$(window).on("load", function() {
    $("form").on("submit", function (e) {
        e.preventDefault();

        $(".formResult").html("Twoje żądanie jest przetwarzane, proszę czekać.");

        let person = $("#person").val();
        let email = $("#email").val();
        let content = $("#content").val();
  
        if (person=="" || email=="" || content=="") $(".formResult").html("Wprowadź wszystkie dane, aby wysłać maila.");
        else {

            $.ajax({
                type: "POST",
                url: "php/mailer.php",
                data: $("form").serialize(),
                success: function (ret) {
                    $(".formResult").html(ret);
                }
            });
        }
    });
});
