# PROJECT_CONTEXT.md

Projektgedächtnis für **Flächenberechnung**.

Dieses Projekt steht unter der **GNU General Public License v3.0**. Siehe `LICENSE`.

Dieses Projekt wurde mit Unterstützung von ChatGPT erstellt und weiterentwickelt.

---

## Projektname

Flächenberechnung

---

## Projektziel

Dieses Projekt ist eine interaktive Lernwebseite zur Flächenberechnung in der Sekundarstufe I.

Im Mittelpunkt steht nicht das schnelle Ausrechnen von Flächeninhalten, sondern das anschauliche Verstehen der Flächenformeln. Berechnungen sind ergänzend vorhanden, aber didaktisch nachgeordnet: Das Rechnen ist die Kirsche auf der Sahne, nicht der Hauptzweck.

Schülerinnen und Schüler sollen erkennen, warum eine Formel funktioniert. Animationen, Skizzen und ruhige Schrittbeschreibungen sollen dabei helfen, geometrische Zusammenhänge nachvollziehbar zu machen.

---

## Zielgruppe

Das Projekt richtet sich an:

- Schülerinnen und Schüler der Sekundarstufe I,
- Lehrkräfte zur Demonstration am Beamer oder interaktiven Whiteboard,
- perspektivisch auch an Lernende zum selbstständigen Üben.

Langfristig könnte es unterschiedliche Nutzungsmodi geben:

- **Verstehensmodus:** Animationen und Erklärungen stehen im Mittelpunkt.
- **Rechenmodus:** Schülerinnen und Schüler rechnen selbst; der automatische Rechner kann eingeschränkt oder ausgeblendet werden.

Der Rechenmodus ist aktuell Zukunftsmusik und noch nicht umgesetzt.

---

## Nutzungssituation

Aktuell soll die Webseite lokal im Browser funktionieren, ohne Server und ohne Build-Prozess.

Später ist eine Veröffentlichung auf einem Server oder über GitHub Pages denkbar.

Wichtig ist deshalb:

- relative Pfade verwenden,
- keine unnötigen externen Abhängigkeiten einbauen,
- die Seite so strukturieren, dass sie lokal und später online zuverlässig läuft.

---

## Aktueller Stand

Aktuell vorhanden:

- Startseite des Projekts,
- Bereich „Vierecke",
- Haus der Vierecke als visuelle Übersicht,
- Flächenseite für das Quadrat,
- Flächenseite für das Rechteck,
- Flächenseite für das Parallelogramm,
- zentrale CSS-Datei unter `assets/css/style.css`,
- eigene JavaScript-Dateien für die einzelnen Flächenanimationen,
- README.md,
- LICENSE mit GNU GPL v3.0.

Noch ergänzt werden im aktuellen Struktur-Schritt:

- `PROJECT_CONTEXT.md`,
- `CHANGELOG.md`,
- `ARCHITECTURE.md`,
- `.gitignore`.

---

## Technische Struktur

Aktuelle Grundstruktur:

