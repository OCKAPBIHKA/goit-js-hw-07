'use strict';
const logForm = document.querySelector('.login-form');

logForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  logForm.reset();
});
