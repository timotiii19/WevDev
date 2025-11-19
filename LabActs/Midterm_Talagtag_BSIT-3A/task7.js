document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  // Simple validation
  if(name === '' || email === '' || message === '') {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = 'red';
  } else if (!validateEmail(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    formMessage.style.color = 'green';
    this.reset(); // Clear form fields
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
