const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

playButton.addEventListener('click', () => {
    videoPlayer.play();
});

pauseButton.addEventListener('click', () => {
    videoPlayer.pause();
});

stopButton.addEventListener('click', () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
});
