
// Hamburger-menu voor telefoon
var hamburger = document.getElementById('hamburger');
var hoofdmenu = document.getElementById('hoofdmenu');

function sluitMenu() {
    if (!hoofdmenu || !hamburger) return;
    hoofdmenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Menu openen');
    hamburger.textContent = '☰';
    document.body.style.overflow = '';
}

if (hamburger && hoofdmenu) {
    hamburger.onclick = function () {
        var isOpen = hoofdmenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        hamburger.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
        hamburger.textContent = isOpen ? '✕' : '☰';
        // Voorkom scrollen van de pagina als het menu open is op telefoon
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    // Menu weer sluiten als je op een link klikt
    hoofdmenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', sluitMenu);
    });
    // Menu sluiten met Escape-toets
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') sluitMenu();
    });
}

var rij = document.getElementById('projectTrack');
// Pijltjes van de slider: alleen aanzetten als ze bestaan,
// anders stopt de rest van het bestand met werken.
var prevKnop = document.getElementById('prevBtn');
var nextKnop = document.getElementById('nextBtn');
var sliderDots = document.getElementById('sliderDots');

function scrollHoeveel() {
    // Op telefoon 1 kaart per keer, op desktop iets meer
    if (!rij) return 350;
    var kaart = rij.querySelector('.project-card');
    if (!kaart) return 350;
    var stijl = window.getComputedStyle(rij);
    var tussenruimte = parseFloat(stijl.columnGap || stijl.gap || '20') || 20;
    return kaart.offsetWidth + tussenruimte;
}

if (rij && prevKnop) {
    prevKnop.onclick = function () {
        rij.scrollBy({ left: -scrollHoeveel(), behavior: 'smooth' });
    };
}
if (rij && nextKnop) {
    nextKnop.onclick = function () {
        rij.scrollBy({ left: scrollHoeveel(), behavior: 'smooth' });
    };
}

// Dots onder de slider (vooral handig op telefoon)
if (rij && sliderDots) {
    var kaarten = Array.prototype.slice.call(rij.querySelectorAll('.project-card'));
    kaarten.forEach(function (kaart, index) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'slider-dot';
        dot.setAttribute('aria-label', 'Ga naar project ' + (index + 1));
        dot.onclick = function () {
            var rijRect = rij.getBoundingClientRect();
            var kaartRect = kaart.getBoundingClientRect();
            var doel = rij.scrollLeft + (kaartRect.left - rijRect.left) - 16;
            rij.scrollTo({ left: doel, behavior: 'smooth' });
        };
        sliderDots.appendChild(dot);
    });

    var dots = Array.prototype.slice.call(sliderDots.querySelectorAll('.slider-dot'));
    function werkDotsBij() {
        var rijRect = rij.getBoundingClientRect();
        var midden = rijRect.left + rijRect.width / 2;
        var actief = 0;
        var kleinsteAfstand = Infinity;
        kaarten.forEach(function (kaart, index) {
            var kaartRect = kaart.getBoundingClientRect();
            var kaartMidden = kaartRect.left + kaartRect.width / 2;
            var afstand = Math.abs(kaartMidden - midden);
            if (afstand < kleinsteAfstand) {
                kleinsteAfstand = afstand;
                actief = index;
            }
        });
        dots.forEach(function (dot, index) {
            dot.classList.toggle('actief', index === actief);
        });
    }
    rij.addEventListener('scroll', werkDotsBij, { passive: true });
    window.addEventListener('resize', werkDotsBij);
    werkDotsBij();
}

// Popup open: achtergrond niet laten scrollen op telefoon
function houdAchtergrondVast() {
    var openPopup = document.querySelector('.project-modal:target');
    document.body.style.overflow = openPopup ? 'hidden' : '';
}
window.addEventListener('hashchange', function () {
    // Als het hamburgermenu open was, eerst sluiten
    if (hoofdmenu && hoofdmenu.classList.contains('open')) sluitMenu();
    houdAchtergrondVast();
});
houdAchtergrondVast();

// Let op: de popups openen zonder JavaScript (via :target in CSS).

// De README is uit de popup gehaald, dus de rest van dit bestand is niet meer nodig.