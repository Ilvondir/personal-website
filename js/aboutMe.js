const container = document.querySelector(".container"); 
const content = document.querySelector(".content");

let dropdownDivsTable = [];

const firstHeader = document.createElement("h1");
firstHeader.style = "font-size:4vmax;";
firstHeader.textContent = "Moje umiejętności";
content.appendChild(firstHeader);

for (let i=0; i<2; i++) {
    const dropdownDiv = document.createElement("div");
    dropdownDiv.style = "overflow:hidden; font-size:2.5vmin; width:80vw; padding:5vmin; box-sizing:border-box; border-radius:5vmin; box-shadow:1vw 1vw 2vw #555555; background-color: white; margin:0 0 5vw 0; transition:height 0.5s; height:17vmax";

    const header = document.createElement("h1");
    header.style = "margin:0; font-size:3vmax; float:left";
    dropdownDiv.appendChild(header);
    dropdownDiv.appendChild(document.createElement("br"));

    const arrows = document.createElement("div");
    arrows.style = "width:8vmax; height:4vmax; float:right";
    const imgArrow = document.createElement("img");
    imgArrow.style = "width:10vmax; height:5vmax;";
    imgArrow.setAttribute("src", "img/arrow.png");
    imgArrow.setAttribute("alt", "Strzałka.");
    arrows.appendChild(imgArrow);
    dropdownDiv.appendChild(arrows);
    arrows.setAttribute("onclick", "dropdown()");

    const hiddenDiv = document.createElement("div");
    hiddenDiv.style = "width: 100%; margin-top:0; clear:both; padding:3vmax; box-sizing:border-box";
    hiddenDiv.setAttribute("id", "hidden");
    dropdownDiv.appendChild(hiddenDiv);

    content.appendChild(dropdownDiv);
    dropdownDivsTable[i] = dropdownDiv;
}

dropdownDivsTable[0].querySelector("h1").textContent = "Web development";
createSkillBar(3, dropdownDivsTable[0]);
createWWWContent(4);

dropdownDivsTable[1].querySelector("h1").textContent = "Java";
createSkillBar(2, dropdownDivsTable[1]);
createJavaContent(4)


function createSkillBar(level, dropdownDiv) {

    const bar = document.createElement("div");
    bar.style = "width:80%; padding:1vmax; box-sizing:border-box; display:flex; align-items:center; justify-content:center; clear:both";
    bar.classList.add("bar");
    dropdownDiv.insertBefore(bar, dropdownDiv.querySelector("#hidden"));

    for (let i=0; i<5;i++) {
        const smallBars = document.createElement("div");
        smallBars.style = "height:2vmax; width:12vmax; float:left; margin:-0.5vmin 1vmax;";

        if (i==0) smallBars.style.cssText += " border-top-left-radius:2vmax; border-bottom-left-radius:2vmax;";
        if (i==4) smallBars.style.cssText += " border-top-right-radius:2vmax; border-bottom-right-radius:2vmax;";
        if (level > 0) smallBars.style.cssText += " background-color: #2ABEF2";
        else smallBars.style.cssText += " background-color: #BBBBBB";
        bar.appendChild(smallBars);
        level--;
    }
}

function dropdown() {
    event.target.style = "width:10vmax; height:5vmax; transition:0.5s; transform:rotate(180deg)";

    event.target.parentNode.parentNode.style = "overflow:hidden;font-size:2.5vmin; width:80vw; padding:5vmin; box-sizing:border-box; border-radius:5vmin; box-shadow:1vw 1vw 2vw #555555; background-color: white; margin:0 0 5vw 0; transition:height 0.5s; height:65vmax";

    event.target.parentNode.setAttribute("onclick", "getUp()");
}

function getUp() {
    event.target.style = "width:10vmax; height:5vmax; transition:0.5s; transform:rotate(0)";

    event.target.parentNode.parentNode.style = "overflow:hidden;font-size:2.5vmin; width:80vw; padding:5vmin; box-sizing:border-box; border-radius:5vmin; box-shadow:1vw 1vw 2vw #555555; background-color: white; margin:0 0 5vw 0; transition:height 0.5s; height:17vmax";

    event.target.parentNode.setAttribute("onclick", "dropdown()");
}

function createWWWContent (segments) {
    for (i=0; i<segments;i++) {
        const place = dropdownDivsTable[0].querySelector("#hidden");

        const category = document.createElement("div");
        category.style = "width:100%; margin:5vmax 0 0 0";
        
        const categoryHeader = document.createElement("h2");
        categoryHeader.style = "font-size:2.5vmax; margin:0;";
        category.prepend(categoryHeader);

        place.appendChild(category);

        switch (i) {
            case 0:
                categoryHeader.textContent = "HTML";
                createSkillBar(4, place);
                break;
            case 1:
                categoryHeader.textContent = "CSS";
                createSkillBar(3, place);
                break;
            case 2:
                categoryHeader.textContent = "JavaScript";
                createSkillBar(3, place);
                break;
            default:
                categoryHeader.textContent = "PHP";
                createSkillBar(2, place);
        }
    }
}

function createJavaContent (segments) {
    for (i=0; i<segments;i++) {
        const place = dropdownDivsTable[1].querySelector("#hidden");

        const category = document.createElement("div");
        category.style = "width:100%; margin:5vmax 0 0 0";
        
        const categoryHeader = document.createElement("h2");
        categoryHeader.style = "font-size:2.5vmax; margin:0;";
        category.prepend(categoryHeader);

        place.appendChild(category);

        switch (i) {
            case 0:
                categoryHeader.textContent = "Składnia";
                createSkillBar(3, place);
                break;
            case 1:
                categoryHeader.textContent = "Semantyka";
                createSkillBar(3, place);
                break;
            case 2:
                categoryHeader.textContent = "Paradygmat obiektowy";
                createSkillBar(3, place);
                break;
            default:
                categoryHeader.textContent = "Biblioteka Swing";
                createSkillBar(1, place);
        }
    }
}