import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase_init';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)

    const provider = new GoogleAuthProvider()

    const GoogleSingup = () => {
        return signInWithPopup(auth, provider)
    }

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetpassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    const logout=()=>{
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
        })

        return () => unsubscribe();
    }, [])



    const authinfo = { GoogleSingup, createuser, loginuser,user,logout,forgetpassword }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;