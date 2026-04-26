const btn = document.getElementById("enterBtn");
const message = document.getElementById("message");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  message.textContent = "🚀 Projects section coming soon...";
});
