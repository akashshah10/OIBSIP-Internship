document.addEventListener("DOMContentLoaded", function () {
  // =============================================
  // Enhanced Star Background with Full Coverage
  // =============================================
  function createStars() {
    const container = document.querySelector(".star-bg");
    if (!container) return;

    const starCount = 200; // Increased number of stars
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Clear existing dynamic stars
    const existingStars = container.querySelectorAll(".dynamic-star");
    existingStars.forEach((star) => star.remove());

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "dynamic-star";

      // Even distribution across viewport
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random size between 1px and 4px
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random opacity and animation delay
      star.style.opacity = Math.random() * 0.8 + 0.2;
      star.style.animationDelay = `${Math.random() * 5}s`;

      // 30% chance to be a blue star, 70% white
      star.style.background = Math.random() > 0.3 ? "var(--primary)" : "blue";

      // Add glow effect
      star.style.boxShadow = `0 0 ${size * 3}px currentColor`;

      // Random twinkle duration
      star.style.animationDuration = `${5 + Math.random() * 10}s`;

      container.appendChild(star);
    }
  }

  // Initialize stars on load
  createStars();

  // Regenerate stars on window resize with debounce
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createStars, 200);
  });

  // =============================================
  // Typed.js Initialization
  // =============================================
  if (typeof Typed !== "undefined") {
    new Typed(".typed-text", {
      strings: [
        "Akash Kumar Shah",
        "Full-Stack Developer",
        "UI/UX Enthusiast",
        "Tech Innovator",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }

  // =============================================
  // Navigation Highlight Effect
  // =============================================
  const navLinks = document.querySelectorAll(".nav-link");
  const navHighlight = document.createElement("div");
  navHighlight.className = "nav-highlight";
  document.querySelector("nav").appendChild(navHighlight);

  function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    navHighlight.style.width = `${linkCoords.width}px`;
    navHighlight.style.height = "2px";
    navHighlight.style.transform = `translate(${
      linkCoords.left + window.scrollX
    }px, ${linkCoords.bottom + window.scrollY - 2}px)`;
    navHighlight.style.opacity = "1";
    navHighlight.style.background = "var(--primary)";
    navHighlight.style.transition = "all 0.3s ease";
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", highlightLink);
    link.addEventListener("mouseleave", () => {
      navHighlight.style.opacity = "0";
    });
  });

  // =============================================
  // Project Card Tilt Effect
  // =============================================
  const projects = document.querySelectorAll(".project-card");
  projects.forEach((project) => {
    project.addEventListener("mousemove", (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      project.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    project.addEventListener("mouseenter", () => {
      project.style.transition = "none";
    });

    project.addEventListener("mouseleave", () => {
      project.style.transition = "all 0.5s ease";
      project.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  });

  // =============================================
  // Form Submission Handling
  // =============================================
  const form = document.getElementById("connect-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = "Message Sent!";
          submitBtn.style.background = "var(--accent)";
          form.reset();

          setTimeout(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.style.background = "";
            submitBtn.disabled = false;
          }, 2000);
        }, 1500);
      }
    });
  }

  // =============================================
  // Smooth Scrolling for Anchor Links
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // =============================================
  // ScrollReveal Animations (if you're using it)
  // =============================================
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".hero-section", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });

    ScrollReveal().reveal("section", {
      delay: 200,
      distance: "40px",
      origin: "bottom",
      interval: 100,
    });

    ScrollReveal().reveal(".project-card", {
      interval: 100,
      scale: 0.85,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      viewFactor: 0.5,
    });
  }
});
