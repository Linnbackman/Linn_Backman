document.querySelectorAll('.reactions').forEach(section => {
  const likeBtn = section.querySelector('.like-btn');
  const heartBtn = section.querySelector('.heart-btn');
  const count = section.querySelector('.count');
  let likes = 0;

  likeBtn.addEventListener('click', () => {
    likes++;
    count.textContent = likes;
    likeBtn.style.transform = 'scale(1.3)';
    setTimeout(() => likeBtn.style.transform = 'scale(1)', 200);
  });

  heartBtn.addEventListener('click', () => {
    likes++;
    count.textContent = likes;
    heartBtn.style.transform = 'scale(1.3)';
    setTimeout(() => heartBtn.style.transform = 'scale(1)', 200);
  });
});


// Fade in effect on scroll
const fadeElements = document.querySelectorAll('.art-item, section');

function handleFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleFade);
window.addEventListener('load', handleFade);


likeBtn.addEventListener('click', () => {
  likes++;
  count.textContent = likes;
  likeBtn.classList.add('pulse');
  setTimeout(() => likeBtn.classList.remove('pulse'), 300);
});

heartBtn.addEventListener('click', () => {
  likes++;
  count.textContent = likes;
  heartBtn.classList.add('pulse');
  setTimeout(() => heartBtn.classList.remove('pulse'), 300);
});
