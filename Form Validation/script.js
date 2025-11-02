// Fetch form and input elements

// Add submit event listener to the form

// Validate each field on form submission

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  let valid = true;

  if (nameValue === "") {
    setError(nameInput, "Full name is required");
    valid = false;
  } else {
    setSuccess(nameInput);
  }

  if (emailValue === "") {
    setError(emailInput, "Email is required");
    valid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "Enter a valid email address");
    valid = false;
  } else {
    setSuccess(emailInput);
  }

  if (passwordValue === "") {
    setError(passwordInput, "Password is required");
    valid = false;
  } else if (passwordValue.length < 6) {
    setError(passwordInput, "Password must be at least 6 characters");
    valid = false;
  } else {
    setSuccess(passwordInput);
  }

  if (valid) {
    alert("Welcome to the Spider-Verse, Web-Slinger!");
    form.reset();
    clearStyles();
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector(".error-message");
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
  errorMsg.textContent = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector(".error-message");
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
  errorMsg.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearStyles() {
  document.querySelectorAll(".form-group").forEach((group) => {
    group.classList.remove("success");
    group.classList.remove("error");
    group.querySelector(".error-message").textContent = "";
  });
}

