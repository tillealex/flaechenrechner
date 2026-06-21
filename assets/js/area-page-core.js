/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

(function () {
  "use strict";

  function getElement(id, options = {}) {
    const element = document.getElementById(id);

    if (!element && !options.optional) {
      throw new Error(`Element with id "${id}" was not found.`);
    }

    return element;
  }

  function setVisibility(element, visible) {
    if (!element) {
      return;
    }

    element.classList.toggle("hidden", !visible);
  }

  function formatNumber(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(".", ",");
  }

  function readPositiveNumber(input) {
    const value = Number(input.value);

    if (!Number.isFinite(value) || value <= 0) {
      return null;
    }

    return value;
  }

  function createAnimationController(config) {
    let currentStep = 0;

    const stepTitle = getElement(config.stepTitleId || "stepTitle");
    const stepDescription = getElement(config.stepDescriptionId || "stepDescription");
    const nextStepButton = getElement(config.nextStepButtonId || "nextStep");
    const prevStepButton = getElement(config.prevStepButtonId || "prevStep");
    const resetAnimationButton = getElement(config.resetAnimationButtonId || "resetAnimation");

    function updateAnimation() {
      const step = config.steps[currentStep];

      stepTitle.textContent = step.title;
      stepDescription.textContent = step.description;

      config.renderStep(step, {
        stepIndex: currentStep,
        setVisibility
      });
    }

    nextStepButton.addEventListener("click", () => {
      currentStep = Math.min(currentStep + 1, config.steps.length - 1);
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

    updateAnimation();
  }

  function createCalculationController(config) {
    const form = getElement(config.formId || "calcForm");
    const result = getElement(config.resultId || "result");

    function calculateArea(event) {
      event.preventDefault();

      const values = {};

      for (const inputConfig of config.inputs) {
        const input = getElement(inputConfig.id);
        const value = readPositiveNumber(input);

        if (value === null) {
          result.textContent = config.errorMessage || "Bitte gib positive Zahlen ein.";
          return;
        }

        values[inputConfig.key] = value;
      }

      const area = config.calculate(values);
      result.innerHTML = config.renderResult(values, area, { formatNumber });
    }

    form.addEventListener("submit", calculateArea);
    form.dispatchEvent(new Event("submit"));
  }

  function validateConfig(config) {
    if (!config || !config.animation || !config.calculation) {
      throw new Error("Area page configuration needs animation and calculation sections.");
    }

    if (!Array.isArray(config.animation.steps) || config.animation.steps.length === 0) {
      throw new Error("Area page animation needs at least one step.");
    }

    if (typeof config.animation.renderStep !== "function") {
      throw new Error("Area page animation needs a renderStep function.");
    }

    if (!Array.isArray(config.calculation.inputs) || config.calculation.inputs.length === 0) {
      throw new Error("Area page calculation needs at least one input.");
    }

    if (typeof config.calculation.calculate !== "function") {
      throw new Error("Area page calculation needs a calculate function.");
    }

    if (typeof config.calculation.renderResult !== "function") {
      throw new Error("Area page calculation needs a renderResult function.");
    }
  }

  function initAreaPage(config) {
    validateConfig(config);

    createAnimationController(config.animation);
    createCalculationController(config.calculation);
  }

  window.AreaPageCore = {
    initAreaPage,
    setVisibility,
    formatNumber
  };
}());
