/* ============================================================
   PORTFOLIO — main.js
   ============================================================
   What this file does:
   1. Adds a class to the header when you scroll (darkens it)
   2. Opens and closes the mobile navigation menu
   3. Fades in elements as you scroll down the page
   4. Smooth scrolls anchor links (backup for older browsers)
   ============================================================ */


/* ============================================================
   1. HEADER SCROLL EFFECT
   — Adds .header--scrolled class when page is scrolled
   — This triggers the darkened nav background in CSS
   ============================================================ */
const header = document.querySelector('.header');

function handleHeaderScroll() {
  if (window.scrollY > 40) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}

// Run on page load in case the user is already scrolled
handleHeaderScroll();

// Run every time the user scrolls
window.addEventListener('scroll', handleHeaderScroll);


/* ============================================================
   2. MOBILE NAVIGATION TOGGLE
   — Clicking the hamburger button opens/closes the nav menu
   ============================================================ */
const navToggle  = document.querySelector('.nav__toggle');
const navList    = document.querySelector('.nav__list');

if (navToggle && navList) {
  navToggle.addEventListener('click', function () {
    // Toggle the .is-open class on both elements
    navToggle.classList.toggle('is-open');
    navList.classList.toggle('is-open');

    // Update accessibility attribute
    const isOpen = navList.classList.contains('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked (good for same-page links)
  navList.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('is-open');
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}


/* ============================================================
   3. SCROLL REVEAL
   — Elements with the class .reveal fade in when scrolled into view
   — Add class="reveal" to any HTML element to animate it in
   ============================================================ */
const revealElements = document.querySelectorAll('.reveal');

// IntersectionObserver fires a callback when elements enter/exit the viewport
const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Add the visible class, which triggers the CSS transition
        entry.target.classList.add('is-visible');

        // Stop watching this element once it has animated in
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,     // triggers when 10% of the element is visible
    rootMargin: '0px 0px -40px 0px' // fires slightly before the element reaches the bottom
  }
);

// Watch every .reveal element
revealElements.forEach(function (el) {
  revealObserver.observe(el);
});


/* ============================================================
   4. BACK TO TOP
   — Clicking the footer's "back to top" link scrolls to page top
   ============================================================ */
const backTopBtn = document.querySelector('.footer__back-top');

if (backTopBtn) {
  backTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ============================================================
   5. ACTIVE NAV LINK HIGHLIGHT (OPTIONAL — beginner tip)
   — Highlights the nav link for the section currently in view
   — Uses IntersectionObserver, same pattern as scroll reveal
   ============================================================ */
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.nav__link[href^="#"]');

const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Remove active from all links
        navLinks.forEach(link => link.style.color = '');

        // Find the matching link and highlight it
        const activeLink = document.querySelector('.nav__link[href="#' + entry.target.id + '"]');
        if (activeLink) {
          activeLink.style.color = 'var(--color-accent)';
        }
      }
    });
  },
  {
    threshold: 0.3 // fires when 30% of the section is visible
  }
);

sections.forEach(function (section) {
  sectionObserver.observe(section);
});
