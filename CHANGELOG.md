# CHANGELOG.md

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Dieses Projekt steht unter der **GNU General Public License v3.0 or later**. Siehe `LICENSE`.

Copyright (C) 2026 **Alexander Tille**.

Dieses Projekt wurde mit Unterstützung von ChatGPT erstellt und weiterentwickelt.

Das Format orientiert sich an einer einfachen, schulprojektfreundlichen Form von „Keep a Changelog".

---

## Unreleased

### Added

- `PROJECT_CONTEXT.md` als Projektgedächtnis für WILFRIED ergänzt.
- `ARCHITECTURE.md` zur Beschreibung der technischen Struktur ergänzt.
- `.gitignore` für lokale System-, Editor- und temporäre Dateien ergänzt.
- Kompakte SPDX-Lizenzheader mit **Alexander Tille** als Copyright-Inhaber in mehrere bestehende HTML- und JavaScript-Dateien eingefügt.
- README.md auf den Projektnamen **Flächenberechnung** und den Rechteinhaber **Alexander Tille** vereinheitlicht.
- `assets/js/area-page-core.js` als gemeinsame Grundlogik für Flächenseiten angelegt.
- `assets/css/vierecke-house.css` für die ausgelagerten Styles des Hauses der Vierecke angelegt.
- `assets/js/vierecke-house.js` für die ausgelagerte Interaktionslogik des Hauses der Vierecke angelegt.
- Flächenseite für die Raute ergänzt.
- `assets/js/raute.js` mit zwei Berechnungswegen für die Raute ergänzt: Diagonalen `A = e · f : 2` und Grundseite/Höhe `A = a · hₐ`.
- `assets/css/area-pages.css` für ergänzende Abstände und Segmente auf einzelnen Flächenseiten ergänzt.

### Changed

- Lizenzhinweise werden künftig als kurzer Dateiheader mit `SPDX-License-Identifier: GPL-3.0-or-later` geführt.
- Dokumentation wurde auf **GNU GPL v3.0 or later** und **Alexander Tille** vereinheitlicht.
- Die Parallelogrammseite nutzt testweise den neuen gemeinsamen Flächenseiten-Kern.
- `assets/js/parallelogramm.js` enthält jetzt nur noch figurspezifische Schritte, SVG-Anpassungen und Berechnungsregeln.
- Die Quadratseite nutzt jetzt ebenfalls den gemeinsamen Flächenseiten-Kern.
- `assets/js/quadrat.js` enthält jetzt nur noch figurspezifische Schritte, SVG-Anpassungen und Berechnungsregeln.
- Die Rechteckseite nutzt jetzt ebenfalls den gemeinsamen Flächenseiten-Kern.
- `assets/js/rechteck.js` enthält jetzt nur noch figurspezifische Schritte, SVG-Anpassungen und Berechnungsregeln.
- `vierecke/index.html` ist jetzt eine schlankere Strukturdatei und lädt CSS und JavaScript des Hauses aus eigenen Dateien.
- `assets/js/area-page-core.js` unterstützt jetzt mehrere Berechnungswege auf einer Flächenseite.
- Die Raute-Kachel im Haus der Vierecke ist jetzt als aktive Flächenseite markiert.
- Die Eigenschaften-Texte auf den Flächenseiten stehen jetzt in eigenen hervorgehobenen Infoboxen unter dem Titel.
- Auf der Raute-Seite ist die obere Infobox in „Eigenschaften der Raute" und „Wahl des Rechenwegs" gegliedert.
- Die Rechenweg-Auswahl der Raute liegt jetzt im eigenen Segment „Wahl des Rechenwegs" innerhalb der Infobox.
- Die Diagonalen-Animation der Raute wurde überarbeitet: Beschriftungen sind versetzt und rot hervorgehoben, innere Dreiecke werden wechselnd schraffiert und die Rechteck-Zwischenräume zeigen die Hälfte-Beziehung.

### Planned

- Weitere Flächenseiten ergänzen.
- Mögliche nächste Figuren: Trapez, Dreieck, Drachenviereck.
- Interaktive Pfeile im Haus der Vierecke ergänzen.
- Perspektivisch zwischen Verstehensmodus und Rechenmodus unterscheiden.
- Größere Dateien bewusst im Rahmen eines Refactorings prüfen:
  - `assets/css/style.css`,
  - `vierecke/index.html`.

---

## 0.1.0 - Projektgrundlage

### Added

- Startseite des Projekts angelegt.
- Bereich „Vierecke" angelegt.
- Haus der Vierecke als visuelle Übersicht erstellt.
- Flächenseite für das Quadrat erstellt.
- Flächenseite für das Rechteck erstellt.
- Flächenseite für das Parallelogramm erstellt.
- Zentrale CSS-Datei unter `assets/css/style.css` eingeführt.
- Eigene JavaScript-Dateien für die Flächenanimationen angelegt:
  - `assets/js/quadrat.js`,
  - `assets/js/rechteck.js`,
  - `assets/js/parallelogramm.js`.
- README.md mit Projektziel, Struktur, Bedienung, Technik und Lizenzhinweis erstellt.
- GNU GPL v3.0 als Lizenz ergänzt.

### Design

- Einheitliches Layout für Flächenberechnungsseiten eingeführt.
- Obere Box „Idee der Berechnung" mit Animation und Schrittbeschreibung verwendet.
- Untere Box mit „Skizze der Fläche" und „Berechnung" verwendet.
- Animation und Erklärung räumlich getrennt, damit die Darstellung ruhiger wirkt.

### Notes

- Der Fokus des Projekts liegt auf dem Verständnis der Flächenformeln.
- Die Rechenfunktion ist ergänzend gedacht und nicht Hauptzweck des Projekts.
