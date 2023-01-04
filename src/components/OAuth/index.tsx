import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'
import { app, db } from '../../firebase.config'
import { GoogleButton, GoogleIcon, OAuthContainer, OAuthTitle } from './OAuthElements'

function OAuth() {
    const route = useRouter()

    const onGoogleClick = async () => {
        try{
            const auth = getAuth(app)
            const provider = new GoogleAuthProvider()
            const res = await signInWithPopup(auth, provider)
            console.log(res)
            const user = res.user

            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            if(!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    nome: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            route.push('/')
        } catch(error: any) {
            toast.error(error)
        }
    }

  return (
    <OAuthContainer>
      <OAuthTitle>{ route.pathname === '/signin' ? 'Fazer login com Google' : 'Cadastrar com Google' }</OAuthTitle>
      <GoogleButton onClick={onGoogleClick}>
        <GoogleIcon src='/googleicon.png'/>
      </GoogleButton>
    </OAuthContainer>
  )
}

export default OAuth
