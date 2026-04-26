const message = document.getElementById("message");

document.getElementById("enterBtn").addEventListener("click", function (e) {
  e.preventDefault();
  message.textContent = "🐞 Bugs activated!";
});


// 🪲 create bug
function createBug(x, y) {
  const bug = document.createElement("div");
  bug.classList.add("bug");

  bug.style.left = x + "px";
  bug.style.top = y + "px";

  document.body.appendChild(bug);

  moveBug(bug);
}


// 🐞 realistic movement (smooth wandering)
function moveBug(bug) {
  setInterval(() => {
    const x = bug.offsetLeft + (Math.random() * 200 - 100);
    const y = bug.offsetTop + (Math.random() * 200 - 100);

    bug.style.left = Math.max(0, Math.min(window.innerWidth - 40, x)) + "px";
    bug.style.top = Math.max(0, Math.min(window.innerHeight - 40, y)) + "px";
  }, 1000);
}


// click anywhere
document.addEventListener("click", (e) => {
  createBug(e.clientX, e.clientY);
});
