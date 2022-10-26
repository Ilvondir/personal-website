<?php
if (isset($_POST['person']) && isset($_POST['email']) && isset($_POST['content'])) {
    $person = $_POST['person'];
    $email = $_POST['email'];
    $content = $_POST['content'];

    if ($person=="" || $email=="" || $content=="") {
        echo "<p>Wprowadź wszystkie dane, aby wysłać maila!</p>";
    } else {
        
        if (mail($email, "Potwierdzenie nadania maila.", "<html><body>Hej!<br>Tu <b>Michał Komsa</b>!<br>Otrzymałem Twojego maila i wkrótce go rozpatrzę.<br><br>Z poważaniem:<br>Komsa Michał</body></html>", "From: Michał Komsa\r\nContent-type: text/html; charset=utf-8\r\nX-Mailer: PHP/" . phpversion()) && mail("komsa.m@o2.pl", "Wiadomość ze strony od ". $person, $content, "From: ".$email . "\r\nContent-type: text/html; charset=utf-8\r\nReply-To: ".$email."\r\nX-Mailer: PHP/" . phpversion())) {
            echo "<div style=\"margin-top:2vmax\">Udało się poprawnie wysłać maila. Sprawdź swoją skrzynkę odbiorczą.</div>";
        } else {
            echo "<div style=\"margin-top:2vmax\">Podczas wysyłania maila wystąpił błąd.</div>";
        }
    }
}
?>