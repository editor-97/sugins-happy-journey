const music = document.getElementById("music");

// START JOURNEY

function startJourney() {

  showPage("memories");

  music.volume = 0.65;

  music.play().catch(() => {
    console.log("Music could not start");
  });

}


// PHOTO MEMORIES

function showWish() {

  showPage("wish");

}


// FINAL SURPRISE

function showFinal() {

  showPage("final");

  sendBalloons();

}


// CHANGE PAGE

function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {

    page.classList.add("hidden");

  });

  document.getElementById(pageId)
    .classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// BALLOONS

function sendBalloons() {

  const emojis = [
    "🎈",
    "💖",
    "✨",
    "🎉",
    "🌸"
  ];

  for (let i = 0; i < 20; i++) {

    const balloon = document.createElement("span");

    balloon.className = "extra-balloon";

    balloon.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    balloon.style.left =
      Math.random() * 100 + "%";

    balloon.style.animationDuration =
      (4 + Math.random() * 4) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {

      balloon.remove();

    }, 8000);

  }

}


// RESTART

function restartJourney() {

  showPage("welcome");

}
