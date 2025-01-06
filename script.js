document.addEventListener("DOMContentLoaded", () => {
  // Loading animation
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.style.display = "none";
  }, 2000);

  // Custom audio player
  const audio = document.getElementById("audio");
  const playPauseButton = document.getElementById("play-pause");
  const progressBar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");
  const currentTimeDisplay = document.getElementById("current-time");
  const durationDisplay = document.getElementById("duration");

  playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = "⏸";
    } else {
      audio.pause();
      playPauseButton.textContent = "⏯";
    }
  });

  audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progress.style.width = `${(currentTime / duration) * 100}%`;
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  progressBar.addEventListener("click", (e) => {
    const width = progressBar.offsetWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  });

  // Show IP Address
  const ip = document.getElementById("ip");
  ip.addEventListener("click", () => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        ip.textContent = data.ip;
        ip.classList.remove("blurred");
      });
  });
});
