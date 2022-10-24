const mail = document.querySelector("#email");
const button = document.querySelector("#subscribe");

button.addEventListener("click", subscribe);

function subscribe() {
    let address = mail.value;

    if (address != "") {
        alert("Adres " + address + " został zapisany na subskrypcję!")
    }
}