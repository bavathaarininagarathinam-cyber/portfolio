// =========================================================
// SCRIPT.JS - Simple, Beginner-Friendly Interactions
// Features:
// 1. Dark Mode Toggle (with memory using localStorage)
// 2. Smooth Scrolling when clicking navigation links
// 3. Floating "Back to Top" Button (appears on scroll)
// =========================================================

// Wait until the web page has fully loaded its HTML
document.addEventListener('DOMContentLoaded', function () {
  console.log("Portfolio scripts loaded successfully!");

  // ---------------------------------------------------------
  // 1. DARK MODE TOGGLE
  // ---------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Check if the user previously chose dark mode in their browser storage
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) {
      themeToggleBtn.textContent = '☀️ Light';
    }
  }

  // When the toggle button is clicked:
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      // Toggle the 'dark-mode' class on the <body> element
      document.body.classList.toggle('dark-mode');

      // Check whether dark mode is currently active
      const isDarkMode = document.body.classList.contains('dark-mode');

      // Update button text and icon
      if (isDarkMode) {
        themeToggleBtn.textContent = '☀️ Light';
        // Remember user's choice in browser localStorage
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        themeToggleBtn.textContent = '🌙 Dark';
        localStorage.setItem('portfolio-theme', 'light');
      }
    });
  }

  // ---------------------------------------------------------
  // 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
  // ---------------------------------------------------------
  // Select all links whose href begins with '#' (e.g. href="#about", href="#projects")
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      // Get the target section ID (e.g. "#projects")
      const targetId = this.getAttribute('href');

      // Only run if it points to a valid ID (not just an empty '#')
      if (targetId && targetId !== '#') {
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Stop the browser from instantly jumping
          event.preventDefault();

          // Smoothly glide down to the target section
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ---------------------------------------------------------
  // 3. FLOATING "BACK TO TOP" BUTTON
  // ---------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    // Listen for the user scrolling the page
    window.addEventListener('scroll', function () {
      // If user has scrolled down more than 300 pixels, show the button
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        // Otherwise, hide the button when near the top
        backToTopBtn.classList.remove('show');
      }
    });

    // When the "Back to Top" button is clicked:
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth animated scroll up to the top
      });
    });
  }
});
