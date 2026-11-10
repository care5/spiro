(function () {
  const header = document.getElementById('header');
  const toggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', function () {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  });

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Savings slider (home only)
  const slider = document.getElementById('kmSlider');
  const kmValue = document.getElementById('kmValue');
  const savings = document.getElementById('savings');
  if (slider && kmValue && savings) {
    slider.addEventListener('input', function () {
      const km = +slider.value;
      kmValue.textContent = km;
      savings.textContent = Math.round(km * 0.35 * 365).toLocaleString();
    });
  }
})();
