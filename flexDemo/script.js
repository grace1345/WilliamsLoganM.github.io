'using strict'

function toggleNav(){
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden");
}

function togglePara(){
    const moreInfoPara = document.getElementById("more-info");
    moreInfoPara.hidden = !moreInfoPara.hidden;

    return false;
}

function validateFirstName(){
    //if error is showing, remove it
    let errorSpan = document.getElementById("error-first-name");
    if(errorSpan != null)
    {
        errorSpan.remove();
    }
    //show an error when value is blank.article
    if(this.value.trim() == "")
    {
        let errorSpan = document.createElement("span");
        errorSpan.id = "error-first-name";
        errorSpan.innerHTML = "* Blank";
        errorSpan.classList.add("error");
        this.after(errorSpan);

    }
}

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;

    const moreInfoPara = document.getElementById("more-info");
    moreInfoPara.hidden = true;

    const expandLink = document.getElementById("expand-link");
    expandLink.onclick = togglePara;

    const firstNameTB = document.getElementById("txt-first-name");
    firstNameTB.addEventListener("keyup", validateFirstName);
}