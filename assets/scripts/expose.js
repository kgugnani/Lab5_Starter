window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  const horn = document.getElementById("horn-select");
  const hornpic = document.querySelector("#expose img");
  const volumeBar = document.getElementById("volume");
  const volumepic = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const audio = document.querySelector("audio");

  volumeBar.addEventListener("input", function () {
    const volumeamt = volumeBar.value;
    if (volumeamt == 0) {
      volumepic.src = "assets/icons/volume-level-0.svg";
    } 
    else if (volumeamt < 33 && volumeamt > 0) {
      volumepic.src = "assets/icons/volume-level-1.svg";
    } 
    else if (volumeamt < 67 && volumeamt > 33) {
      volumepic.src = "assets/icons/volume-level-2.svg";
    } 
    else {
      volumepic.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = volumeamt / 100;
  });

  horn.addEventListener("change", function () {
    const horntype = horn.value;
    hornpic.src = `assets/images/${horntype}.svg`;
    audio.src = `assets/audio/${horntype}.mp3`;
  });

  

  playButton.addEventListener("click", function () {
    audio.play();
    if (horn.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}