document.addEventListener("DOMContentLoaded", () => {
  // Loading animation
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.style.display = "none";
  }, 2000);

  // Audio Player Functionality
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const stopButton = document.getElementById("stop");
  const progressBar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");
  const currentTimeDisplay = document.getElementById("current-time");
  const durationDisplay = document.getElementById("duration");

  playButton.addEventListener("click", () => audio.play());
  pauseButton.addEventListener("click", () => audio.pause());
  stopButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
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
