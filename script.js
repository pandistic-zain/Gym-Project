(function () {
  "use strict";

  // Wait for the DOM to be ready
  document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("#navbar ul li a");

    navLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.getElementById("navbar").offsetHeight,
        behavior: "smooth",
      });
    }

    // Form submission handling
    const form = document.querySelector("#contact-box form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Fetch form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      // Perform form validation (you can add your own validation logic)

      // Placeholder for sending data to a server (backend)

      form.reset();

      // Optionally, display a success message or perform any other post-submission action
      alert("Form submitted successfully!");
    });

    // Services-Box handling
    const wears = document.getElementById("Wears");
    const supplements = document.getElementById("Supplements");
    const trainer = document.getElementById("Trainer");

    wears.addEventListener("click", function () {
      window.location.href = "https://www.gymarmour.co/";
    });

    supplements.addEventListener("click", function () {
      window.location.href = "https://www.bravonutrition.pk/";
    });

    trainer.addEventListener("click", function () {
      window.location.href = "https://www.movenfit.pk/";
    });
  });
})();
