// Keep the footer year current
(function () {
  var el = document.getElementById("year");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();
