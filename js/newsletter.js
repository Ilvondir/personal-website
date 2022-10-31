window.addEventListener("load", readXML);
window.addEventListener("submit", ajaxNewsletter);

function readXML() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             main(this);
        }
    };

    xhttp.open("GET", "xml/newsletter.xml");
    xhttp.send();
}


function main(xml) {
    let xmlData = xml.responseXML;

    let tab = xmlData.getElementsByTagName("subscriber");
    for (let i = 0; i <tab.length; i++) {
        document.querySelector("table").innerHTML += "<tr><td><input name=\"subscribers[]\" type=\"checkbox\" id=\"person" + (i+1) + "\" class=\"subscribers\"></td><td><label for=\"person" + (i+1) + "\">" + tab[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "<br>" + tab[i].getElementsByTagName("email")[0].childNodes[0].nodeValue + "</label></td></tr>";
    }
}

function checkAllSubscribers() {
    let toCheck = document.querySelectorAll(".subscribers");
    
    for (let i=0; i<toCheck.length; i++) {
        toCheck[i].checked = true;
    }

    document.getElementById("checkAll").setAttribute("onchange", "uncheckAllSubscribers()");
    document.querySelector("label[for=\"checkAll\"]").textContent = "Odznacz wszystkich";
}

function uncheckAllSubscribers() {
    let toCheck = document.querySelectorAll(".subscribers");
    
    for (let i=0; i<toCheck.length; i++) {
        toCheck[i].checked = false;
    }

    document.getElementById("checkAll").setAttribute("onchange", "checkAllSubscribers()");
    document.querySelector("label[for=\"checkAll\"]").textContent = "Zaznacz wszystkich";
}

function ajaxNewsletter(e) {
    e.preventDefault();

    let subject = document.querySelector("input[name=\"subject\"]").value;
    let content = document.querySelector("textarea").value;
    let sendTo = [];
    let anySelected = false;

    let xhttp = new XMLHttpRequest();

    let subscribers = document.querySelectorAll(".subscribers");
    for (let i=0; i<subscribers.length; i++) {
        sendTo[i] = subscribers[i].checked;
        if (subscribers[i].checked==true) anySelected = true;
    }

    if (anySelected) {
        document.querySelector(".formResult").textContent = "Twoje żądanie jest przetwarzane, proszę czekać.";

        let dataToSend = {"subject": subject, "content": content, "sendTo": sendTo};

        $.ajax({
            type: "POST",
            url: "php/newsletterSending.php",
            data: dataToSend,
            success: function(ret) {
                $(".formResult").html(ret);
            }
        });

        document.querySelector("input[name=\"subject\"]").value = "";
        document.querySelector("textarea").value = "";

        
    } else {
        document.querySelector(".formResult").textContent = "Wybierz przynajmniej jednego odbiorcę.";
    }
}