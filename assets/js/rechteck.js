const steps = [
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

let currentStep = 0;

const rectangleGrid = document.getElementById("rectangleGrid");
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

  setVisibility(rectangleGrid, step.showGrid);
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

  const a = Number(document.getElementById("seitenlaengeA").value);
  const b = Number(document.getElementById("seitenlaengeB").value);
  const result = document.getElementById("result");

  if (!Number.isFinite(a) || !Number.isFinite(b) || a <= 0 || b <= 0) {
    result.innerHTML = "Bitte gib für Länge und Breite positive Zahlen ein.";
    return;
  }

  const area = a * b;

  result.innerHTML = `
    A = a · b<br>
    A = ${formatNumber(a)} cm · ${formatNumber(b)} cm<br>
    <strong>A = ${formatNumber(area)} cm²</strong>
  `;
}

document.getElementById("calcForm").addEventListener("submit", calculateArea);

updateAnimation();
document.getElementById("calcForm").dispatchEvent(new Event("submit"));