import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { updateDoc } from 'firebase/firestore'
import { app, db } from '../firebase.config'
import { useRouter } from 'next/router'
import Profile from '../components/Profile'
import { toast } from 'react-toastify'

function perfil() {
    const auth =  getAuth(app)

    const authUser = () => {
        if(auth.currentUser !== null) {
            return auth.currentUser
        }
    }

    return (
        <>
            { authUser !== null ? <Profile /> : null}
        </>
    )
}

export default perfil
