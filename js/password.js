let password = prompt("Podaj hasło administratora:");

if (password != "admin") {
    alert("Podano błędne hasło. Nastąpi przekierowanie na stronę główną.");
    document.location.href = "index.html";
} else {
    alert("Hasło jest poprawne.")
}