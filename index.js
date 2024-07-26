const img = document.querySelectorAll("#img");
const botImg = document.querySelectorAll("#img-bot");
const us = document.getElementById("us");
const bs = document.getElementById("bs");
const result = document.getElementById("res");
const hS = document.getElementById("highScore");
const settingBtn = document.getElementById("dasboard-btn");
const setting = document.querySelector(".popup-dasboard");

// players score
let userScore = 0,
  botScore = 0;

// user choice buttons

const removeActive = () => {
  img[0].classList.remove("active");
  img[1].classList.remove("active");
  img[2].classList.remove("active");

  botImg[0].classList.remove("bot-active");
  botImg[1].classList.remove("bot-active");
  botImg[2].classList.remove("bot-active");
};

// User button click events

img[0].addEventListener("click", () => {
  removeActive();
  img[0].classList.add("active");

  checkMove(1);
});
img[1].addEventListener("click", () => {
  removeActive();
  img[1].classList.add("active");

  checkMove(2);
});
img[2].addEventListener("click", () => {
  removeActive();
  img[2].classList.add("active");

  checkMove(3);
});

// start checking move

const checkMove = (n) => {
  const bot = Math.floor(Math.random() * 3) + 1; // Bot choice random number
  //   console.log(`random number is ::: ${rand}`);
  addActive(bot); // active bot button with css

  // stone = 1  / paper = 2 / scissor = 3
  // check (Game Logic)

  if (n == 1 && bot == 3) {
    userScore += 1;
    result.innerHTML = "You Won!";
    result.style.visibility = "visible";
    removeStatus();
  } else if (n == 2 && bot == 1) {
    userScore += 1;
    result.innerHTML = "You Won!";
    result.style.visibility = "visible";

    removeStatus();
  } else if (n == 3 && bot == 2) {
    userScore += 1;

    result.innerHTML = "You Won!";
    result.style.visibility = "visible";

    removeStatus();
  } else if (n == bot) {
    result.innerHTML = "Draw!";
    result.style.visibility = "visible";

    removeStatus();
  } else {
    botScore += 1;
    result.innerHTML = "You Lose!";
    result.style.visibility = "visible";

    removeStatus();
  }

  // score update
  us.innerHTML = userScore;
  bs.innerHTML = botScore;
  highScore();
};

// button activate css

const addActive = (e) => {
  botImg[e - 1].classList.add("bot-active");
};

// restart game with new score

const restart = () => {
  userScore = 0;
  botScore = 0;
  us.innerHTML = userScore;
  bs.innerHTML = botScore;
  result.innerHTML = "";
  result.style.visibility = "hidden";
};

// remove status
const removeStatus = () => {
  setTimeout(() => {
    result.innerHTML = "";
    result.style.visibility = "hidden";
  }, 1000);
};

// Track highest score

let highestScore = 0;

const highScore = () => {
  if (localStorage.getItem("highest_Score")) {
    highestScore = localStorage.getItem("highest_Score");
  }

  if (userScore > highestScore) {
    highestScore = localStorage.getItem("highest_Score");
    localStorage.setItem("highest_Score", userScore);
  }
  showHighScore();
};

window.onload = () => {
  showHighScore();
};

const showHighScore = () => {
  hS.innerHTML = localStorage.getItem("highest_Score");
};

// pop window open close

settingBtn.addEventListener("click", () => {
  if (setting.classList.contains("open-popup")) {
    setting.classList.remove("open-popup");
  } else {
    setting.classList.add("open-popup");
  }
});
