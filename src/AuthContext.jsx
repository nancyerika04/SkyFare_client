import { createContext,useContext,useEffect, useState } from "react";
import React from 'react'
import {auth} from  './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
export const AuthContextFunction = ({children}) => {
  const [user, SetUser] = useState(null);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) =>{
      SetUser(firebaseUser);
    }
    );
  return()=>unsubscribe();
  }, []
  );
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error in AuthContext:", error);
      throw error;
    }
  };
  return (
    <AuthContext.Provider value={{user, signup, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
