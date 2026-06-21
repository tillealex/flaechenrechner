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

  function createMethodState(config) {
    const methods = Array.isArray(config.methods) && config.methods.length > 0
      ? config.methods
      : [{
          id: "default",
          title: config.title || "Standardweg",
          animation: config.animation,
          calculation: config.calculation
        }];

    let activeMethod = methods.find(method => method.id === config.defaultMethodId) || methods[0];

    return {
      getActiveMethod() {
        return activeMethod;
      },
      setActiveMethod(methodId) {
        const method = methods.find(candidate => candidate.id === methodId);

        if (!method) {
          throw new Error(`Area page method with id "${methodId}" was not found.`);
        }

        activeMethod = method;
      },
      getMethods() {
        return methods;
      },
      hasMultipleMethods() {
        return methods.length > 1;
      }
    };
  }

  function createAnimationController(methodState) {
    let currentStep = 0;

    const stepTitle = getElement("stepTitle");
    const stepDescription = getElement("stepDescription");
    const nextStepButton = getElement("nextStep");
    const prevStepButton = getElement("prevStep");
    const resetAnimationButton = getElement("resetAnimation");

    function updateAnimation() {
      const animation = methodState.getActiveMethod().animation;
      const step = animation.steps[currentStep];

      stepTitle.textContent = step.title;
      stepDescription.textContent = step.description;

      animation.renderStep(step, {
        stepIndex: currentStep,
        setVisibility
      });
    }

    function reset() {
      currentStep = 0;
      updateAnimation();
    }

    nextStepButton.addEventListener("click", () => {
      const animation = methodState.getActiveMethod().animation;
      currentStep = Math.min(currentStep + 1, animation.steps.length - 1);
      updateAnimation();
    });

    prevStepButton.addEventListener("click", () => {
      currentStep = Math.max(currentStep - 1, 0);
      updateAnimation();
    });

    resetAnimationButton.addEventListener("click", reset);

    updateAnimation();

    return {
      reset,
      updateAnimation
    };
  }

  function createCalculationController(methodState) {
    const form = getElement("calcForm");
    const result = getElement("result");

    function calculateArea(event) {
      event.preventDefault();

      const calculation = methodState.getActiveMethod().calculation;
      const values = {};

      for (const inputConfig of calculation.inputs) {
        const input = getElement(inputConfig.id);
        const value = readPositiveNumber(input);

        if (value === null) {
          result.textContent = calculation.errorMessage || "Bitte gib positive Zahlen ein.";
          return;
        }

        values[inputConfig.key] = value;
      }

      const area = calculation.calculate(values);
      result.innerHTML = calculation.renderResult(values, area, { formatNumber });
    }

    form.addEventListener("submit", calculateArea);
    form.dispatchEvent(new Event("submit"));

    return {
      calculate() {
        form.dispatchEvent(new Event("submit"));
      }
    };
  }

  function createMethodController(methodState, animationController, calculationController) {
    if (!methodState.hasMultipleMethods()) {
      return;
    }

    const methodButtons = document.querySelectorAll("[data-area-method]");

    function updateMethodButtons(activeMethodId) {
      methodButtons.forEach(button => {
        const isActive = button.dataset.areaMethod === activeMethodId;
        button.classList.toggle("active", isActive);
        button.classList.toggle("primary-button", isActive);
        button.classList.toggle("secondary-button", !isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    }

    function activateMethod(methodId) {
      methodState.setActiveMethod(methodId);

      const method = methodState.getActiveMethod();

      if (typeof method.onActivate === "function") {
        method.onActivate({
          setVisibility,
          getElement,
          formatNumber
        });
      }

      updateMethodButtons(method.id);
      animationController.reset();
      calculationController.calculate();
    }

    methodButtons.forEach(button => {
      button.addEventListener("click", () => activateMethod(button.dataset.areaMethod));
    });

    const activeMethod = methodState.getActiveMethod();

    if (typeof activeMethod.onActivate === "function") {
      activeMethod.onActivate({
        setVisibility,
        getElement,
        formatNumber
      });
    }

    updateMethodButtons(activeMethod.id);
  }

  function validateMethod(method) {
    if (!method.animation || !method.calculation) {
      throw new Error("Area page method needs animation and calculation sections.");
    }

    if (!Array.isArray(method.animation.steps) || method.animation.steps.length === 0) {
      throw new Error("Area page animation needs at least one step.");
    }

    if (typeof method.animation.renderStep !== "function") {
      throw new Error("Area page animation needs a renderStep function.");
    }

    if (!Array.isArray(method.calculation.inputs) || method.calculation.inputs.length === 0) {
      throw new Error("Area page calculation needs at least one input.");
    }

    if (typeof method.calculation.calculate !== "function") {
      throw new Error("Area page calculation needs a calculate function.");
    }

    if (typeof method.calculation.renderResult !== "function") {
      throw new Error("Area page calculation needs a renderResult function.");
    }
  }

  function validateConfig(config) {
    if (!config) {
      throw new Error("Area page configuration is missing.");
    }

    if (Array.isArray(config.methods)) {
      if (config.methods.length === 0) {
        throw new Error("Area page configuration needs at least one method.");
      }

      config.methods.forEach(validateMethod);
      return;
    }

    if (!config.animation || !config.calculation) {
      throw new Error("Area page configuration needs animation and calculation sections.");
    }

    validateMethod({
      animation: config.animation,
      calculation: config.calculation
    });
  }

  function initAreaPage(config) {
    validateConfig(config);

    const methodState = createMethodState(config);
    const animationController = createAnimationController(methodState);
    const calculationController = createCalculationController(methodState);

    createMethodController(methodState, animationController, calculationController);
  }

  window.AreaPageCore = {
    initAreaPage,
    setVisibility,
    formatNumber
  };
}());
