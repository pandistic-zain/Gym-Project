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
      // Placeholder for sending data to a server (backend)
      form.reset();
      // Optional
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

    // Personal-Logo handling
    const Instagram = document.getElementById("Instagram");
    const Linkdin = document.getElementById("Linkdin");
    Instagram.addEventListener("click", function () {
      window.location.href = "https://www.instagram.com/pandistic._.zain/";
    });
    Linkdin.addEventListener("click", function () {
      window.location.href =
        "https://www.linkedin.com/in/zain-ul-abideen-b9215a283/";
    });
    // Register-Online handling
    const registerBtn = document.getElementById("Register-btn");

    registerBtn.addEventListener("click", function () {
      window.location.href = "https://forms.gle/w1XZWim3oTgB88qt5";
    });
    // Function to toggle the visibility of the login section
    function toggleLoginSection() {
      const loginSection = document.getElementById("loginSection");
      if (loginSection) {
        loginSection.classList.toggle("active");
      }
    }

    // Function to handle the login attempt
    function attemptLogin(credentials) {
      // Add your login logic here
      // For demonstration purposes, let's assume a simple check for a hardcoded username and password
      const validUsername = "pandistic._.zain";
      const validPassword = "_Zain_56";

      if (
        credentials &&
        credentials.username === validUsername &&
        credentials.password === validPassword
      ) {
        // If login is successful, hide the login section
     
        // You can also add additional logic based on the login result
        console.log("Login successful");
      } else {
        // Handle unsuccessful login attempt, show error message, etc.
        console.log("Login failed");
      }
    }
      const loginButton = document.getElementById("loginBtn");
      if (loginButton) {
        loginButton.addEventListener("click", () => {
          toggleLoginSection();
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const credentials = { username, password };
          const submit = document.getElementById("submit_login");
          submit.addEventListener("click",()=>{
            attemptLogin(credentials);
          });
        });
      }
  });
})();
