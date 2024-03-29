import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVduEn74v20V_WkrlH3vvFAXR6L6_vIYo",
  authDomain: "bgr-login.firebaseapp.com",
  projectId: "bgr-login",
  storageBucket: "bgr-login.appspot.com",
  messagingSenderId: "740972691618",
  appId: "1:740972691618:web:00836c59f86b52ea7317fb",
  measurementId: "G-RYKPY0QHLY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submitButton = document.getElementById("submit");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");

var email, password;


submitButton.addEventListener("click", function() {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.replace('https://bg-records.com/account#' + email + '#success#' + user.uid)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
          if (errorCode === "auth/user-disabled") {
          document.write("Hello!, Your BG Records Artist account has been banned for violating our policies. <br> Please contact bans@bg-records.com if you belive this is a mistake (Please send the email using the email your BG Records account is registered on) INFO:" + errorCode);
          }
          if (errorCode === "auth/user-not-found") {
          document.write("Hello!, This account does not exist! INFO:" + errorCode);
          }
    });
});
