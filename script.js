document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Generic form handler for enquiry.html and contact.html
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const statusElement = form.querySelector(".form-status");
      if (form.checkValidity()) {
        if (statusElement) {
          statusElement.textContent = "Thank you! Your submission has been received successfully.";
          statusElement.classList.add("success");
        }
        form.reset();
      } else {
        if (statusElement) {
          statusElement.textContent = "Please fill in all required fields correctly before submitting.";
          statusElement.classList.remove("success");
          statusElement.style.display = "block";
          statusElement.style.background = "#fde8e8";
          statusElement.style.border = "1px solid #c53030";
          statusElement.style.color = "#9b2c2c";
        }
      }
    });
  });
});