// Remove loading animation after 2 seconds
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
});

// Custom Audio Player
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseButton.textContent = '▶️';
  }
});

// Show IP Address on Click
const ipElement = document.getElementById('ip');

fetch('https://api.ipify.org?format=json')
  .then((response) => response.json())
  .then((data) => {
    ipElement.addEventListener('click', () => {
      ipElement.textContent = data.ip;
      ipElement.classList.remove('blurred');
    });
  });
