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
    status: "live",
    badge: "Fläche aktiv",
    icon: '<polygon points="40,6 60,30 40,54 20,30"></polygon>',
    link: "raute.html",
    kurz: [
      "4 gleich lange Seiten",
      "Fläche über Diagonalen oder Höhe",
      "Diagonalen stehen senkrecht"
    ],
    details: [
      "Alle vier Seiten sind gleich lang.",
      "Gegenüberliegende Seiten sind parallel.",
      "Gegenüberliegende Winkel sind gleich groß.",
      "Die Fläche kann mit A = e · f : 2 oder mit A = a · hₐ berechnet werden."
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
    status: "live",
    badge: "Fläche aktiv",
    icon: '<polygon points="40,4 55,24 40,56 25,24"></polygon>',
    link: "drachen.html",
    kurz: [
      "zwei Paare gleich langer Nachbarseiten",
      "Diagonalen e und f",
      "Fläche: A = e · f : 2"
    ],
    details: [
      "Je zwei benachbarte Seiten sind gleich lang.",
      "Eine Diagonale kann Symmetrieachse sein.",
      "Die Diagonalen stehen senkrecht aufeinander.",
      "Die Fläche berechnet man mit A = e · f : 2."
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
    status: "live",
    badge: "Fläche aktiv",
    icon: '<polygon points="24,18 56,18 64,44 16,44"></polygon>',
    link: "trapez.html",
    kurz: [
      "mindestens ein Paar paralleler Seiten",
      "Grundseiten heißen oft a und c",
      "Fläche: A = (a + c) · h : 2"
    ],
    details: [
      "Mindestens ein Paar gegenüberliegender Seiten ist parallel.",
      "Die parallelen Seiten nennt man häufig Grundseiten.",
      "Die Höhe steht senkrecht auf den parallelen Seiten.",
      "Die Fläche berechnet man mit A = (a + c) · h : 2."
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
    merksatz: "Beim Parallelogramm wird die Bedingung gelockert, dass alle Winkel rechte Winkel sein müssen."
  }
};

function zeigeFigur(figurKey) {
  const figur = figuren[figurKey];
  if (!figur) return;

  const title = document.getElementById("infoTitle");
  const body = document.getElementById("infoBody");
  const link = document.getElementById("infoLink");

  title.textContent = figur.name;
  body.innerHTML = `
    <ul>
      ${figur.details.map(detail => `<li>${detail}</li>`).join("")}
    </ul>
  `;
  link.href = figur.link;
  link.textContent = figur.status === "live" ? `Zur Fläche: ${figur.name}` : `Mehr zu: ${figur.name}`;
}

function zeigeUebergang(uebergangKey) {
  const u = uebergaenge[uebergangKey];
  if (!u) return;

  const title = document.getElementById("infoTitle");
  const body = document.getElementById("infoBody");
  const link = document.getElementById("infoLink");

  title.textContent = u.titel;
  body.innerHTML = `
    <h3>Was bleibt?</h3>
    <ul>${u.bleibt.map(text => `<li>${text}</li>`).join("")}</ul>
    <h3>Was ändert sich?</h3>
    <ul>${u.aendert.map(text => `<li>${text}</li>`).join("")}</ul>
    <p><strong>Merksatz:</strong> ${u.merksatz}</p>
  `;
  link.href = figuren[u.nach].link;
  link.textContent = `Weiter zu: ${figuren[u.nach].name}`;
}

function initialisiereHaus() {
  document.querySelectorAll(".knoten[data-figur]").forEach(knoten => {
    const key = knoten.dataset.figur;
    const figur = figuren[key];
    if (!figur) return;

    const badge = document.createElement("span");
    badge.className = `badge ${figur.status === "live" ? "live" : "info"}`;
    badge.textContent = figur.badge;

    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 80 64");
    icon.classList.add("knoten-icon");
    icon.innerHTML = figur.icon;

    const name = document.createElement("strong");
    name.textContent = figur.name;

    const kurz = document.createElement("ul");
    figur.kurz.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      kurz.appendChild(li);
    });

    knoten.appendChild(badge);
    knoten.appendChild(icon);
    knoten.appendChild(name);
    knoten.appendChild(kurz);

    knoten.addEventListener("click", () => {
      if (figur.status === "live") {
        window.location.href = figur.link;
      } else {
        zeigeFigur(key);
      }
    });

    knoten.addEventListener("mouseenter", () => zeigeFigur(key));
  });

  document.querySelectorAll(".haus-pfeil[data-uebergang]").forEach(pfeil => {
    const key = pfeil.dataset.uebergang;
    pfeil.addEventListener("click", () => zeigeUebergang(key));
    pfeil.addEventListener("mouseenter", () => zeigeUebergang(key));
  });

  zeigeFigur("quadrat");
}

initialisiereHaus();
