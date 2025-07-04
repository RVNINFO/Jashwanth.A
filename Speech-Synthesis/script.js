const voiceSelect = document.getElementById('voiceSelect');
const textArea = document.getElementById('text');
const rate = document.getElementById('rate');
const pitch = document.getElementById('pitch');
const speakBtn = document.getElementById('speak');
const stopBtn = document.getElementById('stop');

const msg = new SpeechSynthesisUtterance();
let voices = [];


function populateVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}


speechSynthesis.onvoiceschanged = populateVoices;


voiceSelect.addEventListener('change', () => {
  msg.voice = voices.find(voice => voice.name === voiceSelect.value);
});


rate.addEventListener('change', () => msg.rate = rate.value);
pitch.addEventListener('change', () => msg.pitch = pitch.value);

speakBtn.addEventListener('click', () => {
  msg.text = textArea.value;
  speechSynthesis.cancel(); // cancel any current speaking
  speechSynthesis.speak(msg);
});


stopBtn.addEventListener('click', () => {
  speechSynthesis.cancel();
});
