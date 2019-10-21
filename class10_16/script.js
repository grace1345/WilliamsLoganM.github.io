'using strict'

function highlightCell(event)
{
    let callerName = event.target.tagName;
    if (callerName.toLowerCase() != "td") return;
    
    event.target.classList.add("highlight");
}

function unhighlightCell(event)
{
    let callerName = event.target.tagName;
    if (callerName.toLowerCase() != "td") return;
    
    event.target.classList.remove("highlight");
}

function getTDInfo(event)
{
    let animalTDs = document.querySelectorAll("#animal-table td");
    //let animalTDs = document.getClassName("Class that TD's share");
    let p = document.createElement("p");
    this.after(p);

    for(let animalTD of animalTDs)
    {
        p.innerHTML += animalTD.innerHTML + ", ";
    }
}

function styleThatBitch()
{
    let p = document.querySelector(".style-me-bitch");
    p.classList.toggle("highlight");

}

window.onload = function(){
    const animalTable = document.getElementById("animal-table");
    animalTable.onmouseover = highlightCell;
    animalTable.onmouseout = unhighlightCell;

    const tdButton = document.getElementById("td-info-button");
    tdButton.onclick = getTDInfo;

    const styleButton = document.getElementById("bitch-styler");
    styleButton.onclick = styleThatBitch;

    this.setInterval(styleThatBitch, 600);
}