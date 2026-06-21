/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

(function () {
  "use strict";

  const rhombusShape = document.getElementById("rhombusShape");
  const baseMarkedTriangle = document.getElementById("baseMarkedTriangle");
  const baseMovedTriangle = document.getElementById("baseMovedTriangle");
  const stepTitle = document.getElementById("stepTitle");

  const baseMethodButton = document.querySelector('[data-area-method="base-height"]');

  const originalBaseHeightPoints = "220,75 460,75 580,282 340,282";
  const rectanglePoints = "340,75 580,75 580,282 340,282";

  function setVisibility(element, visible) {
    if (!element) {
      return;
    }

    element.classList.toggle("hidden", !visible);
  }

  function getStepNumber() {
    const match = stepTitle.textContent.match(/\d+/);
    return match ? Number(match[0]) : 1;
  }

  function isBaseHeightMethodActive() {
    return baseMethodButton && baseMethodButton.getAttribute("aria-pressed") === "true";
  }

  function updateBaseHeightDetails() {
    const active = isBaseHeightMethodActive();
    const step = getStepNumber();

    setVisibility(baseMarkedTriangle, active && step === 3);
    setVisibility(baseMovedTriangle, active && step >= 4);

    if (!active || !rhombusShape) {
      return;
    }

    rhombusShape.setAttribute("points", step >= 4 ? rectanglePoints : originalBaseHeightPoints);
  }

  document.addEventListener("click", () => {
    window.setTimeout(updateBaseHeightDetails, 0);
  });

  updateBaseHeightDetails();
})();
