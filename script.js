let score = 0;
const scoreDisplay = document.getElementById("score");

// 🐞 spawn bug that crosses screen fast
function spawnBug() {
  const bug = document.createElement("div");
  bug.classList.add("bug");

  document.body.appendChild(bug);

  const startY = Math.random() * window.innerHeight;
  bug.style.top = startY + "px";
  bug.style.left = "-60px";

  let clickedOnce = false;

  // movement speed
  const speed = 6 + Math.random() * 4;

  function move() {
    let x = bug.offsetLeft + speed;
    bug.style.left = x + "px";

    // remove if out of screen
    if (x > window.innerWidth + 60) {
      bug.remove();
    } else {
      requestAnimationFrame(move);
    }
  }

  move();

  // 👆 click logic (2 clicks to kill)
  bug.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!clickedOnce) {
      clickedOnce = true;
      bug.style.filter = "brightness(2)";
    } else {
      // 💥 POP
      bug.classList.add("pop");

      setTimeout(() => {
        bug.remove();
      }, 300);

      score++;
      scoreDisplay.textContent = "Score: " + score;
    }
  });
}

// 🔁 spawn bugs continuously
setInterval(spawnBug, 700);
