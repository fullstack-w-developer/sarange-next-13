// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyB8ocBSDcXZ0aRmb4QGbBOiVvgNJFs5d-8",
    authDomain: "sarang-2a28d.firebaseapp.com",
    projectId: "sarang-2a28d",
    storageBucket: "sarang-2a28d.appspot.com",
    messagingSenderId: "73266879258",   
    appId: "1:73266879258:web:9c2ae2eea982ea62296aa3",
    measurementId: "G-PBJ0977HLK"  
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});