/* Maya landing — tiny vanilla JS. No deps, no build step. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- theme toggle (persisted, respects OS preference) ---------------- */
  var saved = null;
  try { saved = localStorage.getItem("maya-theme"); } catch (e) {}
  if (saved === "light" || saved === "dark") {
    root.dataset.theme = saved;
  }
  function currentTheme() {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function toggleTheme() {
    var next = currentTheme() === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("maya-theme", next); } catch (e) {}
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-label", next === "light" ? "Switch to dark theme" : "Switch to light theme");
  }
  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  /* ---- toast ----------------------------------------------------------- */
  function showToast(msg) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  /* ---- copy-to-clipboard ---------------------------------------------- */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.top = "-9999px";
        ta.setAttribute("readonly", "");
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (e) { reject(e); }
    });
  }

  // Any element carrying data-copy triggers a copy. Works for .copy-btn and others.
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      copyText(text).then(function () {
        btn.classList.add("is-copied");
        showToast("Copied — " + text);
        setTimeout(function () { btn.classList.remove("is-copied"); }, 1600);
      }).catch(function () {
        showToast("Copy failed — select manually");
      });
    });
  });

  /* ---- nav border/elevation on scroll --------------------------------- */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- reveal on scroll (respects reduced-motion) --------------------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- footer year ----------------------------------------------------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
