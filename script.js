document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  if (navbar && navLinks) {
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menu-toggle");
    menuBtn.setAttribute("aria-label", "Toggle Navigation");
    menuBtn.innerHTML = "&#9776;"; // Hamburger icon
    navbar.insertBefore(menuBtn, navLinks);

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.innerHTML = navLinks.classList.contains("active") ? "&times;" : "&#9776;";
    });
  }

  // 2. Auto-Highlight Active Navigation Link
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 3. Contact / Enrollment Form Handler
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      setTimeout(() => {
        // Create confirmation banner matching brand colors
        let msgBox = document.getElementById("form-status");
        if (!msgBox) {
          msgBox = document.createElement("div");
          msgBox.id = "form-status";
          msgBox.style.marginTop = "1rem";
          msgBox.style.padding = "0.85rem";
          msgBox.style.borderRadius = "5px";
          msgBox.style.backgroundColor = "#8C2C3F";
          msgBox.style.color = "#FFFFFF";
          msgBox.style.borderLeft = "5px solid #FCB433";
          msgBox.style.fontWeight = "500";
          contactForm.appendChild(msgBox);
        }

        msgBox.textContent = "Thank you! Your inquiry has been received by AIMS Academy. We will contact you shortly.";
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 800);
    });
  }

  // 4. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
