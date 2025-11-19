document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const favColor = document.getElementById("favColor").value;
  const birthday = document.getElementById("birthday").value;
  const message = document.getElementById("message");

  // Display a personalized message
  if (name && email) {
    message.innerHTML = `Hello <span style="color:${favColor}">${name}</span>! 🎉<br>
      Your email is <strong>${email}</strong> and your birthday is on <strong>${birthday || 'N/A'}</strong>.`;
  } else {
    message.textContent = "Please fill out all required fields.";
  }
});

// Random background color changer
document.getElementById("changeBgBtn").addEventListener("click", function() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
