
var rij = document.getElementById('projectTrack');
// Pijltjes van de slider: alleen aanzetten als ze bestaan,
// anders stopt de rest van het bestand met werken.
var prevKnop = document.getElementById('prevBtn');
var nextKnop = document.getElementById('nextBtn');
if (rij && prevKnop) {
    prevKnop.onclick = function () {
        rij.scrollBy({ left: -350, behavior: 'smooth' });
    };
}
if (rij && nextKnop) {
    nextKnop.onclick = function () {
        rij.scrollBy({ left: 350, behavior: 'smooth' });
    };
}

// Let op: de popups openen zonder JavaScript (via :target in CSS).

// De README is uit de popup gehaald, dus de rest van dit bestand is niet meer nodig.