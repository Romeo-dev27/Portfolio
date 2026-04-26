const message = document.getElementById("message");

// Button click message
document.getElementById("enterBtn").addEventListener("click", function (e) {
  e.preventDefault();
  message.textContent = "🚧 Welcome! Bugs are now active...";
});


// 🐞 Create bug
function createBug(x, y) {
  const bug = document.createElement("div");
  bug.classList.add("bug");

  bug.style.left = x + "px";
  bug.style.top = y + "px";

  document.body.appendChild(bug);

  moveBug(bug);
}


// 🐛 Move bug randomly
function moveBug(bug) {
  setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    bug.style.left = x + "px";
    bug.style.top = y + "px";
  }, 800);
}


// 🖱️ Click anywhere to spawn bug
document.addEventListener("click", function (e) {
  createBug(e.clientX, e.clientY);
});
