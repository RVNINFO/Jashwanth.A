function playSoundByKeyCode(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0; // rewind
  audio.play();
  key.classList.add('playing');
}

function handleKeydown(e) {
  playSoundByKeyCode(e.keyCode);
}

function handleClick(e) {
  const keyDiv = e.currentTarget;
  const keyCode = keyDiv.getAttribute('data-key');
  playSoundByKeyCode(keyCode);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', handleClick);         
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', handleKeydown);    