```text
flaechenrechner/
├── README.md
├── LICENSE
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

Geplante Strukturdateien:

```text
├── PROJECT_CONTEXT.md
├── CHANGELOG.md
├── ARCHITECTURE.md
└── .gitignore
```

---

## Technischer Vorschlag

Für den aktuellen Stand soll das Projekt bewusst einfach bleiben:

- **kein Framework**,
- **kein Build-System**,
- **kein npm-Zwang**,
- HTML für Struktur,
- CSS für Gestaltung,
- JavaScript für Interaktion und Animation.

Begründung:

Das Projekt ist ein Unterrichtswerkzeug. Es soll leicht zu verstehen, lokal zu öffnen und später unkompliziert zu veröffentlichen sein.

Frameworks wie React, Vue oder Svelte wären erst sinnvoll, wenn deutlich mehr Zustände, wiederverwendbare Komponenten oder komplexe Interaktionen entstehen. Für den aktuellen Stand wäre das eher zusätzliche Hürde als echter Nutzen.

Praktischer Entwicklungsweg:

1. Zunächst weiter mit einfachem HTML/CSS/JS arbeiten.
2. Wiederkehrende Layouts konsequent in CSS bündeln.
3. Wiederkehrende Animationsteile später behutsam in gemeinsame JS-Hilfsfunktionen auslagern.
4. Erst bei echter Notwendigkeit über Module oder ein Build-System nachdenken.

---

## Wichtige Designentscheidungen

- Die Seite soll ruhig, klar und unterrichtstauglich wirken.
- Animation und Erklärung werden getrennt angezeigt.
- Die Box „Idee der Berechnung" steht oben.
- In dieser Box nimmt die Animation etwa zwei Drittel der Breite ein.
- Die Schrittbeschreibung steht rechts und nimmt etwa ein Drittel der Breite ein.
- Die Steuerbuttons stehen unter Animation und Erklärung.
- Darunter folgt eine geteilte Box mit „Skizze der Fläche" und „Berechnung".
- Beide unteren Teilboxen sollen gleich groß wirken.
- Globale Layoutentscheidungen gehören in die zentrale CSS-Datei.
- Fachtexte sollen für die Sekundarstufe I verständlich bleiben.
- Begriffe und Formeln sollen fachlich korrekt, aber nicht unnötig kompliziert sein.

---

## Fachliche und didaktische Entscheidungen

- Das Verständnis der Flächenformeln steht im Mittelpunkt.
- Formeln sollen aus Zerlegen, Verschieben, Ergänzen oder Zählen entstehen.
- Berechnungen sollen sichtbar, aber nicht dominierend sein.
- Schülerinnen und Schüler sollen geometrische Ideen wiedererkennen, nicht nur Werte einsetzen.
- Die Sprache soll für die Sekundarstufe I passen.
- Die Notation soll schulnah bleiben, zum Beispiel mit Multiplikationspunkt: `A = a · b`.

---

## Offene Aufgaben

Struktur und Dokumentation:

- CHANGELOG pflegen.
- ARCHITECTURE aktuell halten.
- Prüfen, ob jede Datei einen passenden Lizenzhinweis oder mindestens eine klare Projektzuordnung enthält.
- Bei größeren Änderungen Dokumentation aktualisieren.

Fachliche Erweiterungen:

- Weitere Flächenseiten ergänzen.
- Geplante Figuren: Raute, Trapez, Dreieck, Drachenviereck.
- Reihenfolge der nächsten fachlichen Erweiterung wird später entschieden.

Haus der Vierecke:

- Pfeile zwischen Vierecktypen interaktiv machen.
- Beim Anklicken oder Antippen eines Pfeils erklären, welche Bedingung gelockert oder ergänzt wird.
- Beispiel: Vom Quadrat zum Rechteck bleibt der rechte Winkel erhalten, aber die Bedingung „alle Seiten gleich lang" wird gelockert.

Technik:

- Lokales CSS und JavaScript aus `vierecke/index.html` später prüfen.
- Bei wachsender Komplexität CSS und JS des Hauses der Vierecke auslagern.
- Wiederkehrende Animationslogik später eventuell vereinheitlichen.

---

## Bekannte Probleme und Beobachtungen

- Das Haus der Vierecke enthält aktuell noch stärker gebündelte Logik in einer HTML-Datei.
- Die Flächenseiten sind bereits sauberer getrennt: HTML-Seite, zentrale CSS-Datei, eigene JS-Datei.
- Lizenzhinweise in den einzelnen Dateien sollten noch systematisch überprüft werden.
- Der spätere Schüler-Modus ohne automatischen Rechner ist noch nicht geplant oder umgesetzt.

---

## Arbeitsregeln für WILFRIED

- Projektstand im Repository ist die Quelle der Wahrheit.
- Bei Unsicherheit zuerst aktuelle Dateien prüfen.
- Kleine Änderungen: kurze Patches mit 1 bis 2 klaren Änderungsstellen.
- Größere Änderungen: vollständige Dateien ausgeben oder direkt auf einem eigenen Branch umsetzen.
- Commit-Messages auf Englisch formulieren.
- Erklärungen zu Git und Code auf Deutsch geben.
- Vor größeren Umbauten eigenen Branch oder Sicherungscommit empfehlen.
- Keine unnötigen Frameworks oder Build-Tools einführen.
- HTML, CSS und JavaScript möglichst klar getrennt halten.
- Nach größeren Änderungen prüfen, ob README, PROJECT_CONTEXT, CHANGELOG oder ARCHITECTURE aktualisiert werden müssen.

---

## Git-Arbeitsweise

Standard für größere Änderungen:

1. aktuellen Stand prüfen,
2. eigenen Branch anlegen,
3. Änderungen dort umsetzen,
4. kurz testen,
5. Pull Request oder Merge vorbereiten,
6. Dokumentation aktualisieren,
7. in `main` mergen.

Commit-Messages sollen auf Englisch formuliert werden, zum Beispiel:

```text
docs: add project context and architecture notes
feat: add rhombus area page
refactor: extract quadrilateral house scripts
fix: correct rectangle animation spacing
```

---

## Letzter sinnvoller Git-Stand

Branch für diese Strukturarbeit:

```text
docs/add-project-structure-files
```

Empfohlene Commit-Message für diesen Schritt:

```text
docs: add project structure files
```

---

## Nächster empfohlener Schritt

Zuerst die Strukturdateien vollständig ergänzen:

- `PROJECT_CONTEXT.md`,
- `CHANGELOG.md`,
- `ARCHITECTURE.md`,
- `.gitignore`.

Danach sollte ein kleiner Lizenz- und Strukturcheck folgen:

- Welche Dateien haben bereits einen Lizenzhinweis?
- Wo ist ein kurzer Header sinnvoll?
- Welche Inhalte gehören langfristig aus HTML-Dateien in CSS oder JavaScript ausgelagert?
