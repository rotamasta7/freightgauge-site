// ── SCROLL NAV SHADOW ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// ── MOBILE NAV ──
const burger = document.querySelector('.nav-burger');
const mobileNav = document.querySelector('.mobile-nav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });
}

// ── FADE-UP ON SCROLL ──
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0 });

  fadeEls.forEach(el => observer.observe(el));

  // Immediately reveal anything already in the viewport on load
  requestAnimationFrame(() => {
    fadeEls.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add('visible');
      }
    });
  });
});
