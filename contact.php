<?
setcookie("id", $_GET["id"], (time()+60));
?>
<!DOCTYPE html>
<html lang="pl-PL">
    <head>
        <meta charset="UTF-8">
        <title>Portfolio</title>
        <link rel="shortcut icon" href="img/logo.png">
        <link rel="stylesheet" href="css/style.css">
        <meta name="robots" content="noindex">
        <script src="js/form.js" defer></script>
    </head>
    <body>
        <div class="container">
            <div class="navbar">
                <a href="index.html"><img src="img/logo.png" alt="Logo."></a>
                <ul>
                    <li><a href="index.html">Strona główna</a></li>
                    <li><a href="aboutMe.html">O mnie</a></li>
                    <li><a href="contact.php">Kontakt</a></li>
                </ul>
            </div>
            <div class="content">
                <h1>Skontaktuj się ze mną!</h1>
                <form action="">
                    <input type="hidden" name="id" value="<?=uniqid()?>">
                    <input type="text" name="person" placeholder="Podaj swoje imię" required><br>
                    <input type="email" name="email" placeholder="Podaj swój adres email" required><br>
                    <textarea name="content" placeholder="Podaj treść wiadomości" required></textarea><br>
                    <button>Wyślij email</button>
                </form>
<?php
if (isset($_GET['person']) && isset($_GET['email']) && isset($_GET['content']) && !($_GET["id"]==$_COOKIE["id"])) {
    $person = $_GET['person'];
    $email = $_GET['email'];
    $content = $_GET['content'];

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
            </div>
        </div>
    </body>
</html>