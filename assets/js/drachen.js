/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const drachenSteps = [
  {
    title: "Schritt 1",
    description: "Wir betrachten ein Drachenviereck. Seine beiden Diagonalen stehen senkrecht aufeinander.",
    showKite: true,
    showDiagonals: false,
    showInnerTriangles: false,
    showRectangle: false,
    showRectangleLabels: false,
    showOuterTriangles: false,
    showFinal: false
  },
  {
    title: "Schritt 2",
    description: "Wir zeichnen die Diagonalen ein. Die waagerechte Diagonale heißt e, die senkrechte Diagonale heißt f.",
    showKite: true,
    showDiagonals: true,
    showInnerTriangles: false,
    showRectangle: false,
    showRectangleLabels: false,
    showOuterTriangles: false,
    showFinal: false
  },
  {
    title: "Schritt 3",
    description: "Die Diagonalen teilen das Drachenviereck in vier rechtwinklige Dreiecke. Diese vier Dreiecke schraffieren wir rot.",
    showKite: true,
    showDiagonals: true,
    showInnerTriangles: true,
    showRectangle: false,
    showRectangleLabels: false,
    showOuterTriangles: false,
    showFinal: false
  },
  {
    title: "Schritt 4",
    description: "Wir zeichnen ein Rechteck um das Drachenviereck. Die rote Schraffur liegt nun auf den rechtwinkligen Dreiecken zwischen Drachenviereck und Rechteck.",
    showKite: true,
    showDiagonals: true,
    showInnerTriangles: false,
    showRectangle: true,
    showRectangleLabels: true,
    showOuterTriangles: true,
    showFinal: false
  },
  {
    title: "Schritt 5",
    description: "Die schraffierten Zwischenräume sind genauso groß wie das Drachenviereck. Das Drachenviereck ist also die Hälfte des Rechtecks e · f.\nA = e · f : 2",
    showKite: true,
    showDiagonals: true,
    showInnerTriangles: false,
    showRectangle: true,
    showRectangleLabels: true,
    showOuterTriangles: true,
    showFinal: true
  }
];

const kiteShape = document.getElementById("kiteShape");
const diagonalE = document.getElementById("diagonalE");
const diagonalF = document.getElementById("diagonalF");
const diagonalIntersection = document.getElementById("diagonalIntersection");
const labelE = document.getElementById("labelE");
const labelF = document.getElementById("labelF");
const kiteTriangles = document.getElementById("kiteTriangles");
const outerKiteTriangles = document.getElementById("outerKiteTriangles");
const outerRectangle = document.getElementById("outerRectangle");
const rectangleLabelE = document.getElementById("rectangleLabelE");
const rectangleLabelF = document.getElementById("rectangleLabelF");
const finalHint = document.getElementById("finalHint");

AreaPageCore.initAreaPage({
  animation: {
    steps: drachenSteps,
    renderStep(step, helpers) {
      helpers.setVisibility(kiteShape, step.showKite);
      helpers.setVisibility(diagonalE, step.showDiagonals);
      helpers.setVisibility(diagonalF, step.showDiagonals);
      helpers.setVisibility(diagonalIntersection, step.showDiagonals);
      helpers.setVisibility(labelE, step.showDiagonals && !step.showRectangleLabels);
      helpers.setVisibility(labelF, step.showDiagonals && !step.showRectangleLabels);
      helpers.setVisibility(kiteTriangles, step.showInnerTriangles);
      helpers.setVisibility(outerKiteTriangles, step.showOuterTriangles);
      helpers.setVisibility(outerRectangle, step.showRectangle);
      helpers.setVisibility(rectangleLabelE, step.showRectangleLabels);
      helpers.setVisibility(rectangleLabelF, step.showRectangleLabels);
      helpers.setVisibility(finalHint, step.showFinal);
    }
  },
  calculation: {
    inputs: [
      { id: "diagonaleE", key: "e" },
      { id: "diagonaleF", key: "f" }
    ],
    errorMessage: "Bitte gib für e und f positive Zahlen ein.",
    calculate(values) {
      return (values.e * values.f) / 2;
    },
    renderResult(values, area, helpers) {
      const rectangleArea = values.e * values.f;

      return `
        A = e · f : 2<br>
        A = ${helpers.formatNumber(values.e)} cm · ${helpers.formatNumber(values.f)} cm : 2<br>
        A = ${helpers.formatNumber(rectangleArea)} cm² : 2<br>
        <strong>A = ${helpers.formatNumber(area)} cm²</strong>
      `;
    }
  }
});