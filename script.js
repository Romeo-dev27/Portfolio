const button = document.getElementById("enterBtn");
const message = document.getElementById("message");

button.addEventListener("click", function (e) {
  e.preventDefault();

  message.textContent = "🚀 Welcome to my journey — Portfolio loading soon...";
});
