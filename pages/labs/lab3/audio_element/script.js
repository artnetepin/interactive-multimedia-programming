var audio = document.getElementById('audio');
var volume = document.getElementById('volume');

function startPlayer() {
  audio.play();
}

function stopPlayer() {
  audio.pause();
}

function changeVolume() {
  audio.volume = volume.value;
}

volume.addEventListener("input", changeVolume);
