// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDFzmMXfLqw2FfTH-k1RCvAhCJCK3lWQ3I',
    authDomain: 'tammat-service.firebaseapp.com',
    projectId: 'tammat-service',
    storageBucket: 'tammat-service.appspot.com',
    messagingSenderId: '196598756572',
    appId: '196598756572:web:993e3b1ba79d4a7bceb019',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;