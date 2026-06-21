/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const trapezSteps = [
  {
    title: "Schritt 1",
    description: "Wir betrachten ein Trapez. Die parallelen Seiten a und c sind markiert: a ist grün, c ist rot.",
    showCopy: false,
    showParallelogram: false,
    showHeight: false,
    showCutTriangle: false,
    showRectangle: false,
    showMovedTriangle: false,
    showDoubleInfo: false
  },
  {
    title: "Schritt 2",
    description: "Ein zweites, um 180° gedrehtes Trapez wird daneben gelegt. Es ist halbtransparent schwarz dargestellt. Auch dort bleiben a und c markiert.",
    showCopy: true,
    showParallelogram: false,
    showHeight: false,
    showCutTriangle: false,
    showRectangle: false,
    showMovedTriangle: false,
    showDoubleInfo: false
  },
  {
    title: "Schritt 3",
    description: "Die beiden Trapeze bilden zusammen ein Parallelogramm. Seine Grundseite setzt sich aus a + c zusammen.",
    showCopy: true,
    showParallelogram: true,
    showHeight: false,
    showCutTriangle: false,
    showRectangle: false,
    showMovedTriangle: false,
    showDoubleInfo: false
  },
  {
    title: "Schritt 4",
    description: "Im blauen Trapez zeichnen wir links die Höhe h ein. Dadurch entsteht links unten ein rechtwinkliges Dreieck, das wir schraffieren.",
    showCopy: true,
    showParallelogram: true,
    showHeight: true,
    showCutTriangle: true,
    showRectangle: false,
    showMovedTriangle: false,
    showDoubleInfo: false
  },
  {
    title: "Schritt 5",
    description: "Das schraffierte Dreieck wird ausgeschnitten und gedreht an der rechten Seite angefügt. So entsteht ein Rechteck mit dem Flächeninhalt (a + c) · h.",
    showCopy: true,
    showParallelogram: true,
    showHeight: true,
    showCutTriangle: false,
    showRectangle: true,
    showMovedTriangle: true,
    showDoubleInfo: false
  },
  {
    title: "Schritt 6",
    description: "In dieses Rechteck passen genau zwei gleich große Trapeze. Deshalb ist die Fläche eines Trapezes halb so groß.\nA = (a + c) · h : 2",
    showCopy: true,
    showParallelogram: false,
    showHeight: true,
    showCutTriangle: false,
    showRectangle: true,
    showMovedTriangle: true,
    showDoubleInfo: true
  }
];

const trapezCopy = document.getElementById("trapezCopy");
const parallelogramHighlight = document.getElementById("parallelogramHighlight");
const sumLabel = document.getElementById("sumLabel");
const topLabelOriginal = document.getElementById("topLabelOriginal");
const topLabelCopy = document.getElementById("topLabelCopy");
const heightLine = document.getElementById("heightLine");
const heightLabel = document.getElementById("heightLabel");
const cutTriangle = document.getElementById("cutTriangle");
const rectangleHighlight = document.getElementById("rectangleHighlight");
const movedTriangle = document.getElementById("movedTriangle");
const rectangleLabel = document.getElementById("rectangleLabel");
const doubleInfo = document.getElementById("doubleInfo");

AreaPageCore.initAreaPage({
  animation: {
    steps: trapezSteps,
    renderStep(step, helpers) {
      helpers.setVisibility(trapezCopy, step.showCopy);
      helpers.setVisibility(parallelogramHighlight, step.showParallelogram);
      helpers.setVisibility(sumLabel, step.showParallelogram);
      helpers.setVisibility(topLabelOriginal, !step.showParallelogram);
      helpers.setVisibility(topLabelCopy, step.showCopy && !step.showParallelogram);
      helpers.setVisibility(heightLine, step.showHeight);
      helpers.setVisibility(heightLabel, step.showHeight);
      helpers.setVisibility(cutTriangle, step.showCutTriangle);
      helpers.setVisibility(rectangleHighlight, step.showRectangle);
      helpers.setVisibility(movedTriangle, step.showMovedTriangle);
      helpers.setVisibility(rectangleLabel, step.showRectangle);
      helpers.setVisibility(doubleInfo, step.showDoubleInfo);
    }
  },
  calculation: {
    inputs: [
      { id: "seiteA", key: "a" },
      { id: "seiteC", key: "c" },
      { id: "hoehe", key: "h" }
    ],
    errorMessage: "Bitte gib für a, c und h positive Zahlen ein.",
    calculate(values) {
      return ((values.a + values.c) * values.h) / 2;
    },
    renderResult(values, area, helpers) {
      const sum = values.a + values.c;
      const rectangleArea = sum * values.h;

      return `
        A = (a + c) · h : 2<br>
        A = (${helpers.formatNumber(values.a)} cm + ${helpers.formatNumber(values.c)} cm) · ${helpers.formatNumber(values.h)} cm : 2<br>
        A = ${helpers.formatNumber(sum)} cm · ${helpers.formatNumber(values.h)} cm : 2<br>
        A = ${helpers.formatNumber(rectangleArea)} cm² : 2<br>
        <strong>A = ${helpers.formatNumber(area)} cm²</strong>
      `;
    }
  }
});
