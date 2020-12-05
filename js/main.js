const videoContainer = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');
const playBtn = document.querySelector('.play-btn');

switchBtn.addEventListener('click', function () {
  if (!videoContainer.classList.contains('play')) {
    videoContainer.play();
    playBtn.textContent = 'pause';
    videoContainer.classList.add('play');
  } else {
    videoContainer.pause();
    playBtn.textContent = 'play';
    videoContainer.classList.remove('play');
  }
});
videoContainer.addEventListener('ended', function () {
  videoContainer.load();
  playBtn.textContent = 'play';
  videoContainer.classList.remove('play');
});