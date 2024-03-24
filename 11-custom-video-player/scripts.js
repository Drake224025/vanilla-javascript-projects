// Get HTML elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelector(".player__slider");

// Functions
function togglePlay() {
  this.paused ? video.play() : video.pause();
}
function updateButton() {
  this.paused ? (toggle.innerText = "❚ ❚") : (toggle.innerText = "►");
}

function skipVideo() {
  console.log(this.dataset);
}
// Add EventListeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

console.log(skipButtons);
skipButtons.forEach((skipButton) => {
  skipButton.addEventListener("click", skipVideo);
});
