$("#subscribe").on("click", function subscribe() {
    let address = $("#email").val();

    if (address != "") {
        alert("Adres " + address + " został zapisany na subskrypcję!")
    }
});