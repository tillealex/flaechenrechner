/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const rhombusShape = document.getElementById("rhombusShape");
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
const heightLine = document.getElementById("heightLine");
const heightMarker = document.getElementById("heightMarker");
const heightLabel = document.getElementById("heightLabel");
const baseLine = document.getElementById("baseLine");
const baseLabel = document.getElementById("baseLabel");

const methodHeading = document.getElementById("methodHeading");
const methodIntro = document.getElementById("methodIntro");
const sketchIntro = document.getElementById("sketchIntro");
const formulaBox = document.getElementById("formulaBox");
const diagonalSketch = document.getElementById("diagonalSketch");
const baseHeightSketch = document.getElementById("baseHeightSketch");
const diagonalInputs = document.getElementById("diagonalInputs");
const baseHeightInputs = document.getElementById("baseHeightInputs");

const diagonalSteps = [
  {
    title: "Schritt 1",
    description: "Wir betrachten zunächst die Raute. Sie hat vier gleich lange Seiten.",
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
    description: "Die Diagonalen teilen die Raute in vier rechtwinklige Dreiecke. Die Schraffuren zeigen die vier Teilflächen.",
    showDiagonals: true,
    showInnerTriangles: true,
    showRectangle: false,
    showRectangleLabels: false,
    showOuterTriangles: false
  },
  {
    title: "Schritt 4",
    description: "Wir zeichnen ein Rechteck um die Raute. Die obere Seite wird mit e beschriftet, die rechte Seite mit f.",
    showDiagonals: true,
    showInnerTriangles: false,
    showRectangle: true,
    showRectangleLabels: true,
    showOuterTriangles: true
  },
  {
    title: "Schritt 5",
    description: "Die schraffierten Zwischenräume sind genauso groß wie die Raute. Der Flächeninhalt der Raute ist also halb so groß wie der Flächeninhalt des Rechtecks e · f.\nA = e · f / 2",
    showDiagonals: true,
    showInnerTriangles: false,
    showRectangle: true,
    showRectangleLabels: true,
    showOuterTriangles: true
  }
];

const baseHeightSteps = [
  {
    title: "Schritt 1",
    description: "Eine Raute ist auch ein besonderes Parallelogramm: Alle Seiten sind gleich lang.",
    showHeight: false,
    showBase: false
  },
  {
    title: "Schritt 2",
    description: "Wir wählen eine Seite als Grundseite a.",
    showHeight: false,
    showBase: true
  },
  {
    title: "Schritt 3",
    description: "Zur Grundseite gehört die senkrechte Höhe hₐ.",
    showHeight: true,
    showBase: true
  },
  {
    title: "Schritt 4",
    description: "Wie beim Parallelogramm kann man die Raute gedanklich zu einem Rechteck mit gleicher Fläche umformen.",
    showHeight: true,
    showBase: true
  },
  {
    title: "Schritt 5",
    description: "Deshalb gilt auch bei der Raute: A = a · hₐ.",
    showHeight: true,
    showBase: true
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
  helpers.setVisibility(heightLine, false);
  helpers.setVisibility(heightMarker, false);
  helpers.setVisibility(heightLabel, false);
  helpers.setVisibility(baseLine, false);
  helpers.setVisibility(baseLabel, false);
}

function showBlock(element, visible) {
  element.classList.toggle("hidden", !visible);
  element.style.display = visible ? "" : "none";
}

function activateDiagonalMethod() {
  methodHeading.textContent = "Weg 1: Diagonalen e und f";
  methodIntro.textContent = "Wenn die beiden Diagonalen bekannt sind, kannst du die Fläche mit A = e · f : 2 berechnen.";
  sketchIntro.textContent = "Links siehst du die Diagonalen der Raute. Rechts kannst du e und f eingeben.";
  formulaBox.textContent = "A = e · f : 2";

  showBlock(diagonalSketch, true);
  showBlock(baseHeightSketch, false);
  showBlock(diagonalInputs, true);
  showBlock(baseHeightInputs, false);
}

function activateBaseHeightMethod() {
  methodHeading.textContent = "Weg 2: Grundseite · Höhe";
  methodIntro.textContent = "Wenn eine Seite und die zugehörige Höhe bekannt sind, kannst du die Raute wie ein Parallelogramm berechnen.";
  sketchIntro.textContent = "Links siehst du Grundseite und Höhe. Rechts kannst du a und hₐ eingeben.";
  formulaBox.textContent = "A = a · hₐ";

  showBlock(diagonalSketch, false);
  showBlock(baseHeightSketch, true);
  showBlock(diagonalInputs, false);
  showBlock(baseHeightInputs, true);
}

function setGroupVisibility(elements, visible, helpers) {
  elements.forEach((element) => helpers.setVisibility(element, visible));
}

AreaPageCore.initAreaPage({
  defaultMethodId: "diagonals",
  methods: [
    {
      id: "diagonals",
      title: "Diagonalen e und f",
      onActivate: activateDiagonalMethod,
      animation: {
        steps: diagonalSteps,
        renderStep(step, helpers) {
          rhombusShape.setAttribute("points", "380,70 580,180 380,290 180,180");
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
    },
    {
      id: "base-height",
      title: "Grundseite · Höhe",
      onActivate: activateBaseHeightMethod,
      animation: {
        steps: baseHeightSteps,
        renderStep(step, helpers) {
          rhombusShape.setAttribute("points", "220,75 460,75 580,282 340,282");
          hideAllAnimationHelpers(helpers);

          helpers.setVisibility(baseLine, step.showBase);
          helpers.setVisibility(baseLabel, step.showBase);
          helpers.setVisibility(heightLine, step.showHeight);
          helpers.setVisibility(heightMarker, step.showHeight);
          helpers.setVisibility(heightLabel, step.showHeight);
        }
      },
      calculation: {
        inputs: [
          { id: "seiteA", key: "a" },
          { id: "hoeheA", key: "h" }
        ],
        errorMessage: "Bitte gib für Grundseite und Höhe positive Zahlen ein.",
        calculate(values) {
          return values.a * values.h;
        },
        renderResult(values, area, helpers) {
          return `
            A = a · hₐ<br>
            A = ${helpers.formatNumber(values.a)} cm · ${helpers.formatNumber(values.h)} cm<br>
            <strong>A = ${helpers.formatNumber(area)} cm²</strong>
          `;
        }
      }
    }
  ]
});