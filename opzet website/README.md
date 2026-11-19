# Website Praktijk Marieke Swinkels

Een eenvoudige, statische website (alleen HTML, CSS en een beetje JavaScript). Er is geen build-stap en geen CMS: je opent een bestand, past de tekst aan, en klaar.

## Mappenstructuur

```
marieke-swinkels-website/
├── index.html                  Home
├── behandeling.html            Werkwijze + EMDR, ACT, EFT
├── wat-is-psychotherapie.html  Uitleg (opzet zoals bij Budde)
├── over-mij.html               Persoonlijke introductie met foto
├── praktisch.html              Aanmelden, wachttijd, kosten, privacy, klachten
├── contact.html                Gegevens + contactformulier
├── assets/
│   ├── css/style.css           Alle opmaak. Kleuren staan bovenaan in :root
│   ├── js/main.js              Mobiel menu + jaartal
│   ├── img/
│   │   ├── logo.svg            Logo (neemt de tekstkleur over)
│   │   ├── favicon.svg         Tabblad-icoon
│   │   └── fotos/              Hier komen de foto's (zie fotos/LEESMIJ.md)
│   └── fonts/                  Voor een lokaal gehost webfont (optioneel)
└── docs/
    └── ontwerpkeuzes.md        Wat we wel/niet mooi vinden en hoe dat is vertaald
```

## Aanpassen

- **Tekst:** alles tussen `[vierkante haken]` is nog invulwerk.
- **Kleuren:** wijzig de variabelen bovenaan in `assets/css/style.css`.
- **Foto's:** zet ze in `assets/img/fotos/` en vervang in de HTML een
  `<div class="foto-placeholder">…</div>` door bijvoorbeeld
  `<img src="assets/img/fotos/marieke-portret.jpg" alt="Portret van Marieke Swinkels">`.
- **Menu, header en footer** staan in elke pagina. Pas je iets aan, doe dat dan in alle zes de bestanden (zoek-en-vervang in je editor werkt het snelst).

## Online zetten via GitHub Pages

1. Maak op GitHub een nieuwe repository, bijvoorbeeld `marieke-swinkels-website`.
2. Upload de inhoud van deze map (via *Add file → Upload files*, of met `git push`).
3. Ga naar **Settings → Pages**, kies *Deploy from a branch*, branch `main`, map `/ (root)`.
4. Na een minuut staat de site op `https://<gebruikersnaam>.github.io/marieke-swinkels-website/`.
5. Eigen domein: vul het in onder Settings → Pages → *Custom domain* en zet bij je domeinregistrar een CNAME-record naar `<gebruikersnaam>.github.io`.

## Contactformulier

GitHub Pages kan zelf geen formulieren versturen. Koppel het formulier in `contact.html` aan een dienst zoals Formspree, Basin of Netlify Forms door het `action`-attribuut aan te passen. Let op de AVG: kies bij voorkeur een Europese dienst en vraag in het formulier geen medische gegevens.

## Lettertype (optioneel)

De site gebruikt nu systeemlettertypes: snel en zonder privacyzorgen. Wil je een webfont, download het dan (bijv. via google-webfonts-helper), zet de `.woff2`-bestanden in `assets/fonts/` en voeg een `@font-face` toe in `style.css`. Laad fonts niet rechtstreeks van Google, want dan stuur je IP-adressen van bezoekers door.
