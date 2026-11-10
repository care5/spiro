(function () {
  // --- Mobile menu ---
  const header = document.getElementById('header');
  const toggle = document.getElementById('menuToggle');
  const toggleFloat = document.getElementById('menuToggleFloat');
  const mobileMenu = document.getElementById('mobileMenu');

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (toggle) toggle.classList.add('open');
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    if (toggle) toggle.classList.remove('open');
  }
  function toggleMenu() {
    if (!mobileMenu) return;
    if (mobileMenu.classList.contains('open')) closeMenu();
    else openMenu();
  }

  window.addEventListener('scroll', function () {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  });

  if (toggle) toggle.addEventListener('click', toggleMenu);
  if (toggleFloat) toggleFloat.addEventListener('click', toggleMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // --- LIVE IMPACT COUNTERS (ticks every second like spironet.com) ---
  // Base values aligned with screenshot; km/swaps climb continuously
  var km = 3373077371;
  var swaps = 61151127;
  var co2 = 248.1;      // K tonnes
  var energy = 126.4;   // GWh

  // Approx rates: ~38 km/sec fleet-wide, ~0.7 swaps/sec (illustrative live feel)
  var kmPerSec = 38;
  var swapsPerSec = 1;
  var co2PerSec = 0.00028;   // slow drift
  var energyPerSec = 0.00014;

  function fmt(n) {
    return Math.floor(n).toLocaleString('en-US');
  }
  function fmtDec(n, d) {
    return n.toFixed(d);
  }

  var elKm = document.getElementById('statKm');
  var elCo2 = document.getElementById('statCo2');
  var elEnergy = document.getElementById('statEnergy');
  var elSwaps = document.getElementById('statSwaps');

  function tick() {
    km += kmPerSec + Math.floor(Math.random() * 5);
    swaps += swapsPerSec + (Math.random() > 0.4 ? 1 : 0);
    co2 += co2PerSec;
    energy += energyPerSec;

    if (elKm) {
      elKm.classList.add('tick');
      elKm.textContent = fmt(km);
      requestAnimationFrame(function () { elKm.classList.remove('tick'); });
    }
    if (elSwaps) elSwaps.textContent = fmt(swaps);
    if (elCo2) elCo2.textContent = fmtDec(co2, 1) + ' K';
    if (elEnergy) elEnergy.textContent = fmtDec(energy, 1) + ' GWh';
  }

  if (elKm) {
    // Initial paint
    elKm.textContent = fmt(km);
    if (elSwaps) elSwaps.textContent = fmt(swaps);
    // Tick every second
    setInterval(tick, 1000);
  }

  // --- Savings slider ---
  var slider = document.getElementById('kmSlider');
  var kmValue = document.getElementById('kmValue');
  var dailySave = document.getElementById('dailySave');
  var yearSave = document.getElementById('yearSave');

  function calcSavings(kmDay) {
    // Scale from 120 km baseline (384 daily / 171838 annual)
    var factor = kmDay / 120;
    var daily = Math.round(384 * factor);
    var annual = Math.round(171838 * factor);
    if (kmValue) kmValue.textContent = kmDay;
    if (dailySave) dailySave.textContent = 'KES ' + daily.toLocaleString();
    if (yearSave) yearSave.innerHTML = 'KES ' + annual.toLocaleString() + '<br>Extra Saved!!';
  }

  if (slider) {
    slider.addEventListener('input', function () {
      calcSavings(+slider.value);
    });
    calcSavings(+slider.value);
  }

  // --- Ownership tabs ---
  var tabs = document.querySelectorAll('.own-tab');
  var panels = {
    lease: document.getElementById('panel-lease'),
    upfront: document.getElementById('panel-upfront'),
    fleet: document.getElementById('panel-fleet')
  };
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var key = tab.getAttribute('data-tab');
      Object.keys(panels).forEach(function (k) {
        if (panels[k]) panels[k].classList.toggle('active', k === key);
      });
    });
  });

  // --- Modals ---
  function openModal(id) {
    var m = document.getElementById(id);
    if (m) {
      m.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeModal(id) {
    var m = document.getElementById(id);
    if (m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  var btnBreakdown = document.getElementById('btnBreakdown');
  var closeBreakdown = document.getElementById('closeBreakdown');
  if (btnBreakdown) btnBreakdown.addEventListener('click', function () { openModal('breakdownModal'); });
  if (closeBreakdown) closeBreakdown.addEventListener('click', function () { closeModal('breakdownModal'); });

  function openLead() { openModal('leadModal'); }
  ['openLeadBtn', 'openLeadBtn2', 'openLeadMobile'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', function (e) {
      e.preventDefault();
      closeMenu();
      openLead();
    });
  });
  var closeLead = document.getElementById('closeLead');
  if (closeLead) closeLead.addEventListener('click', function () { closeModal('leadModal'); });

  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  var leadForm = document.getElementById('leadForm');
  var leadFormWrap = document.getElementById('leadFormWrap');
  var leadThanks = document.getElementById('leadThanks');
  var gotIt = document.getElementById('gotIt');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (leadFormWrap) leadFormWrap.hidden = true;
      if (leadThanks) leadThanks.hidden = false;
    });
  }
  if (gotIt) {
    gotIt.addEventListener('click', function () {
      closeModal('leadModal');
      if (leadFormWrap) leadFormWrap.hidden = false;
      if (leadThanks) leadThanks.hidden = true;
      if (leadForm) leadForm.reset();
    });
  }
})();
