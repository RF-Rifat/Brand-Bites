// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7rE4I3IHQr1LqYDqMBD3UIDnsv_PXpcQ",
  authDomain: "brand-bites.firebaseapp.com",
  projectId: "brand-bites",
  storageBucket: "brand-bites.appspot.com",
  messagingSenderId: "697929428927",
  appId: "1:697929428927:web:55b1ff74b27bd39ebd3b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth