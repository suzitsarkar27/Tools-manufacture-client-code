
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHg9OB9w884_2OtxqUqXAMgKOdOmvv5jo",
  authDomain: "tools-manufacturer-client.firebaseapp.com",
  projectId: "tools-manufacturer-client",
  storageBucket: "tools-manufacturer-client.appspot.com",
  messagingSenderId: "357021166339",
  appId: "1:357021166339:web:594ead6d1a342ccd825736"
};


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APPID,
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
