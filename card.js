
(function () {
  "use strict";

  function updateEpochTime() {
    var el = document.querySelector('[data-testid="test-user-time"]');
    if (!el) return;
    var now = Date.now();
    el.textContent = now;
    el.setAttribute("datetime", new Date(now).toISOString());
  }

  updateEpochTime();
  setInterval(updateEpochTime, 500);
})();