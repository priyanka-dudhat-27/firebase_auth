/* eslint-disable no-unused-vars */
// src/pages/Login.jsx
import React, { useEffect, useState } from 'react';
import { auth, provider } from '../firebaseConfig'; // Adjust the path to import from firebaseConfig.js
import { signInWithPopup ,signInWithEmailAndPassword } from 'firebase/auth';
import Home from './Home'; // Ensure the path is correct

const Login = () => {
  const [value, setValue] = useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error during login: ", error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  // login with email and password
  const handleLogin=()=>{
    auth.signInWithEmailAndPassword(email, password)
     .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error:', errorCode, errorMessage);
      });
  }


  return (
    <div>

      <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>

      {value 
        ? <Home />
        : <button onClick={handleLoginWithGoogle}>Login with Google</button>
      }
    </div>
  );
};

export default Login;
