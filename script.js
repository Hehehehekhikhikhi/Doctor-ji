// candle switch
const candleSwitch = document.getElementById('candleSwitch');
const flame = document.getElementById('flame');
const hint = document.getElementById('hint');
const cakeFrame = document.getElementById('cakeFrame');

candleSwitch.addEventListener('change', () => {
  if (candleSwitch.checked) {
    flame.classList.add('out');
    cakeFrame.classList.add('blown');
    hint.textContent = 'yay! make a wish, Luna 🌸💫';
  } else {
    flame.classList.remove('out');
    cakeFrame.classList.remove('blown');
    hint.textContent = 'flip the switch to blow it out 💫';
  }
});

// gift box
const gift = document.getElementById('gift');
gift.addEventListener('click', () => {
  gift.classList.toggle('open');
});

// floating background emojis
const floatEmojis = ['💗', '✨', '🐾', '💫', '🎀', '🌸'];
const floatiesContainer = document.getElementById('floaties');

for (let i = 0; i < 18; i++) {
  const span = document.createElement('span');
  span.textContent = floatEmojis[Math.floor(Math.random() * floatEmojis.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
  const duration = 8 + Math.random() * 10;
  span.style.animationDuration = duration + 's';
  span.style.animationDelay = (Math.random() * duration) + 's';
  floatiesContainer.appendChild(span);
}
