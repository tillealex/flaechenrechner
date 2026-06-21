/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const kiteShape = document.getElementById("kiteShape");
const diagonalE = document.getElementById("diagonalE");
const diagonalF = document.getElementById("diagonalF");
const diagonalELabel = document.getElementById("diagonalELabel");
const diagonalFLabel = document.getElementById("diagonalFLabel");
const rectangleELabel = document.getElementById("rectangleELabel");
const rectangleFLabel = document.getElementById("rectangleFLabel");
const triangleTop = document.getElementById("triangleTop");
const triangleRight = document.getElementById("triangleRight");
const triangleBottom = document.getElementById("triangleBottom");
const triangleLeft = document.getElementById("triangleLeft");
const outerTriangleTopLeft = document.getElementById("outerTriangleTopLeft");
const outerTriangleTopRight = document.getElementById("outerTriangleTopRight");
const outerTriangleBottomRight = document.getElementById("outerTriangleBottomRight");
const outerTriangleBottomLeft = document.getElementById("outerTriangleBottomLeft");
const diagonalRectangle = document.getElementById("diagonalRectangle");

const kiteSteps = [
  {
    title: "Schritt 1",
    description: "Wir betrachten zunächst das Drachenviereck.",
    showDiagonals: false,
    showInnerTriangles: false,
    showRectangle: false,
    showRectangleLabels: false,
    showOuterTriangles: false
  },
  {
    title: "Schritt 2",
    description: "Wir zeichnen die Diagonalen ein. Die senkrechte Diagonale heißt e, die waagerechte Diagonale heißt f.",
    showDiagonals: true,
    showInnerTriangles: false,
    showRectangle: false,
    showRectangleLabels: false,
    showOuterTriangles: false
  },
  {
    title: "Schritt 3",
    description: "Die Diagonalen teilen das Drachenviereck in vier rechtwinklige Dreiecke. Die Schraffuren zeigen die vier Teilflächen.",
    showDiagonals: true,
    showInnerTriangles: true,
    showRectangle: false,
    showRectangleLabels: false,
    showOuterTriangles: false
  },
  {
    title: "Schritt 4",
    description: "Wir zeichnen ein Rechteck um das Drachenviereck. Die waagerechte Seite entspricht f, die senkrechte Seite entspricht e.",
    showDiagonals: true,
    showInnerTriangles: false,
    showRectangle: true,
    showRectangleLabels: true,
    showOuterTriangles: true
  },
  {
    title: "Schritt 5",
    description: "Die schraffierten Zwischenräume sind genauso groß wie das Drachenviereck. Der Flächeninhalt des Drachenvierecks ist also halb so groß wie der Flächeninhalt des Rechtecks e · f.\nA = e · f / 2",
    showDiagonals: true,
    showInnerTriangles: false,
    showRectangle: true,
    showRectangleLabels: true,
    showOuterTriangles: true
  }
];

function hideAllAnimationHelpers(helpers) {
  helpers.setVisibility(diagonalE, false);
  helpers.setVisibility(diagonalF, false);
  helpers.setVisibility(diagonalELabel, false);
  helpers.setVisibility(diagonalFLabel, false);
  helpers.setVisibility(rectangleELabel, false);
  helpers.setVisibility(rectangleFLabel, false);
  helpers.setVisibility(triangleTop, false);
  helpers.setVisibility(triangleRight, false);
  helpers.setVisibility(triangleBottom, false);
  helpers.setVisibility(triangleLeft, false);
  helpers.setVisibility(outerTriangleTopLeft, false);
  helpers.setVisibility(outerTriangleTopRight, false);
  helpers.setVisibility(outerTriangleBottomRight, false);
  helpers.setVisibility(outerTriangleBottomLeft, false);
  helpers.setVisibility(diagonalRectangle, false);
}

function setGroupVisibility(elements, visible, helpers) {
  elements.forEach((element) => helpers.setVisibility(element, visible));
}

AreaPageCore.initAreaPage({
  animation: {
    steps: kiteSteps,
    renderStep(step, helpers) {
      kiteShape.setAttribute("points", "380,70 680,180 380,290 80,180");
      hideAllAnimationHelpers(helpers);

      helpers.setVisibility(diagonalE, step.showDiagonals);
      helpers.setVisibility(diagonalF, step.showDiagonals);
      helpers.setVisibility(diagonalELabel, step.showDiagonals && !step.showRectangleLabels);
      helpers.setVisibility(diagonalFLabel, step.showDiagonals && !step.showRectangleLabels);
      helpers.setVisibility(diagonalRectangle, step.showRectangle);
      helpers.setVisibility(rectangleELabel, step.showRectangleLabels);
      helpers.setVisibility(rectangleFLabel, step.showRectangleLabels);

      setGroupVisibility(
        [triangleTop, triangleRight, triangleBottom, triangleLeft],
        step.showInnerTriangles,
        helpers
      );

      setGroupVisibility(
        [outerTriangleTopLeft, outerTriangleTopRight, outerTriangleBottomRight, outerTriangleBottomLeft],
        step.showOuterTriangles,
        helpers
      );
    }
  },
  calculation: {
    inputs: [
      { id: "diagonaleE", key: "e" },
      { id: "diagonaleF", key: "f" }
    ],
    errorMessage: "Bitte gib für beide Diagonalen positive Zahlen ein.",
    calculate(values) {
      return values.e * values.f / 2;
    },
    renderResult(values, area, helpers) {
      return `
        A = e · f : 2<br>
        A = ${helpers.formatNumber(values.e)} cm · ${helpers.formatNumber(values.f)} cm : 2<br>
        <strong>A = ${helpers.formatNumber(area)} cm²</strong>
      `;
    }
  }
});