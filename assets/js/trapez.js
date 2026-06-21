/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

(function () {
  const stepTexts = [
    {
      title: "Schritt 1",
      description: "Wir betrachten ein Trapez. Die parallelen Seiten a und c sind markiert: a ist grün, c ist rot."
    },
    {
      title: "Schritt 2",
      description: "Ein zweites, um 180° gedrehtes Trapez wird daneben gelegt. Es ist halbtransparent schwarz dargestellt."
    },
    {
      title: "Schritt 3",
      description: "Die beiden Trapeze bilden zusammen ein Parallelogramm. Seine Grundseite setzt sich aus a + c zusammen."
    },
    {
      title: "Schritt 4",
      description: "Die Höhe h trennt ein rechtwinkliges Dreieck vom Parallelogramm ab. Dieses Dreieck wird schraffiert."
    },
    {
      title: "Schritt 5",
      description: "Das Dreieck wird an der anderen Seite angefügt. Es entsteht ein Rechteck mit dem Flächeninhalt (a + c) · h."
    },
    {
      title: "Schritt 6",
      description: "In dieses Rechteck passen genau zwei gleich große Trapeze. Deshalb ist die Fläche eines Trapezes die Hälfte.\nA = (a + c) · h : 2"
    }
  ];

  function show(id, visible) {
    const element = document.getElementById(id);
    if (element) element.classList.toggle("hidden", !visible);
  }

  function updateAnimation(stepIndex) {
    const step = stepIndex + 1;
    const ids = [
      "trapez-copy",
      "parallelogram-highlight",
      "sum-label",
      "height-line",
      "height-label",
      "cut-triangle",
      "rectangle-highlight",
      "moved-triangle",
      "rectangle-label",
      "two-trapezoids-label"
    ];

    ids.forEach((id) => show(id, false));

    show("trapez-copy", step >= 2);
    show("parallelogram-highlight", step >= 3);
    show("sum-label", step >= 3);
    show("height-line", step >= 4);
    show("height-label", step >= 4);
    show("cut-triangle", step === 4);
    show("rectangle-highlight", step >= 5);
    show("moved-triangle", step >= 5);
    show("rectangle-label", step >= 5);
    show("two-trapezoids-label", step >= 6);
  }

  function calculate(values) {
    return ((values.a + values.c) * values.h) / 2;
  }

  function createResultText(values, area) {
    const sum = values.a + values.c;
    const doubleArea = sum * values.h;
    return `A = (a + c) · h : 2\nA = (${values.a} + ${values.c}) · ${values.h} : 2\nA = ${sum} · ${values.h} : 2\nA = ${doubleArea} : 2\nA = ${area} cm²`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.AreaPageCore.initAreaPage({
      steps: stepTexts,
      inputs: [
        { id: "a", defaultValue: 8 },
        { id: "c", defaultValue: 4 },
        { id: "h", defaultValue: 5 }
      ],
      calculate,
      createResultText,
      onStepChange: updateAnimation
    });
  });
})();
