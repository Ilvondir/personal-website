window.addEventListener("load", readXML);

function readXML() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             main(this);
        }
    };

    xhttp.open("GET", "xml/newsletter.xml", true);
    xhttp.send();
}


function main(xml) {
    let xmlData = xml.responseXML;

    let tab = xmlData.getElementsByTagName("subscriber");
    for (let i = 0; i <tab.length; i++) {
        document.querySelector("table").innerHTML += "<tr><td><input type=\"checkbox\" id=\"person" + (i+1) + "\" class=\"subscribers\"></td><td><label for=\"subscriber" + (i+1) + "\">" + tab[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "<br>" + tab[i].getElementsByTagName("email")[0].childNodes[0].nodeValue + "</label></td></tr>";   
    }
}

function checkAllSubscribers() {
    console.log("Działam!");
}