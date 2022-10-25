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
                    <input type="text" name="person" placeholder="Podaj swoje imię" required><br>
                    <input type="email" name="email" placeholder="Podaj swój adres email" required><br>
                    <textarea name="content" placeholder="Podaj treść wiadomości" required></textarea><br>
                    <button onclick="send()">Wyślij email</button>
                </form>
<?php
if (isset($_GET['person']) && isset($_GET['email']) && isset($_GET['content'])) {
    $person = $_GET['person'];
    $email = $_GET['email'];
    $content = $_GET['content'];

    if ($person=="" || $email=="" || $content=="") {
        echo "<p>Wprowadź wszystkie dane, aby wysłać maila!</p>";
    } else {

    }
}
?>
            </div>
        </div>
    </body>
</html>