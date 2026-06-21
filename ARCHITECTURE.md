# ARCHITECTURE.md

Technische Architektur des Projekts **Flächenberechnung**.

Dieses Projekt steht unter der **GNU General Public License v3.0 or later**. Siehe `LICENSE`.

Copyright (C) 2026 **Alexander Tille**.

Dieses Projekt wurde mit Unterstützung von ChatGPT erstellt und weiterentwickelt.

---

## 1. Grundidee der Architektur

Das Projekt ist eine lokal lauffähige HTML/CSS/JavaScript-Webseite für den Mathematikunterricht.

Die Architektur soll bewusst einfach bleiben:

- kein Framework,
- kein Build-System,
- keine zwingende Serverumgebung,
- statische HTML-Seiten,
- zentrale CSS-Datei,
- getrennte JavaScript-Dateien für Animationen und Interaktionen.

Diese Entscheidung passt zum Unterrichtseinsatz, weil das Projekt leicht geöffnet, verstanden, verändert und später veröffentlicht werden kann.

---

## 2. Aktuelle Ordnerstruktur

```text
flaechenrechner/
├── README.md
├── LICENSE
├── PROJECT_CONTEXT.md
├── CHANGELOG.md
├── ARCHITECTURE.md
├── .gitignore
├── index.html
├── vierecke/
│   ├── index.html
│   ├── quadrat.html
│   ├── rechteck.html
│   └── parallelogramm.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── quadrat.js
    │   ├── rechteck.js
    │   └── parallelogramm.js
    └── img/
```

---

## 3. Rollen der zentralen Dateien

### `index.html`

Die Startseite des Gesamtprojekts.

Aufgabe:

- Projekt vorstellen,
- zu den Themenbereichen führen,
- aktuell den Bereich „Vierecke" als aktiven Einstieg anbieten,
- weitere Bereiche als spätere Erweiterungen vorbereiten.

---

### `vierecke/index.html`

Übersichtsseite für das Haus der Vierecke.

Aufgabe:

- Vierecktypen visuell als Haus darstellen,
- Eigenschaften der Vierecke zeigen,
- auf die einzelnen Flächenseiten verlinken,
- später interaktive Pfeilerklärungen aufnehmen.

Aktueller Hinweis:

Diese Datei enthält noch lokales CSS und lokales JavaScript. Das ist für den Prototypen akzeptabel, sollte aber bei weiterer Entwicklung geprüft werden.

Mögliche spätere Zielstruktur:

```text
assets/css/vierecke.css
assets/js/vierecke.js
```

oder Integration passender wiederverwendbarer Teile in:

```text
assets/css/style.css
```

---

### `vierecke/quadrat.html`, `vierecke/rechteck.html`, `vierecke/parallelogramm.html`

Einzelseiten für die Flächenberechnung.

Aufgabe:

- geometrische Idee der Formel erklären,
- Animation anzeigen,
- Schrittbeschreibung zeigen,
- Skizze der Fläche zeigen,
- Berechnung ermöglichen.

Die Seiten folgen einem gemeinsamen didaktischen Aufbau.

---

### `assets/css/style.css`

Zentrale Gestaltung des Projekts.

Aufgabe:

- globale Farben, Abstände und Grundgestaltung definieren,
- Layout der Flächenseiten steuern,
- Karten, Buttons, Boxen und SVG-Elemente gestalten,
- responsive Regeln und Druckregeln bündeln.

Regel:

Wiederkehrende Gestaltung gehört möglichst hierher und nicht mehrfach direkt in einzelne HTML-Dateien.

---

### `assets/js/*.js`

JavaScript-Dateien für einzelne Flächenanimationen.

Aufgabe:

- Animationsschritte verwalten,
- SVG-Darstellung aktualisieren,
- Buttons steuern,
- Berechnungen durchführen,
- Ergebnistext anzeigen.

Aktueller Zustand:

- `quadrat.js` steuert die Quadratseite,
- `rechteck.js` steuert die Rechteckseite,
- `parallelogramm.js` steuert die Parallelogrammseite.

---

## 4. Standardaufbau einer Flächenseite

Eine Flächenseite soll langfristig nach diesem Muster aufgebaut sein:

```text
Kopfbereich
└── Titel, kurze Erklärung, Navigation

Box: Idee der Berechnung
├── links: Animation / SVG
├── rechts: Schrittbeschreibung
└── unten: Steuerbuttons

Box: Skizze und Berechnung
├── links: Skizze der Fläche
└── rechts: Berechnung / Eingaben / Ergebnis
```

Didaktische Absicht:

- Die Idee der Berechnung steht vor der Rechnung.
- Bewegung und Text sind getrennt, damit die Seite ruhig bleibt.
- Die Berechnung ergänzt die Herleitung, ersetzt sie aber nicht.

---

## 5. JavaScript-Struktur der Flächenanimationen

Die aktuellen Animationsdateien folgen ungefähr diesem Muster:

```text
steps        → Liste der Erklärungsschritte
currentStep  → aktueller Schritt
updateAnimation() → aktualisiert Text und SVG
nextStep()   → geht einen Schritt weiter
prevStep()   → geht einen Schritt zurück
calculateArea() → berechnet den Flächeninhalt
```

