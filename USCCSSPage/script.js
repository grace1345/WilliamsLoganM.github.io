'using strict'

function toggleNav(){
    console.log("toggling nav-menu");
    const navItems = document.getElementById("navItems");
    navItems.classList.toggle("hidden");
}

window.onload = function(){  
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;
}
