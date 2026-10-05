// pijltjes van de slider

var rij = document.getElementById("projectTrack");

// 1 kaart + ruimte ertussen
var stap = 320 + 28;

function naarLinks() {
    rij.scrollBy({ left: -stap, behavior: "smooth" });
}

function naarRechts() {
    rij.scrollBy({ left: stap, behavior: "smooth" });
}
