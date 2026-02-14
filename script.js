



//  Firebase-konfiguration från projektinställningar
const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DITT_PROJECT_ID.firebaseapp.com",document.querySelectorAll('.art-item').forEach(item => {
  const likeBtn = item.querySelector('.like-btn');
  const heartBtn = item.querySelector('.heart-btn');
  const count = item.querySelector('.count');
  const id = item.querySelector('img, video').getAttribute('src'); // unikt ID per item
  const likesRef = db.ref('likes/' + id);

  // Visa nuvarande likes från Firebase
  likesRef.on('value', snapshot => {
    count.textContent = snapshot.val() || 0;
  });

  const addLike = (btn) => {
    likesRef.transaction(current => (current || 0) + 1);
    btn.style.transform = 'scale(1.3)';
    btn.classList.add('pulse');
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      btn.classList.remove('pulse');
    }, 300);
  };

  likeBtn.addEventListener('click', () => addLike(likeBtn));
  heartBtn.addEventListener('click', () => addLike(heartBtn));
});

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



