// Add and remove the responsive class, the ultimate in toggling technology 
function navBurger() 
{
    var x = document.getElementById("navbarElement");
    if (x.className === "navbar") {
        x.className += " responsive";
    } 
    else 
    {
        x.className = "navbar";
    }
}