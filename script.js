// Keep the footer year current + handle anchored scrolling with offset
(function () {
  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll with sticky-header offset for any in-page link (href="#...")
  var nav = document.querySelector(".nav");
  var navHeight = nav ? nav.offsetHeight : 0;
  var extraGap = 20; // space between section and bottom of nav

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var hash = this.getAttribute("href");
      if (!hash || hash === "#") return;

      var target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      var targetTop =
        target.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: targetTop - navHeight - extraGap,
        behavior: "smooth"
      });
    });
  });
})();