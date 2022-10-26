$(window).on("load", function() {
    $('form').on('submit', function (e) {
        e.preventDefault();
  
        $.ajax({
            type: 'POST',
            url: 'mailer.php',
            data: $('form').serialize(),
            success: function () {
            alert('form was submitted');
            }
        });
    });
});
