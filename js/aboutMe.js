const container = document.querySelector(".container"); 

const content = document.createElement("div");
content.style = "width:100vw; box-sizing:border-box; padding: 5vmin 10vmax; background-image:url(\"img/background.png\"); background-size:cover; background-position:70% 30%;";
container.appendChild(content);


let dropdownDivsTable = [];

const firstHeader = document.createElement("h1");
firstHeader.style = "font-size:4vmax";
firstHeader.textContent = "Moje umiejętności";
content.appendChild(firstHeader);

for (let i=0; i<3; i++) {
    const dropdownDiv = document.createElement("div");
    dropdownDiv.style = "font-size:2.5vmin; width:80vw; padding:5vmin; box-sizing:border-box; border-radius:5vmin; box-shadow:1vw 1vw 2vw #555555; background-color: white; margin:0 0 5vw 0;";

    const header = document.createElement("h1");
    header.style = "margin:0 0 2vw 0; font-size:3vmax;";
    dropdownDiv.appendChild(header);

    const arrows = document.createElement("div");
    arrows.style = "width:15vmax; height:15vmax; float:right";
    const imgArrow = document.createElement("img");
    imgArrow.setAttribute("src", "img/arrow.png");
    imgArrow.setAttribute("alt", "Strzałka.");
    arrows.appendChild(imgArrow);
    dropdownDiv.appendChild(arrows);

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
    bar.style = "width:80%; padding:1vmax; box-sizing:border-box; display:flex; align-items:center; justify-content:center";
    dropdownDiv.appendChild(bar);

    for (let i=0; i<5;i++) {
        const smallBars = document.createElement("div");
        smallBars.style = "height:2vmax; width:12vmax; float:left; margin:0 1vmax;";

        if (i==0) smallBars.style.cssText += " border-top-left-radius:2vmax; border-bottom-left-radius:2vmax;";
        if (i==4) smallBars.style.cssText += " border-top-right-radius:2vmax; border-bottom-right-radius:2vmax;";
        if (level > 0) smallBars.style.cssText += " background-color: #2ABEF2";
        else smallBars.style.cssText += " background-color: #BBBBBB";
        bar.appendChild(smallBars);
        level--;
    }
}