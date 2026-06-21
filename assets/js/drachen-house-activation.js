/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 Alexander Tille
 * This file is part of Flächenberechnung.
 * Created and developed with support from ChatGPT.
 */

document.querySelectorAll('[data-figur="drachen"] .badge').forEach((badge) => {
  badge.classList.remove("info");
  badge.classList.add("live");
  badge.textContent = "Fläche aktiv";
});
