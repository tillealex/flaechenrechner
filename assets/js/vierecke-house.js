/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const figuren = {
  "quadrat": {
    name: "Quadrat",
    status: "live",
    badge: "Fläche aktiv",
    icon: '<rect x="20" y="10" width="40" height="40"></rect>',
    link: "quadrat.html",
    kurz: [
      "4 gleich lange Seiten",
      "4 rechte Winkel",
      "gegenüberliegende Seiten parallel"
    ],
    details: [
      "Alle vier Seiten sind gleich lang.",
      "Alle vier Winkel sind rechte Winkel.",
      "Gegenüberliegende Seiten sind parallel.",
      "Die Diagonalen sind gleich lang, halbieren sich und stehen senkrecht aufeinander."
    ]
  },
  "raute": {
    name: "Raute",
    status: "info",
    badge: "Eigenschaften",
    icon: '<polygon points="40,6 60,30 40,54 20,30"></polygon>',
    link: "raute.html",
    kurz: [
      "4 gleich lange Seiten",
      "gegenüberliegende Seiten parallel",
      "Winkel nicht unbedingt rechte Winkel"
    ],
    details: [
      "Alle vier Seiten sind gleich lang.",
      "Gegenüberliegende Seiten sind parallel.",
      "Gegenüberliegende Winkel sind gleich groß.",
      "Die Diagonalen stehen senkrecht aufeinander und halbieren sich."
    ]
  },
  "rechteck": {
    name: "Rechteck",
    status: "live",
    badge: "Fläche aktiv",
    icon: '<rect x="12" y="16" width="56" height="28"></rect>',
    link: "rechteck.html",
    kurz: [
      "4 rechte Winkel",
      "gegenüberliegende Seiten gleich lang",
      "gegenüberliegende Seiten parallel"
    ],
    details: [
      "Alle vier Winkel sind rechte Winkel.",
      "Gegenüberliegende Seiten sind gleich lang.",
      "Gegenüberliegende Seiten sind parallel.",
      "Die Diagonalen sind gleich lang und halbieren sich."
    ]
  },
  "drachen": {
    name: "Drachen",
    status: "info",
    badge: "Eigenschaften",
    icon: '<polygon points="40,4 55,24 40,56 25,24"></polygon>',
    link: "drachen.html",
    kurz: [
      "zwei Paare gleich langer Nachbarseiten",
      "eine Symmetrieachse möglich",
      "Diagonalen stehen senkrecht"
    ],
    details: [
      "Je zwei benachbarte Seiten sind gleich lang.",
      "Eine Diagonale kann Symmetrieachse sein.",
      "Die Diagonalen stehen senkrecht aufeinander.",
      "Ein Paar gegenüberliegender Winkel ist gleich groß."
    ]
  },
  "parallelogramm": {
    name: "Parallelogramm",
    status: "live",
    badge: "Fläche aktiv",
    icon: '<polygon points="22,16 58,16 68,44 32,44"></polygon>',
    link: "parallelogramm.html",
    kurz: [
      "gegenüberliegende Seiten parallel",
      "gegenüberliegende Seiten gleich lang",
      "Fläche: A = g · h"
    ],
    details: [
      "Gegenüberliegende Seiten sind parallel.",
      "Gegenüberliegende Seiten sind gleich lang.",
      "Gegenüberliegende Winkel sind gleich groß.",
      "Für die Fläche braucht man eine Grundseite und die zugehörige Höhe."
    ]
  },
  "gleich-trapez": {
    name: "Gleichschenkliges Trapez",
    status: "info",
    badge: "Eigenschaften",
    icon: '<polygon points="28,16 52,16 62,44 18,44"></polygon>',
    link: "gleichschenkliges-trapez.html",
    kurz: [
      "ein Paar paralleler Seiten",
      "Schenkel gleich lang",
      "achsensymmetrisch"
    ],
    details: [
      "Ein Paar gegenüberliegender Seiten ist parallel.",
      "Die beiden nicht parallelen Seiten sind gleich lang.",
      "Die Basiswinkel sind gleich groß.",
      "Die Diagonalen sind gleich lang."
    ]
  },
  "trapez": {
    name: "Trapez",
    status: "info",
    badge: "Eigenschaften",
    icon: '<polygon points="24,18 56,18 64,44 16,44"></polygon>',
    link: "trapez.html",
    kurz: [
      "mindestens ein Paar paralleler Seiten",
      "Grundseiten heißen oft a und c",
      "Höhe steht senkrecht auf den parallelen Seiten"
    ],
    details: [
      "Mindestens ein Paar gegenüberliegender Seiten ist parallel.",
      "Die parallelen Seiten nennt man häufig Grundseiten.",
      "Die Höhe steht senkrecht auf den parallelen Seiten.",
      "Spezialfälle sind zum Beispiel das gleichschenklige Trapez und das Parallelogramm."
    ]
  },
  "allgemein": {
    name: "Allgemeines Viereck",
    status: "info",
    badge: "Eigenschaften",
    icon: '<polygon points="18,18 54,10 64,48 26,42"></polygon>',
    link: "allgemeines-viereck.html",
    kurz: [
      "4 Seiten",
      "4 Ecken",
      "Innenwinkelsumme 360°"
    ],
    details: [
      "Es besitzt vier Seiten und vier Ecken.",
      "Die Summe der Innenwinkel beträgt 360°.",
      "Es müssen keine Seiten gleich lang oder parallel sein.",
      "Spezielle Vierecke entstehen, wenn zusätzliche Bedingungen erfüllt sind."
    ]
  }
};

