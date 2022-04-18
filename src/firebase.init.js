// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAreOkVo-G36Y4QNZUPxbZRHBUj5Lyl2fw",
  authDomain: "trawell-project-fb6da.firebaseapp.com",
  projectId: "trawell-project-fb6da",
  storageBucket: "trawell-project-fb6da.appspot.com",
  messagingSenderId: "227433198107",
  appId: "1:227433198107:web:2068559c038a9b610d3ebe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
