    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
    import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCN0Cl08Jql_1oNHZrhsTH7p8O5Q3F70lM",
      authDomain: "push-notify-1d314.firebaseapp.com",
      projectId: "push-notify-1d314",
      storageBucket: "push-notify-1d314.appspot.com",
      messagingSenderId: "83035658450",
      appId: "1:83035658450:web:e9abb29ae246712431750b",
      measurementId: "G-80JP9NDBZG"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging();

    //function SubscribeUser() {
      Notification.requestPermission().then(permission => {
          if(permission == 'granted') {
            getToken(messaging, { vapidKey: 'BLQ8AuEDg4MH-IUenDW0OYbNXPRjuEIvp7yC4N-qxTFCly9J5_4ZlUJnjmJxl60dVEbF7fbY4ta1xGWaDFKEQ5A' }).then((currentToken) => {
                if (currentToken) {
                  console.log(currentToken);
                  document.getElementById('tokenID').innerHTML = currentToken;
                } else {
                  // Show permission request UI
                  console.log('No registration token available. Request permission to generate one.');
                  // ...
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
          }
      })
    //}

    document.querySelector('button').addEventListener('click', SubscribeUser);