/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const parallelogrammSteps = [
  {
    title: "Schritt 1",
    description: "Wir betrachten zunächst das Parallelogramm. Es hat eine Grundseite g und eine zugehörige Höhe h.",
    showHeight: false,
    showCut: false,
    showMoved: false,
    mainPoints: "170,85 550,85 640,260 260,260"
  },
  {
    title: "Schritt 2",
    description: "Wir zeichnen die Höhe ein. Dadurch entstehen links ein rechtwinkliges Dreieck und rechts ein Trapez.",
    showHeight: true,
    showCut: false,
    showMoved: false,
    mainPoints: "170,85 550,85 640,260 260,260"
  },
  {
    title: "Schritt 3",
    description: "Das linke rechtwinklige Dreieck wird markiert. Dieses Dreieck schneiden wir gedanklich ab.",
    showHeight: true,
    showCut: true,
    showMoved: false,
    mainPoints: "170,85 550,85 640,260 260,260"
  },
  {
    title: "Schritt 4",
    description: "Das abgeschnittene Dreieck wird rechts an das Trapez angefügt.",
    showHeight: true,
    showCut: false,
    showMoved: true,
    mainPoints: "260,85 550,85 640,260 260,260"
  },
  {
    title: "Schritt 5",
    description: "Aus dem Parallelogramm ist ein Rechteck mit gleicher Fläche geworden. Deshalb gilt: A = g · h.",
    showHeight: true,
    showCut: false,
    showMoved: false,
    mainPoints: "260,85 640,85 640,260 260,260"
  }
];

const mainShape = document.getElementById("mainShape");
const cutTriangle = document.getElementById("cutTriangle");
const movedTriangle = document.getElementById("movedTriangle");
const heightLine = document.getElementById("heightLine");
const heightMarkerTop = document.getElementById("heightMarkerTop");
const heightLabel = document.getElementById("heightLabel");

AreaPageCore.initAreaPage({
  animation: {
    steps: parallelogrammSteps,
    renderStep(step, helpers) {
      mainShape.setAttribute("points", step.mainPoints);

      helpers.setVisibility(cutTriangle, step.showCut);
      helpers.setVisibility(movedTriangle, step.showMoved);
      helpers.setVisibility(heightLine, step.showHeight);
      helpers.setVisibility(heightMarkerTop, step.showHeight);
      helpers.setVisibility(heightLabel, step.showHeight);
    }
  },
  calculation: {
    inputs: [
      { id: "grundseite", key: "g" },
      { id: "hoehe", key: "h" }
    ],
    errorMessage: "Bitte gib für Grundseite und Höhe positive Zahlen ein.",
    calculate(values) {
      return values.g * values.h;
    },
    renderResult(values, area, helpers) {
      return `
        A = g · h<br>
        A = ${helpers.formatNumber(values.g)} cm · ${helpers.formatNumber(values.h)} cm<br>
        <strong>A = ${helpers.formatNumber(area)} cm²</strong>
      `;
    }
  }
});
