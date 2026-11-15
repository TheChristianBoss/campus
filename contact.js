// Client-side validation for the class practice form.
// This static site has no service that sends contact messages.
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const nameField = document.querySelector("#contact-name");
  const emailField = document.querySelector("#contact-email");
  const messageField = document.querySelector("#contact-message");
  const topicFields = Array.from(document.querySelectorAll('input[name="topic"]'));
  const feedback = document.querySelector("#form-feedback");
  const success = document.querySelector("#form-success");

  function showError(field, id, message) {
    const error = document.getElementById(id);
    field.setAttribute("aria-invalid", "true");
    error.textContent = message;
    error.hidden = false;
  }

  function clearError(field, id) {
    const error = document.getElementById(id);
    field.removeAttribute("aria-invalid");
    error.textContent = "";
    error.hidden = true;
  }

  function clearTopicError() {
    topicFields.forEach((field) => field.removeAttribute("aria-invalid"));
    const error = document.querySelector("#topic-error");
    error.textContent = "";
    error.hidden = true;
  }

  nameField.addEventListener("input", () => clearError(nameField, "name-error"));
  emailField.addEventListener("input", () => clearError(emailField, "email-error"));
  messageField.addEventListener("input", () => clearError(messageField, "message-error"));
  topicFields.forEach((field) => field.addEventListener("change", clearTopicError));

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.hidden = true;
    success.hidden = true;

    let firstInvalid = null;

    if (!nameField.value.trim()) {
      showError(nameField, "name-error", "Please enter your name.");
      firstInvalid ||= nameField;
    } else {
      clearError(nameField, "name-error");
    }

    if (!emailField.value.trim()) {
      showError(emailField, "email-error", "Please enter your email address.");
      firstInvalid ||= emailField;
    } else if (!emailField.validity.valid) {
      showError(emailField, "email-error", "Please enter a valid email address.");
      firstInvalid ||= emailField;
    } else {
      clearError(emailField, "email-error");
    }

    if (!topicFields.some((field) => field.checked)) {
      const error = document.querySelector("#topic-error");
      error.textContent = "Please choose a message topic.";
      error.hidden = false;
      topicFields.forEach((field) => field.setAttribute("aria-invalid", "true"));
      firstInvalid ||= topicFields[0];
    } else {
      clearTopicError();
    }

    if (!messageField.value.trim()) {
      showError(messageField, "message-error", "Please enter a message.");
      firstInvalid ||= messageField;
    } else {
      clearError(messageField, "message-error");
    }

    if (firstInvalid) {
      feedback.textContent = "Please fix the highlighted fields below.";
      feedback.hidden = false;
      firstInvalid.focus();
      return;
    }

    success.textContent = "Your entries look good. This is a practice form, so no message was sent.";
    success.hidden = false;
    success.focus();
  });
}
