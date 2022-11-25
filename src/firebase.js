// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Tao5c6v31pPBiOrEQl8eFkxu3UmXp1E",
  authDomain: "earth-logs.firebaseapp.com",
  projectId: "earth-logs",
  storageBucket: "earth-logs.appspot.com",
  messagingSenderId: "95163044356",
  appId: "1:95163044356:web:be6a687257b26051621b51",
  measurementId: "G-YV6C02TYE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app}

