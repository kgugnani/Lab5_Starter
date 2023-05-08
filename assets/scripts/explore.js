window.addEventListener('DOMContentLoaded', init);

function init() {
  const talkwords = document.getElementById('text-to-speak');
  const voiceChosen = document.getElementById('voice-select');
  const pressToTalk = document.querySelector('button');
  const facepic = document.querySelector('img');
  const voicebox = window.speechSynthesis;
  
  function loadVoices() {
    const voices = voicebox.getVoices();
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceChosen.appendChild(option);
    });
  }

  voicebox.addEventListener('voiceschanged', loadVoices);

  function speakText() {
    const words = talkwords.value;
    if (words.trim() === '') {
      return;
    }
    const voiceType = voiceChosen.value;
    const speaks = new SpeechSynthesisUtterance(words);
    const selectedVoice = voicebox.getVoices().find(voice => voice.name === voiceType);
    speaks.voice = selectedVoice;
    facepic.src = 'assets/images/smiling-open.png';
    speaks.addEventListener('end', () => {
      facepic.src = 'assets/images/smiling.png';
    });
    voicebox.speak(speaks);
  }
  voiceChosen.addEventListener('change', speakText);
  pressToTalk.addEventListener('click', speakText); 
}