// navbar
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});


const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});

// footer
document.querySelectorAll('.footer-links a, .footer-legal a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


const copyEl = document.querySelector('.footer-copy');
if (copyEl) {
  const currentYear = new Date().getFullYear();
  copyEl.innerHTML = copyEl.innerHTML.replace('2024', currentYear);
}

// contact form

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const scriptURL = "https://script.google.com/macros/s/AKfycbxLjaoefupihBPQBGdo6RIacYW2nS1RHoyMrFavbiR22F-dvNI1A5jokLYH42RDB2F9og/exec";

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    fullName: document.getElementById("fullName").value,
    companyName: document.getElementById("companyName").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    requirement: document.getElementById("requirement").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.result === "success") {
      formStatus.textContent = "Inquiry submitted successfully!";
      formStatus.style.color = "green";
      contactForm.reset();
    } else {
      formStatus.textContent = "Submission failed.";
      formStatus.style.color = "red";
    }

  } catch (error) {
    formStatus.textContent = "Network error.";
    formStatus.style.color = "red";
  }
});