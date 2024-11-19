import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase_init';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading,setloading]=useState(true)

    const provider = new GoogleAuthProvider()

    const GoogleSingup = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetpassword=(email)=>{
        setloading(true)
        return sendPasswordResetEmail(auth,email)
    }

    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloading(false)
        })

        return () => unsubscribe();
    }, [])



    const authinfo = { GoogleSingup, createuser, loginuser,user,logout,forgetpassword,loading }
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