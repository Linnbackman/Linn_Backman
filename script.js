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

// ---- Importera Firebase ----
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// ---- Din Firebase-konfiguration ----
const firebaseConfig = {
  apiKey: "AIzaSyBFBHzdnIdOcjVFjqGoDtGutzIsYD8Q_AQ",
  authDomain: "linn-likes.firebaseapp.com",
  databaseURL: "https://linn-likes-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "linn-likes",
  storageBucket: "linn-likes.firebasestorage.app",
  messagingSenderId: "85955666291",
  appId: "1:85955666291:web:347c07a2b3b61b7c2ca506"
};

// ---- Initiera Firebase ----
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ---- Like-funktion ----
document.querySelectorAll('.reactions').forEach((section, index) => {
  const likeBtn = section.querySelector('.like-btn');
  const heartBtn = section.querySelector('.heart-btn');
  const count = section.querySelector('.count');
  const photoId = `photo-${index}`; // unikt ID per verk

  const likesRef = ref(db, `likes/${photoId}`);

  // Hämta tidigare likes
  get(likesRef).then(snapshot => {
    if (snapshot.exists()) {
      count.textContent = snapshot.val();
    } else {
      set(likesRef, 0);
    }
  });

  const updateLikes = () => {
    get(likesRef).then(snapshot => {
      const newLikes = (snapshot.exists() ? snapshot.val() : 0) + 1;
      set(likesRef, newLikes);
      count.textContent = newLikes;
    });
  };

  likeBtn.addEventListener('click', updateLikes);
  heartBtn.addEventListener('click', updateLikes);
});


