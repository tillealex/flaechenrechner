# Flächenrechner

Ein interaktives Webseiten-Projekt für den Mathematikunterricht.
Die Seiten erklären Flächenberechnungen anschaulich mit Animationen, Skizzen und Eingabefeldern zur Berechnung.

## Ziel des Projekts

Der Flächenrechner soll Schülerinnen und Schülern helfen, Flächenformeln nicht nur auswendig zu lernen, sondern ihre Entstehung zu verstehen.

Die Seiten zeigen daher jeweils:

* eine kurze geometrische Idee der Berechnung,
* eine schrittweise Animation,
* eine Skizze mit den wichtigen Größen,
* ein Eingabefeld zur eigenen Berechnung.

## Aktueller Projektstand

Bisher umgesetzt:

* Startseite
* Bereich „Haus der Vierecke“
* Flächenberechnung Quadrat
* Flächenberechnung Rechteck
* Flächenberechnung Parallelogramm

## Projektstruktur

```text
flaechenrechner/
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

## Gestaltung

Das Projekt nutzt ein helles, ruhiges Unterrichtsdesign.

Wichtige Gestaltungsprinzipien:

* große, gut lesbare Boxen,
* klare Trennung von Erklärung, Animation und Berechnung,
* zurückhaltende Farben,
* große Buttons für Beamer und Touchgeräte,
* möglichst wenig Ablenkung.

## Standardaufbau einer Flächenberechnungsseite

Jede Flächenberechnungsseite folgt demselben Grundaufbau:

1. Kopfbereich mit Titel und kurzer Erklärung
2. Box „Idee der Berechnung“

   * links: Animation
   * rechts: Schrittbeschreibung
   * darunter: Steuerbuttons
3. Box „Skizze und Berechnung“

   * links: Skizze der Fläche
   * rechts: Eingabefelder und Ergebnis

Die globalen Klassen für Animationen liegen in:

```text
assets/css/style.css
```

Wichtige Klassen:

```css
.area-animation-layout
.area-animation-stage
.area-animation-step
```

## Quadrat

Die Quadratseite zeigt die Fläche als Anzahl von Einheitsquadraten.

Animation:

1. Quadrat betrachten
2. Quadrat in Einheitsquadrate einteilen
3. Eine Zeile betrachten
4. Alle Zeilen betrachten
5. Formel herleiten: `A = a · a`

## Rechteck

Die Rechteckseite funktioniert ähnlich wie die Quadratseite.
Der Unterschied: Die Seiten müssen nicht gleich lang sein.

Animation:

1. Rechteck betrachten
2. Rechteck in Einheitsquadrate einteilen
3. Eine Zeile mit 6 Einheitsquadraten betrachten
4. Insgesamt 4 Zeilen betrachten
5. Formel herleiten: `A = a · b`

## Parallelogramm

Die Parallelogrammseite zeigt die Umformung in ein Rechteck.

Animation:

1. Parallelogramm betrachten
2. Höhe einzeichnen
3. Linkes rechtwinkliges Dreieck markieren
4. Dreieck rechts anfügen
5. Rechteck erkennen und Formel herleiten: `A = g · h`

## Bedienung

Das Projekt läuft vollständig lokal im Browser.

Zum Starten:

1. Ordner öffnen
2. `index.html` im Browser öffnen
3. Über die Navigation die gewünschte Fläche auswählen

Es ist kein Server und keine Installation notwendig.

## Technische Hinweise

Verwendete Technologien:

* HTML
* CSS
* JavaScript
* SVG für Zeichnungen und Animationen

Die Berechnungen laufen direkt im Browser.
Die Animationen werden über JavaScript gesteuert, indem SVG-Elemente ein- und ausgeblendet oder verändert werden.

## Entwicklungsprinzipien

Für neue Flächenseiten gilt:

* gemeinsames Layout aus `style.css` verwenden,
* keine lokalen Designentscheidungen unnötig in HTML-Dateien einbauen,
* Animation und Schrittbeschreibung trennen,
* Erklärungstexte möglichst kurz und schülernah halten,
* Formeln mit Multiplikationspunkt schreiben, zum Beispiel `A = a · b`.

## Geplante Erweiterungen

Mögliche nächste Seiten:

* Raute
* Dreieck
* Trapez
* Drachenviereck
* allgemeines Viereck

Mögliche spätere Funktionen:

* interaktive Pfeile im „Haus der Vierecke“,
* Erklärungen zu Übergängen zwischen Vierecktypen,
* Druckansichten für Arbeitsblätter,
* Aufgabenmodus mit zufälligen Werten.

## Lizenz

Dieses Projekt steht unter der GNU General Public License v3.0.

Das bedeutet: Der Quellcode darf verwendet, verändert und weitergegeben werden. 
Wer veränderte Versionen veröffentlicht, muss diese ebenfalls unter den Bedingungen der GPLv3 zugänglich machen.

Weitere Informationen stehen in der Datei `LICENSE`.

## Hinweis zur Erstellung

Teile des Codes und der Dokumentation wurden mit Unterstützung von ChatGPT erstellt und anschließend geprüft, angepasst und in das Projekt integriert.
