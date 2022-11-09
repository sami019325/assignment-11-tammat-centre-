import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, FacebookAuthProvider, updateProfile, signInWithEmailAndPassword } from "firebase/auth"

export const SharedContext = createContext()



const SharedData = ({ children }) => {
    const [user, setUser] = useState([])

    const auth = getAuth(app)
    // google sign in 
    const googleProviderConst = new GoogleAuthProvider()

    const GoogleSignInConst = () => {
        signInWithPopup(auth, googleProviderConst)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                console.log(user)
            }).catch((error) => { console.error(error) })
    }

    // log out 
    const logOutCall = () => {
        signOut(auth).then(() => {
            console.log('log out successfully')
        }).catch((error) => {
            console.error(error)
        });
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(
            auth, logedInUser => {
                logedInUser && setUser(logedInUser)
            }
        )

    }, [])

    const named = 'sami';
    const commonData = { named, GoogleSignInConst, user, logOutCall };
    return (
        <SharedContext.Provider value={commonData}>
            {children}
        </SharedContext.Provider>
    );
};

export default SharedData;