const container = document.querySelector(".container"); 

const content = document.createElement("div");
content.style = "width:100vw; box-sizing:border-box; padding: 5vmin 10vmax; background-image:url(\"img/background.png\"); background-repeat:no-repeat;";
container.appendChild(content);


let dropdownDivsTable = [];

const firstHeader = document.createElement("h1");
firstHeader.style = "font-size:4vmax;";
firstHeader.textContent = "Moje umiejętności";
content.appendChild(firstHeader);

for (let i=0; i<3; i++) {
    const dropdownDiv = document.createElement("div");
    dropdownDiv.style = "font-size:2.5vmin; width:80vw; padding:5vmin; box-sizing:border-box; border-radius:5vmin; box-shadow:1vw 1vw 2vw #555555; background-color: white; margin:0 0 5vw 0; transition:height 0.5s; height:17vmax";

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

    content.appendChild(dropdownDiv);
    dropdownDivsTable[i] = dropdownDiv;
}

dropdownDivsTable[0].querySelector("h1").textContent = "Projektowanie WWW";
createSkillBar(3, dropdownDivsTable[0]);
dropdownDivsTable[1].querySelector("h1").textContent = "Java";
createSkillBar(2, dropdownDivsTable[1]);
dropdownDivsTable[2].querySelector("h1").textContent = "C";
createSkillBar(1, dropdownDivsTable[2]);

function createSkillBar(level, dropdownDiv) {

    const bar = document.createElement("div");
    bar.style = "width:80%; padding:1vmax; box-sizing:border-box; display:flex; align-items:center; justify-content:center; clear:both";
    dropdownDiv.appendChild(bar);

    for (let i=0; i<5;i++) {
        const smallBars = document.createElement("div");
        smallBars.style = "height:2vmax; width:12vmax; float:left; margin:-0.5vmax 1vmax;";

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

    event.target.parentNode.parentNode.style = "font-size:2.5vmin; width:80vw; padding:5vmin; box-sizing:border-box; border-radius:5vmin; box-shadow:1vw 1vw 2vw #555555; background-color: white; margin:0 0 5vw 0; transition:height 0.5s; height:40vmax";

    event.target.parentNode.setAttribute("onclick", "getUp()");
}

function getUp() {
    event.target.style = "width:10vmax; height:5vmax; transition:0.5s; transform:rotate(0)";

    event.target.parentNode.parentNode.style = "font-size:2.5vmin; width:80vw; padding:5vmin; box-sizing:border-box; border-radius:5vmin; box-shadow:1vw 1vw 2vw #555555; background-color: white; margin:0 0 5vw 0; transition:height 0.5s; height:16vmax";

    event.target.parentNode.setAttribute("onclick", "dropdown()");
}