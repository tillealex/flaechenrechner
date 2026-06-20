const steps = [
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

let currentStep = 0;

const mainShape = document.getElementById("mainShape");
const cutTriangle = document.getElementById("cutTriangle");
const movedTriangle = document.getElementById("movedTriangle");
const heightLine = document.getElementById("heightLine");
const heightMarkerTop = document.getElementById("heightMarkerTop");
const heightLabel = document.getElementById("heightLabel");

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

  mainShape.setAttribute("points", step.mainPoints);

  stepTitle.textContent = step.title;
  stepDescription.textContent = step.description;

  setVisibility(cutTriangle, step.showCut);
  setVisibility(movedTriangle, step.showMoved);
  setVisibility(heightLine, step.showHeight);
  setVisibility(heightMarkerTop, step.showHeight);
  setVisibility(heightLabel, step.showHeight);
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

  const g = Number(document.getElementById("grundseite").value);
  const h = Number(document.getElementById("hoehe").value);
  const result = document.getElementById("result");

  if (!Number.isFinite(g) || !Number.isFinite(h) || g <= 0 || h <= 0) {
    result.innerHTML = "Bitte gib für Grundseite und Höhe positive Zahlen ein.";
    return;
  }

  const area = g * h;

  result.innerHTML = `
    A = g · h<br>
    A = ${formatNumber(g)} cm · ${formatNumber(h)} cm<br>
    <strong>A = ${formatNumber(area)} cm²</strong>
  `;
}

document.getElementById("calcForm").addEventListener("submit", calculateArea);

updateAnimation();
document.getElementById("calcForm").dispatchEvent(new Event("submit"));