/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('[data-shape="trapez"]');
    if (!card) return;

    const badge = card.querySelector(".status-badge");
    if (badge) badge.textContent = "Fläche aktiv";

    card.classList.add("is-live");
  });
})();
