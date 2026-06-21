/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const rectangleSteps = [
  {
    title: "Schritt 1",
    description: "Wir betrachten zunächst das Rechteck. Die gegenüberliegenden Seiten sind gleich lang.",
    showGrid: false,
    showUnit: false,
    showRowSquares: false,
    showRemainingRows: false
  },
  {
    title: "Schritt 2",
    description: "Wir teilen das Rechteck in Grundeinheiten ein. Ein kleines Quadrat steht für 1 cm².",
    showGrid: true,
    showUnit: true,
    showRowSquares: false,
    showRemainingRows: false
  },
  {
    title: "Schritt 3",
    description: "In einer Zeile liegen 6 Einheitsquadrate. Die Länge gibt an, wie viele Einheitsquadrate in eine Zeile passen.",
    showGrid: true,
    showUnit: true,
    showRowSquares: true,
    showRemainingRows: false
  },
  {
    title: "Schritt 4",
    description: "Das Rechteck besteht aus 4 solchen Zeilen. Jede Zeile enthält wieder 6 Einheitsquadrate.",
    showGrid: true,
    showUnit: true,
    showRowSquares: true,
    showRemainingRows: true
  },
  {
    title: "Schritt 5",
    description: "Wir rechnen Einheitsquadrate pro Zeile mal Anzahl Zeilen. Deshalb gilt für das Rechteck: A = a · b.",
    showGrid: true,
    showUnit: true,
    showRowSquares: true,
    showRemainingRows: true
  }
];

const rectangleGrid = document.getElementById("rectangleGrid");
const unitSquare = document.getElementById("unitSquare");
const rowSquares = document.getElementById("rowSquares");
const remainingRows = document.getElementById("remainingRows");

AreaPageCore.initAreaPage({
  animation: {
    steps: rectangleSteps,
    renderStep(step, helpers) {
      helpers.setVisibility(rectangleGrid, step.showGrid);
      helpers.setVisibility(unitSquare, step.showUnit);
      helpers.setVisibility(rowSquares, step.showRowSquares);
      helpers.setVisibility(remainingRows, step.showRemainingRows);
    }
  },
  calculation: {
    inputs: [
      { id: "seitenlaengeA", key: "a" },
      { id: "seitenlaengeB", key: "b" }
    ],
    errorMessage: "Bitte gib für Länge und Breite positive Zahlen ein.",
    calculate(values) {
      return values.a * values.b;
    },
    renderResult(values, area, helpers) {
      return `
        A = a · b<br>
        A = ${helpers.formatNumber(values.a)} cm · ${helpers.formatNumber(values.b)} cm<br>
        <strong>A = ${helpers.formatNumber(area)} cm²</strong>
      `;
    }
  }
});
