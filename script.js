// --- Likes & Hearts ---
document.querySelectorAll('.reactions').forEach(section => {
  const likeBtn = section.querySelector('.like-btn');
  const heartBtn = section.querySelector('.heart-btn');
  const count = section.querySelector('.count');
  let likes = 0; // Lokal counter per item

  const handleClick = (btn) => {
    likes++;
    count.textContent = likes;

    // Animation: scale & pulse
    btn.style.transform = 'scale(1.3)';
    btn.classList.add('pulse');

    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      btn.classList.remove('pulse');
    }, 300);
  };

  likeBtn.addEventListener('click', () => handleClick(likeBtn));
  heartBtn.addEventListener('click', () => handleClick(heartBtn));
});


// --- Fade-in effect on scroll ---
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




// Din Firebase-konfiguration från projektinställningar
const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DITT_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://DITT_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "DITT_PROJECT_ID",
  storageBucket: "DITT_PROJECT_ID.appspot.com",
  messagingSenderId: "DIN_SENDER_ID",
  appId: "DIN_APP_ID"
};

// Initiera Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Logga in anonymt
firebase.auth().signInAnonymously().catch(console.error);


