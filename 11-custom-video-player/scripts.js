// Get HTML elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Functions
function togglePlay() {
  this.paused ? video.play() : video.pause();
}
function updateButton() {
  this.paused ? (toggle.innerText = "❚ ❚") : (toggle.innerText = "►");
}

function skipVideo() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function scrubVideo(e) {
  // offsetX = area of the bar clicked
  // offsetWidth = progress available width
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Add EventListeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((skipButton) => {
  skipButton.addEventListener("click", skipVideo);
});

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
});
ranges.forEach((range) => {
  range.addEventListener("mousemove", handleRangeUpdate);
});
let mouseDown = false;
progress.addEventListener("click", scrubVideo);
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
// progress.addEventListener("mouseout", () => (mouseDown = false));
progress.addEventListener("mousemove", (e) => mouseDown && scrubVideo(e));
