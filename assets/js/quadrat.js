/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const squareSteps = [
  {
    title: "Schritt 1",
    description: "Wir betrachten zunächst das Quadrat. Alle Seiten sind gleich lang.",
    showGrid: false,
    showUnit: false,
    showRowSquares: false,
    showRemainingRows: false
  },
  {
    title: "Schritt 2",
    description: "Wir teilen das Quadrat in Grundeinheiten ein. Ein kleines Quadrat steht für 1 cm².",
    showGrid: true,
    showUnit: true,
    showRowSquares: false,
    showRemainingRows: false
  },
  {
    title: "Schritt 3",
    description: "In einer Zeile liegen 5 Einheitsquadrate. Die Seitenlänge gibt also an, wie viele Einheitsquadrate in eine Zeile passen.",
    showGrid: true,
    showUnit: true,
    showRowSquares: true,
    showRemainingRows: false
  },
  {
    title: "Schritt 4",
    description: "Das Quadrat besteht aus 5 solchen Zeilen. Jede Zeile enthält wieder 5 Einheitsquadrate.",
    showGrid: true,
    showUnit: true,
    showRowSquares: true,
    showRemainingRows: true
  },
  {
    title: "Schritt 5",
    description: "Wir rechnen: Einheitsquadrate pro Zeile mal Anzahl Zeilen. Deshalb gilt für das Quadrat: A = a · a.",
    showGrid: true,
    showUnit: true,
    showRowSquares: true,
    showRemainingRows: true
  }
];

const squareGrid = document.getElementById("squareGrid");
const unitSquare = document.getElementById("unitSquare");
const rowSquares = document.getElementById("rowSquares");
const remainingRows = document.getElementById("remainingRows");

AreaPageCore.initAreaPage({
  animation: {
    steps: squareSteps,
    renderStep(step, helpers) {
      helpers.setVisibility(squareGrid, step.showGrid);
      helpers.setVisibility(unitSquare, step.showUnit);
      helpers.setVisibility(rowSquares, step.showRowSquares);
      helpers.setVisibility(remainingRows, step.showRemainingRows);
    }
  },
  calculation: {
    inputs: [
      { id: "seitenlaenge", key: "a" }
    ],
    errorMessage: "Bitte gib für die Seitenlänge eine positive Zahl ein.",
    calculate(values) {
      return values.a * values.a;
    },
    renderResult(values, area, helpers) {
      return `
        A = a · a<br>
        A = ${helpers.formatNumber(values.a)} cm · ${helpers.formatNumber(values.a)} cm<br>
        <strong>A = ${helpers.formatNumber(area)} cm²</strong>
      `;
    }
  }
});
