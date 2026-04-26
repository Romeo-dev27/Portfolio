// Select the button
const enterBtn = document.getElementById("enterBtn");

// Select message area
const message = document.getElementById("message");

// When user clicks button
enterBtn.addEventListener("click", function (event) {
  event.preventDefault(); // stops page reload

  message.textContent = "🚧 Portfolio is under construction... but coming soon!";
});
