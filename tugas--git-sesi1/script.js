// Modern Landing Page JavaScript
// Ini adalah file JS untuk latihan push ke GitHub

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
    .animate {
        animation: fadeInUp 1s ease-out;
    }

    .nav-active {
        transform: translateX(0%) !important;
    }

    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
        opacity: 0;
    }

    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Form submission (dummy)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! This is a demo form.");
});
