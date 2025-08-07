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
    alert("Logged in with Google.");
    navigate('/');
  }
  catch(err){
    setError(err.message);
  }
}
  return (
    <div className='bg-white border-2 w-100 justify-self-center m-4'>
      <h1 className='font-bold text-2xl text-center  m-10' > Login </h1>

      <form onSubmit={handleLogin} className=' m-10 text-center'>
        <input className='border-2'
        type="email" placeholder="Email" value={email} onChange = {(e)=>setEmail(e.target.value)} required/>
        <br />
        <br />
        <input className='border-2'
        type="password" placeholder="Password" value={password} onChange = {(e)=>setPassword(e.target.value)} required/>
        <br />
        <br />
        <button type = "submit" className='bg-blue-500 border-2 rounded hover:bg-blue-700'>{isnewuser?"SignUp":"Login"}</button>
        <br />
        <br />
        <div>
        <hr className=''/>
        <p>or</p>
      </div>
      <br />
        <button onClick={handleGoogleLogin} className='border-2 rounded-3xl p-0.5 '>Login with Google</button>
      </form>
      
      <div className='text-center flex text-xs justify-self-center m-4 p-0'>
        <p>{isnewuser ? "Already have an account": "Don't have an account? "}{''}</p>
        <button type='button' className ='text-center hover:underline' onClick={()=>setIsnewuser(!isnewuser)}>{isnewuser?"Login" : "SignUp"}</button>
      </div>

      {error && <p> {error} </p>}
    </div>
  )
}
