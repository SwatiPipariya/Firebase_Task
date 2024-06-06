import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import './GoogleAuth.css';

const firebaseConfig = {
  apiKey: "AIzaSyDp0YagVgeNQXpmQCV7qyzEZ8DwquGj3h4",
  authDomain: "auth-example-24715.firebaseapp.com",
  projectId: "auth-example-24715",
  storageBucket: "auth-example-24715.appspot.com",
  messagingSenderId: "766819906578",
  appId: "1:766819906578:web:f5a08923573a3e6dd594cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function SignInWithGoogle() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div className="auth-button">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

function SignInWithFacebook() {
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div className="auth-button">
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
    </div>
  );
}

function SignInWithTwitter() {
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div className="auth-button">
      <button onClick={signInWithTwitter}>Sign in with Twitter</button>
    </div>
  );
}

function SignUpWithEmail() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="auth-form">
      <h1>Sign Up with Email</h1>
      <label>
        Email
        <input
          type="email"
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </label>
      <button onClick={signUpWithEmail}>Sign Up</button>
    </div>
  );
}

function LoginWithEmail() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password);
  };

  return (
    <div className="auth-form">
      <h1>Login With Email</h1>
      <label>
        Email
        <input
          type="email"
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </label>
      <button onClick={loginWithEmail}>Login</button>
    </div>
  );
}

function SignOut() {
  return (
    <button className="auth-button" onClick={() => signOut(auth)}>
      Sign out
    </button>
  );
}

function DashBoard() {
  const [user] = useAuthState(auth);
  console.log(user);

  return user ? (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="profile pic" />
    </div>
  ) : null;
}

export default function GoogleAuth() {
  return (
    <div className="auth-container">
      <h1>Authentication Example</h1>
      <SignInWithGoogle />
      <SignInWithFacebook />
      <SignInWithTwitter />
      <div className="email-auth">
        <SignUpWithEmail />
        <LoginWithEmail />
      </div>
      <DashBoard />
    </div>
  );
}
