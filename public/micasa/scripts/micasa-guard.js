/**
 * Prevent theme Lottie from injecting duplicate logos into navbar / missing hero container.
 */
(function (w) {
  function patchLottie() {
    if (!w.bodymovin && !w.lottie) return false;

    var lottie = w.bodymovin || w.lottie;
    if (lottie._micasaPatched) return true;
    lottie._micasaPatched = true;

    var originalLoad = lottie.loadAnimation;
    lottie.loadAnimation = function (params) {
      if (!params || !params.container) {
        return { play: function () {}, pause: function () {}, destroy: function () {} };
      }

      if (!params.path) {
        return { play: function () {}, pause: function () {}, destroy: function () {} };
      }

      return originalLoad.call(this, params);
    };

    return true;
  }

  function installHoverGuard() {
    if (!w.jQuery) {
      w.setTimeout(installHoverGuard, 20);
      return;
    }

    var $ = w.jQuery;
    if ($.fn._micasaHoverGuard) return;
    $.fn._micasaHoverGuard = true;

    var originalHover = $.fn.hover;
    $.fn.hover = function (handlerIn, handlerOut) {
      if (arguments.length >= 2 && typeof handlerIn === "function") {
        return this.each(function () {
          var $el = $(this);
          if ($el.hasClass("work-card") && $el.find("video").length === 0) return;
          originalHover.call($el, handlerIn, handlerOut);
        });
      }
      return originalHover.apply(this, arguments);
    };
  }

  function patchLegacyHeroInit() {
    if (!w.jQuery) {
      w.setTimeout(patchLegacyHeroInit, 20);
      return;
    }

    var $ = w.jQuery;
    if ($.fn._micasaHeroInitPatched) return;
    $.fn._micasaHeroInitPatched = true;

    var originalReady = $.fn.ready;
    $.fn.ready = function (callback) {
      return originalReady.call(this, function () {
        try {
          return callback.apply(this, arguments);
        } catch (error) {
          console.warn("[MERCANA] init callback skipped:", error);
        }
      });
    };
  }

  installHoverGuard();
  patchLottie();
  patchLegacyHeroInit();

  var attempts = 0;
  var lottieTimer = w.setInterval(function () {
    if (patchLottie() || ++attempts > 50) w.clearInterval(lottieTimer);
  }, 50);
})(window);
