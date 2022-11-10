import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, FacebookAuthProvider, updateProfile, signInWithEmailAndPassword } from "firebase/auth"

export const SharedContext = createContext()



const SharedData = ({ children }) => {
    const [user, setUser] = useState({ photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU' })

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
            window.location.reload()
        }).catch((error) => {
            console.error(error)
        });
    }

    // create account 

    const userCreateCall = (name, email, password) => {
        createUserWithEmailAndPassword(auth, name, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                updateUsercall(name)
            })
            .catch((error) => { console.error(error) })
    }



    // log in 
    const logInCall = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                window.location.reload()
                // ...
            })
            .catch((error) => {
                console.error(error)
            });

    }
    // update user 
    const updateUsercall = (name) => {
        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
        }).then(() => {
            console.log('Profile updated!')
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
    const commonData = { named, GoogleSignInConst, user, logOutCall, userCreateCall, updateUsercall, logInCall };
    return (
        <SharedContext.Provider value={commonData}>
            {children}
        </SharedContext.Provider>
    );
};

export default SharedData;