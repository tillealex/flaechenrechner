/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

const steps = [
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

let currentStep = 0;

const squareGrid = document.getElementById("squareGrid");
const unitSquare = document.getElementById("unitSquare");
const rowSquares = document.getElementById("rowSquares");
const remainingRows = document.getElementById("remainingRows");

const stepTitle = document.getElementById("stepTitle");
const stepDescription = document.getElementById("stepDescription");

const nextStepButton = document.getElementById("nextStep");
const prevStepButton = document.getElementById("prevStep");
const resetAnimationButton = document.getElementById("resetAnimation");

function setVisibility(element, visible) {
  element.classList.toggle("hidden", !visible);
}

function updateAnimation() {
  const step = steps[currentStep];

  stepTitle.textContent = step.title;
  stepDescription.textContent = step.description;

  setVisibility(squareGrid, step.showGrid);
  setVisibility(unitSquare, step.showUnit);
  setVisibility(rowSquares, step.showRowSquares);
  setVisibility(remainingRows, step.showRemainingRows);
}

nextStepButton.addEventListener("click", () => {
  currentStep = Math.min(currentStep + 1, steps.length - 1);
  updateAnimation();
});

prevStepButton.addEventListener("click", () => {
  currentStep = Math.max(currentStep - 1, 0);
  updateAnimation();
});

resetAnimationButton.addEventListener("click", () => {
  currentStep = 0;
  updateAnimation();
});

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(".", ",");
}

function calculateArea(event) {
  event.preventDefault();

  const a = Number(document.getElementById("seitenlaenge").value);
  const result = document.getElementById("result");

  if (!Number.isFinite(a) || a <= 0) {
    result.innerHTML = "Bitte gib für die Seitenlänge eine positive Zahl ein.";
    return;
  }

  const area = a * a;

  result.innerHTML = `
    A = a · a<br>
    A = ${formatNumber(a)} cm · ${formatNumber(a)} cm<br>
    <strong>A = ${formatNumber(area)} cm²</strong>
  `;
}

document.getElementById("calcForm").addEventListener("submit", calculateArea);

updateAnimation();
document.getElementById("calcForm").dispatchEvent(new Event("submit"));
