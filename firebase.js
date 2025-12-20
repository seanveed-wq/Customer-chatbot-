// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgnOwaGPfpBzbWf7X5tLT3wLCB_W3dYlM",
  authDomain: "customer-support-chatbot-73466.firebaseapp.com",
  projectId: "customer-support-chatbot-73466",
  storageBucket: "customer-support-chatbot-73466.firebasestorage.app",
  messagingSenderId: "593044748916",
  appId: "1:593044748916:web:4bd72dd1693315eaf0af21",
  measurementId: "G-XWCHPMD8Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
