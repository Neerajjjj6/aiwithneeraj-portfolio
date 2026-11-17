// Progressive enhancement only: the page is fully readable without this file.
(function () {
  'use strict';

  // 1. Scroll reveal with a short stagger for siblings in the same grid.
  var items = document.querySelectorAll('.reveal');
  document.querySelectorAll('.cards, .steps, .work-grid').forEach(function (group) {
    group.querySelectorAll('.reveal').forEach(function (el, i) {
      el.style.setProperty('--d', (i * 90) + 'ms');
    });
  });

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    items.forEach(function (el) { reveal.observe(el); });
  }

  function clearCurrent() {
    document.querySelectorAll('.site-header nav [aria-current]').forEach(function (a) { a.removeAttribute('aria-current'); });
  }

  // 2. Header: add a stronger background once the page has scrolled.
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 12);
    if (window.scrollY < 120) { clearCurrent(); }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // 3. Highlight the nav link of the section currently in view.
  var links = document.querySelectorAll('.site-header nav a[href^="#"]:not(.nav-cta)');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var sections = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = map[entry.target.id];
        if (link) { link.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // 4. Card spotlight follows the pointer (purely visual).
  document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();
