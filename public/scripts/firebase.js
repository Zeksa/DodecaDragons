const firebaseConfig = {
  apiKey: "AIzaSyDKLyOnav9xtChEKsbIHJ-PWZKhHYpxceY",
  authDomain: "dragongame-2c6fb.firebaseapp.com",
  projectId: "dragongame-2c6fb",
  storageBucket: "dragongame-2c6fb.firebasestorage.app",
  messagingSenderId: "1021922892465",
  appId: "1:1021922892465:web:9b266e644dcf4b6d62e090",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

let canSave = false;
const saveDataToDb = (save) => {
  if (!canSave) return;

  db.collection("users").doc("main").set({
    save,
  });
};

const getDataFromDb = () => {
  return new Promise((resolve, reject) => {
    console.log("Getting data from db");
    db.collection("users")
      .doc("main")
      .get()
      .then((doc) => {
        resolve(doc.data().save);
        canSave = true;
      })
      .catch((error) => {
        reject(error);
      });
  });
};
