function checkName() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) return;

  document.getElementById('step1').classList.add('hidden');
  const cheesy = document.getElementById('cheesy');
  cheesy.classList.remove('hidden');

  if (name.toLowerCase() === 'somu') {
    cheesy.innerHTML = `
      <h2>Somu ❤️</h2>
      <p>
        You don’t just have my heart…<br/>
        you ARE my heart 😘
      </p>
    `;
  } else {
    cheesy.innerHTML = `
      <h2>Somu 💕</h2>
      <p>
        You can change the name,<br/>
        but you’ll still be mine forever ❤️<br/>
        No escape 😌
      </p>
    `;
  }

  setTimeout(() => {
    cheesy.classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
  }, 4000);
}

function showLove() {
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('final').classList.remove('hidden');
}

/* Floating hearts generator */
const heartsContainer = document.querySelector('.hearts');
setInterval(() => {
  const heart = document.createElement('span');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (6 + Math.random() * 4) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 9000);
}, 500);