const uebergaenge = {
  "quadrat-raute": {
    von: "quadrat",
    nach: "raute",
    titel: "Vom Quadrat zur Raute",
    bleibt: [
      "Alle Seiten sind gleich lang.",
      "Gegenüberliegende Seiten bleiben parallel."
    ],
    aendert: [
      "Die rechten Winkel werden gelockert.",
      "Die Figur darf schief werden."
    ],
    merksatz: "Eine Raute ist wie ein schief geschobenes Quadrat: Die Seiten bleiben gleich lang, aber die Winkel müssen nicht mehr rechtwinklig sein."
  },
  "quadrat-rechteck": {
    von: "quadrat",
    nach: "rechteck",
    titel: "Vom Quadrat zum Rechteck",
    bleibt: [
      "Rechte Winkel bleiben erhalten."
    ],
    aendert: [
      "Nur noch gegenüberliegende Seiten sind gleich lang."
    ],
    merksatz: "Beim Rechteck wird die Bedingung gelockert, dass alle vier Seiten gleich lang sein müssen."
  },
  "raute-drachen": {
    von: "raute",
    nach: "drachen",
    titel: "Von der Raute zum Drachen",
    bleibt: [
      "Benachbarte Seiten können paarweise gleich lang sein.",
      "Eine Diagonale kann eine besondere Rolle als Symmetrieachse haben."
    ],
    aendert: [
      "Es müssen nicht mehr alle vier Seiten gleich lang sein.",
      "Gegenüberliegende Seiten müssen nicht mehr parallel sein."
    ],
    merksatz: "Beim Drachen reichen zwei Paare gleich langer Nachbarseiten."
  },
  "raute-parallelogramm": {
    von: "raute",
    nach: "parallelogramm",
    titel: "Von der Raute zum Parallelogramm",
    bleibt: [
      "Gegenüberliegende Seiten bleiben parallel.",
      "Gegenüberliegende Seiten bleiben gleich lang."
    ],
    aendert: [
      "Nicht mehr alle vier Seiten müssen gleich lang sein."
    ],
    merksatz: "Ein Parallelogramm ist allgemeiner als eine Raute: Die Parallelität bleibt, die Gleichheit aller Seiten fällt weg."
  },
  "rechteck-parallelogramm": {
    von: "rechteck",
    nach: "parallelogramm",
    titel: "Vom Rechteck zum Parallelogramm",
    bleibt: [
      "Gegenüberliegende Seiten bleiben parallel.",
      "Gegenüberliegende Seiten bleiben gleich lang."
    ],
    aendert: [
      "Die Winkel müssen nicht mehr rechte Winkel sein.",
      "Das Rechteck darf schief geschoben werden."
    ],
    merksatz: "Ein Parallelogramm ist wie ein schiefes Rechteck."
  },
  "rechteck-gleich-trapez": {
    von: "rechteck",
    nach: "gleich-trapez",
    titel: "Vom Rechteck zum gleichschenkligen Trapez",
    bleibt: [
      "Ein Paar gegenüberliegender Seiten bleibt parallel.",
      "Die Figur bleibt symmetrisch."
    ],
    aendert: [
      "Das zweite Seitenpaar muss nicht mehr parallel sein.",
      "Die Winkel müssen nicht mehr rechte Winkel sein."
    ],
    merksatz: "Beim gleichschenkligen Trapez bleibt nur ein Paar paralleler Seiten übrig, die Schenkel sind gleich lang."
  },
  "parallelogramm-trapez": {
    von: "parallelogramm",
    nach: "trapez",
    titel: "Vom Parallelogramm zum Trapez",
    bleibt: [
      "Ein Paar gegenüberliegender Seiten bleibt parallel."
    ],
    aendert: [
      "Das zweite Seitenpaar muss nicht mehr parallel sein.",
      "Gegenüberliegende Seiten müssen nicht mehr gleich lang sein."
    ],
    merksatz: "Ein Trapez ist allgemeiner: Ein paralleles Seitenpaar genügt."
  },
  "gleich-trapez-trapez": {
    von: "gleich-trapez",
    nach: "trapez",
    titel: "Vom gleichschenkligen Trapez zum Trapez",
    bleibt: [
      "Ein Paar gegenüberliegender Seiten bleibt parallel."
    ],
    aendert: [
      "Die Schenkel müssen nicht mehr gleich lang sein.",
      "Die Achsensymmetrie kann wegfallen."
    ],
    merksatz: "Ein normales Trapez braucht keine gleich langen Schenkel."
  },
  "drachen-allgemein": {
    von: "drachen",
    nach: "allgemein",
    titel: "Vom Drachen zum allgemeinen Viereck",
    bleibt: [
      "Die Figur hat weiterhin vier Seiten und vier Ecken."
    ],
    aendert: [
      "Benachbarte Seiten müssen nicht mehr gleich lang sein.",
      "Eine Symmetrieachse ist nicht mehr nötig."
    ],
    merksatz: "Beim allgemeinen Viereck bleiben nur die Grundmerkmale: vier Seiten und vier Ecken."
  },
  "trapez-allgemein": {
    von: "trapez",
    nach: "allgemein",
    titel: "Vom Trapez zum allgemeinen Viereck",
    bleibt: [
      "Die Figur hat weiterhin vier Seiten und vier Ecken."
    ],
    aendert: [
      "Es muss kein Seitenpaar mehr parallel sein."
    ],
    merksatz: "Beim allgemeinen Viereck gibt es keine zusätzliche Parallelitätsbedingung mehr."
  }
};

