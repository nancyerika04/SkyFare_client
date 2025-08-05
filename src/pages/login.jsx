import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase"
import {useNavigate} from "react-router-dom";

export default function login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [isnewuser, setIsnewuser] = useState('');
const navigate = useNavigate();

const handleLogin = async(e)=>{
  e.preventDefault();
  setError('');
  try{
      if(isnewuser){
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign up successful !")
      }
      else{
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
      navigate("/");
  }
  catch(err)
  {
    setError(err.message);
  } 
}

const handleGoogleLogin = async()=>{
  const provider =new GoogleAuthProvider();
  try{
    await signInWithPopup(auth,provider);
    alert("Logged in with Google.")
  }
  catch(err){
    setError(err.message);
  }
}
  return (
    <div>
      <h1> Login </h1>
      <form onSubmit={handleLogin}>
        <input 
        type="email" placeholder="Email" value={email} onChange = {(e)=>setEmail(e.target.value)} required/>
        <input 
        type="password" placeholder="Password" value={password} onChange = {(e)=>setPassword(e.target.value)} required/>
        <button type = "submit">{isnewuser?"SignUp":"Login"}</button>

      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <p>{isnewuser ? "Already have an account": "Don't have an account?"}{''}</p>
      <button type='button' onClick={()=>setIsnewuser(!isnewuser)}>{isnewuser?"Login":"SignUp"}</button>
      {error && <p> {error} </p>}
    </div>
  )
}
