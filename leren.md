# Leerlijst: HTML en CSS van mijn site

## HTML

### Basis
- `<!DOCTYPE html>` = dit is een html pagina
- `<html lang="nl">` = de hele pagina, taal is nederlands
- `<head>` = info over de pagina, je ziet het niet
- `<meta charset="UTF-8">` = tekens zoals ✕ werken goed
- `<meta name="viewport">` = past goed op een telefoon
- `<title>` = tekst in het tabblad
- `<link rel="stylesheet">` = haalt de css erbij
- `<script src="">` = haalt het javascript erbij
- `<body>` = alles wat je ziet
- `<!-- tekst -->` = opmerking, de browser negeert het

### Vakken
- `<header>` = bovenbalk
- `<nav>` = menu
- `<main>` = hoofdstuk van de pagina
- `<section>` = los stuk van de pagina
- `<div>` = vak om dingen bij elkaar te zetten
- `<span>` = stukje tekst met een eigen stijl (bv. gekleurd woord)
- `<figure>` = foto met tekst eronder
- `<figcaption>` = die tekst onder de foto

### Tekst
- `<h1>` = grootste kop (maar 1 per pagina)
- `<h2>`, `<h3>`, `<h4>` = kleinere koppen
- `<p>` = gewone tekst
- `<b>` = dikgedrukt
- `<ul>` = lijst met puntjes
- `<li>` = 1 puntje in de lijst
- `&lt;` en `&gt;` = de tekens < en >

### Links, plaatjes, knoppen
- `<a href="">` = link
- `href="#home"` = spring naar het stuk met id home
- `target="_blank"` = opent in nieuw tabblad
- `<img src="" alt="">` = plaatje (alt = tekst als je het niet ziet)
- `<button>` = knop
- `onclick="naarLinks()"` = doet een javascript functie als je klikt
- `<iframe>` = andere pagina in mijn pagina
- `<input type="checkbox">` = vinkje
- `<label for="">` = klik erop en het vinkje met die id gaat aan of uit

### Namen geven
- `class="knop"` = naam voor css, mag je vaak gebruiken
- `id="home"` = unieke naam, ook om naartoe te springen

---

## CSS

### Zo werkt het
```
selector {
    eigenschap: waarde;
}
```

### Selectors (welk ding pak ik)
| Selector | Pakt |
|---|---|
| `h1` | alle h1 |
| `.knop` | alles met class knop |
| `#menu-knop` | het ding met id menu-knop |
| `nav a` | alle a in nav |
| `.services > p` | alleen de p die er direct in zit |
| `a:hover` | als je met de muis op de link staat |
| `:checked` | als het vinkje aan staat |
| `:target` | het ding waar de link naar wijst (de popup) |
| `::before` / `::after` | nep-ding voor of na iets |
| `*` | alles |
| `a, b` | a en b allebei |
| `~` | alles erna |
| `+` | het ding direct erna |

### Kleuren
- `color` = kleur van de tekst
- `background-color` = achtergrondkleur
- `#0b1822` = kleurcode
- `rgba(0,0,0,0.5)` = kleur met doorzichtigheid
- `opacity` = doorzichtig (0 = weg, 1 = normaal)

### Tekst
- `font-size` = grootte
- `font-weight: bold` = dik
- `font-family` = lettertype
- `text-align` = links, midden of rechts
- `line-height` = ruimte tussen regels
- `text-decoration: none` = geen streep onder link
- `text-transform: uppercase` = hoofdletters
- `letter-spacing` = ruimte tussen letters

### Grootte en ruimte
- `width` = breedte
- `height` = hoogte
- `max-width` = niet breder dan dit
- `min-height` = minstens zo hoog
- `padding` = ruimte binnen het vak
- `margin` = ruimte buiten het vak
- `border` = rand
- `border-radius` = ronde hoeken (50% = cirkel)
- `box-shadow` = schaduw
- `box-sizing: border-box` = rand en padding tellen mee in de breedte

### Eenheden
- `px` = pixels
- `%` = procent van de ouder
- `vw` = procent van de schermbreedte
- `vh` = procent van de schermhoogte
- `clamp(klein, mee, groot)` = grootte die meegroeit met het scherm

### Naast elkaar zetten (flexbox)
- `display: flex` = dingen naast elkaar
- `flex-direction: column` = onder elkaar
- `justify-content` = uitlijnen van links naar rechts (center, space-between)
- `align-items` = uitlijnen van boven naar onder
- `gap` = ruimte tussen de dingen
- `flex-wrap: wrap` = naar de volgende regel als het vol is
- `flex: 1` = vult de ruimte
- `order` = volgorde veranderen

### Laten zien of verstoppen
- `display: none` = weg
- `display: block` = eigen regel
- `display: inline-block` = in de regel, met eigen breedte en hoogte
- `visibility: hidden` = onzichtbaar, maar nog wel op de plek
- `overflow: hidden` = wat buiten het vak valt wordt afgeknipt
- `overflow-x: auto` = zijwaarts scrollen
- `overflow-y: auto` = naar beneden scrollen

### Plek bepalen
- `position: fixed` = blijft vast op het scherm
- `position: absolute` = vaste plek in de ouder
- `position: relative` = de ouder voor absolute dingen
- `top`, `left`, `right`, `bottom` = afstand
- `z-index` = wat er boven ligt (hoger = bovenop)

### Plaatjes
- `object-fit: cover` = plaatje vult het vak
- `object-fit: contain` = hele plaatje blijft zichtbaar
- `aspect-ratio: 1 / 1` = altijd vierkant

### Bewegen
- `transition: 0.3s` = verandering gaat langzaam
- `transform: translateY(-10px)` = omhoog schuiven
- `transform: scale(1.05)` = groter maken
- `transform: rotate(2deg)` = draaien
- `@keyframes naam { }` = animatie maken
- `animation: naam 2s infinite` = animatie afspelen
- `cursor: pointer` = muis wordt een handje
- `scroll-behavior: smooth` = zacht scrollen
- `scroll-snap-type` = kaarten klikken vast

### Speciaal
- `content: ""` = tekst of teken in een ::before of ::after
- `mask-image` = rand van iets laten vervagen
- `!important` = deze regel wint altijd
- `@media (max-width: 1024px) { }` = geldt alleen op kleine schermen
- `::-webkit-scrollbar` = kleur van de scrollbalk (Chrome en Edge)

---

## Hoe het bij elkaar werkt

### Menu op de telefoon (zonder javascript)
1. Het vinkje (`#menu-knop`) is onzichtbaar
2. Je klikt op het label (`.hamburger`), dus het vinkje gaat aan
3. `#menu-knop:checked ~ nav` laat het menu zien

### Popup (zonder javascript)
1. De link `href="#projectModal"` wijst naar de popup
2. Daardoor wordt de popup de `:target`
3. `.project-modal:target` zet opacity op 1, dus je ziet hem
4. De link `href="#projects"` wijst weg, dus hij gaat weer dicht

### Balkjes
- `.balk` = lege balk
- `.vulling` = gekleurd stuk erin
- `width: 88%` = hoe vol hij is

### Kaart met hover
- `.project-card:hover .project-overlay` = als je op de kaart staat, verandert de overlay erin
