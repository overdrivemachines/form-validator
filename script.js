// Helper function to get elements
function $(el) {
  if (el.charAt(0) === "#") {
    // if el begins with # then find element with id
    return document.getElementById(el.substring(1));
  } else {
    return document.querySelector(el);
  }
}

const form = $("#form");
const password1El = $("#password1");
const password2El = $("#password2");
const messageContainer = $(".message-container");
const message = $("#message");

let isValid = false;
let passwordsMatch = false;

// Using Constraint API
function validateForm() {
  isValid = form.checkValidity();

  if (!isValid) {
    // style main message for an error
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }

  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  // form.phone refers to the element with (name="phone")
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
}

function processFormData(e) {
  e.preventDefault();

  // Validate Form
  validateForm();

  // Submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