const figurReihenfolgeMobil = [
  ["Dach", ["quadrat"]],
  ["2. Etage", ["raute", "rechteck"]],
  ["3. Etage", ["drachen", "parallelogramm", "gleich-trapez"]],
  ["4. Etage", ["trapez"]],
  ["Erdgeschoss", ["allgemein"]]
];

function erstelleFigurButton(figurId) {
  const figur = figuren[figurId];
  const link = document.createElement("a");
  link.className = "figur-button";
  link.href = figur.link || "#";
  link.dataset.figur = figurId;
  link.setAttribute("aria-label", `${figur.name}: zur Flächenberechnung wechseln`);

  link.innerHTML = `
    <div class="figur-kurz">
      <svg class="figur-icon" viewBox="0 0 80 60" aria-hidden="true">${figur.icon}</svg>
      <div class="figur-name">${figur.name}</div>
      <span class="badge ${figur.status}">${figur.badge}</span>
    </div>
    <div class="eigenschaften-in-kachel">
      <strong>Eigenschaften:</strong>
      <ul>${figur.kurz.map(eigenschaft => `<li>${eigenschaft}</li>`).join("")}</ul>
    </div>
  `;

  return link;
}

function baueKnoten() {
  document.querySelectorAll(".knoten[data-figur]").forEach(knoten => {
    const figurId = knoten.dataset.figur;
    knoten.appendChild(erstelleFigurButton(figurId));
  });
}

function baueMobileListe() {
  const liste = document.getElementById("mobileListe");

  figurReihenfolgeMobil.forEach(([titel, figurenIds]) => {
    const gruppe = document.createElement("div");
    gruppe.className = "mobile-gruppe";

    const ueberschrift = document.createElement("h2");
    ueberschrift.textContent = titel;
    gruppe.appendChild(ueberschrift);

    const zeile = document.createElement("div");
    zeile.className = "mobile-zeile";

    figurenIds.forEach(figurId => {
      const umschlag = document.createElement("div");
      umschlag.className = `knoten-mobile ${figurId}`;
      umschlag.dataset.figur = figurId;
      umschlag.appendChild(erstelleFigurButton(figurId));
      zeile.appendChild(umschlag);
    });

    gruppe.appendChild(zeile);
    liste.appendChild(gruppe);
  });
}

function setzeMarkierteFiguren(markierungen = []) {
  document.querySelectorAll(".knoten, .knoten-mobile").forEach(knoten => {
    const istMarkiert = markierungen.includes(knoten.dataset.figur);
    knoten.classList.toggle("markiert", istMarkiert);
  });
}

function setzeAktivenPfeil(uebergangId) {
  document.querySelectorAll(".pfeil-gruppe").forEach(pfeil => {
    pfeil.classList.toggle("aktiv", pfeil.dataset.uebergang === uebergangId);
  });
}

function zeigeUebergang(uebergangId) {
  const uebergang = uebergaenge[uebergangId];
  if (!uebergang) return;

  setzeMarkierteFiguren([uebergang.von, uebergang.nach]);
  setzeAktivenPfeil(uebergangId);

  document.getElementById("uebergangKachel").innerHTML = `
    <h2>${uebergang.titel}</h2>
    <p>${uebergang.merksatz}</p>
    <ul>
      ${uebergang.aendert.map(text => `<li>${text}</li>`).join("")}
      ${uebergang.bleibt.map(text => `<li>${text}</li>`).join("")}
    </ul>
  `;
}

function aktivierePfeile() {
  document.querySelectorAll(".pfeil-gruppe").forEach(pfeil => {
    pfeil.addEventListener("click", () => zeigeUebergang(pfeil.dataset.uebergang));
    pfeil.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        zeigeUebergang(pfeil.dataset.uebergang);
      }
    });
  });
}

baueKnoten();
baueMobileListe();
aktivierePfeile();