Diese Struktur ist verständlich und für die bisherigen Seiten ausreichend.

Möglicher späterer Refactoring-Schritt:

- gemeinsame Hilfsfunktionen für Schrittsteuerung auslagern,
- wiederkehrende Buttonlogik vereinheitlichen,
- wiederkehrende SVG-Hilfen sammeln,
- Berechnungslogik und Animationslogik klarer trennen.

Noch kein akuter Umbau nötig, aber im Blick behalten.

---

## 6. CSS-Struktur

Die zentrale CSS-Datei sollte langfristig grob diese Bereiche enthalten:

```text
1. Grundvariablen und Farben
2. Reset / Grundlayout
3. Navigation und Kopfbereiche
4. Karten und Übersichtsseiten
5. Standardlayout der Flächenseiten
6. Animationen und SVG-Stile
7. Eingaben, Buttons und Berechnung
8. Responsive Regeln
9. Druckansicht
```

Wichtig:

Wenn neue Seiten entstehen, sollen sie möglichst vorhandene Klassen wiederverwenden.

---

## 7. Technische Leitentscheidung: kein Framework vorerst

Aktueller Vorschlag:

Das Projekt bleibt vorerst bei einfachem HTML, CSS und JavaScript.

Begründung:

- lokal sofort lauffähig,
- niedrige Einstiegshürde,
- gut für Unterrichtsprojekte,
- keine Abhängigkeit von Build-Tools,
- einfache Veröffentlichung auf GitHub Pages oder einem Server möglich.

Ein Framework wäre erst dann sinnvoll, wenn:

- sehr viele Flächenseiten entstehen,
- gemeinsame Komponenten schwer wartbar werden,
- Zustände komplex werden,
- ein echter App-Charakter entsteht.

Bis dahin gilt:

> Lieber sauber strukturiertes Vanilla HTML/CSS/JS als ein unnötig schweres Framework.

---

## 8. Veröffentlichungsfähigkeit

Aktuell soll das Projekt lokal laufen.

Damit eine spätere Veröffentlichung leicht möglich bleibt:

- relative Pfade nutzen,
- keine lokalen absoluten Pfade verwenden,
- keine unnötigen externen Dienste voraussetzen,
- Dateinamen klein, klar und möglichst ohne Sonderzeichen halten,
- zentrale Einstiegsseite `index.html` beibehalten.

Mögliche spätere Veröffentlichungswege:

- GitHub Pages,
- eigener Webserver,
- Schulserver,
- lokal bereitgestellter Ordner im Unterricht.

---

## 9. Lizenz und Dateiköpfe

Das Projekt steht unter der GNU GPL v3.0 or later.

Der festgelegte Rechteinhaber ist:

```text
Alexander Tille
```

Für Quellcodedateien soll nach Möglichkeit ein kompakter SPDX-Header verwendet werden.

Für HTML-Dateien:

```html
<!--
  SPDX-License-Identifier: GPL-3.0-or-later
  Copyright (C) 2026 Alexander Tille
  This file is part of Flächenberechnung.
  Created and developed with support from ChatGPT.
-->
```

Für CSS- und JavaScript-Dateien:

```css
/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */
```

Wichtig:

Die vollständige Lizenz steht in `LICENSE`. Der Dateiheader soll nur kurz auf die Lizenz und den Rechteinhaber verweisen.

---

## 10. Refactoring-Kandidaten

Aktuell noch nicht dringend, aber perspektivisch sinnvoll:

### Haus der Vierecke

`vierecke/index.html` enthält aktuell Struktur, Gestaltung und Interaktion in einer Datei.

Möglicher späterer Umbau:

```text
vierecke/index.html
assets/css/vierecke.css
assets/js/vierecke.js
```

### Animationslogik

Die Flächenseiten haben ähnliche Steuerlogik.

Möglicher späterer Umbau:

```text
assets/js/core/stepController.js
assets/js/features/quadrat.js
assets/js/features/rechteck.js
assets/js/features/parallelogramm.js
```

Dieser Umbau soll erst erfolgen, wenn der Nutzen größer ist als die zusätzliche Struktur.

---

## 11. Arbeitsweise bei Änderungen

Kleine Änderungen:

- 1 bis 2 konkrete Änderungsstellen nennen,
- kurzen Patch liefern,
- keine komplette Datei ausgeben, wenn es nicht nötig ist.

Größere Änderungen:

- betroffene Dateien nennen,
- vollständige Datei oder klaren strukturierten Patch liefern,
- kurze Testhinweise ergänzen,
- Dokumentationsdateien prüfen,
- Commit-Message vorschlagen.

---

## 12. Nächste Architektur-Schritte

Empfohlene Reihenfolge:

1. Strukturdateien in `main` mergen.
2. Lokal testen, ob Startseite und Viereckseiten weiterhin korrekt laden.
3. Danach fachlich oder strukturell weiterarbeiten.
4. Bei weiterer Arbeit am Haus der Vierecke CSS/JS-Auslagerung prüfen.
5. Größere Quellcodedateien wie `vierecke/index.html` nicht halbautomatisch ändern, sondern bei Gelegenheit bewusst refaktorieren.
