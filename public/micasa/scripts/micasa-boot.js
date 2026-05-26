/**
 * Ensures page visibility if main.js fails partially.
 * Load after main.js.
 */
(function () {
  function boot() {
    document.body.classList.add("loaded");
    document.body.classList.add(
      "ontouchstart" in document.documentElement ? "touch" : "no-touch",
    );

    if (window.jQuery) {
      window.jQuery(".work-card").each(function () {
        var $card = window.jQuery(this);
        if ($card.find("video").length === 0) {
          $card.off("mouseenter mouseleave hover");
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.addEventListener("load", boot);
})();
