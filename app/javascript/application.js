// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"


// app/assets/javascripts/application.js
document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("user_password");
  const passwordToggle = document.getElementById("password-toggle");

  if (passwordToggle) {
    passwordToggle.addEventListener("click", function () {
      if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.classList.remove("fa-eye");
        passwordToggle.classList.add("fa-eye-slash");
      } else {
        passwordField.type = "password";
        passwordToggle.classList.remove("fa-eye-slash");
        passwordToggle.classList.add("fa-eye");
      }
    });
  }
});
