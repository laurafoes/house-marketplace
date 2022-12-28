import { getAuth, onAuthStateChanged, updateProfile, User } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { app, db } from '../../firebase.config'
import Badge from '../Badge'
import Button from '../Button'
import { HeroContent } from '../Hero/HeroElements'
import { Loader } from '../Spinner/SpinnerElements'
import { ButtonWrapper, HeaderWrapper, ProfileBanner, ProfileContainer, ProfileInput } from './ProfileElements'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'


function Profile() {
    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ carregando, setCarregando ] = useState(true)
    const [ editar, setEditar ] = useState(false)
    const [ nomeEditado, setNomeEditado ] = useState('')

    const auth = getAuth(app)
    const route = useRouter()

    const checkName = () => {
        if(nome !== '') {
            setNomeEditado(nome)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.displayName && user.email) {
                setNome(user.displayName)
                setEmail(user.email)
                setCarregando(false)
            } else {
                setCarregando(false)
            }
        })

        checkName()
    }, [nome])



    const handleSubmit = async () => {
        setEditar(!editar)
        if(editar === true && auth.currentUser !== null) {
            try {
                if(auth.currentUser.displayName !== nomeEditado) {
                    //att displayname no firebase
                    await updateProfile(auth.currentUser, {
                        displayName: nomeEditado
                    })

                    //att no firestorage
                    const userRef = doc(db, 'users', auth.currentUser.uid)
                    await updateDoc(userRef, {
                        nome: nomeEditado
                    })
                    toast.success('Nome do usuário alterado com sucesso.')
                }
            } catch(error) {
                toast.error('Não foi possível atualizar o usuário.')
            }
        }
    }

    function handleLogout() {
        auth.signOut().then(() => {
            console.log('sucesso!!!')
          }).catch((error) => {
            toast.error('Ocorreu um erro, tente novamente mais tarde.')
          });
        route.push('/signin')
    }

    return (
      <ProfileContainer>
        <HeroContent>
            <HeaderWrapper>
                <h3>DETALHES PESSOAIS</h3>
                <Badge type='submit' onClick={handleSubmit}>
                    { editar ? 'salvar' : 'editar'}
                </Badge>
            </HeaderWrapper>
            {carregando ? <Loader /> : <form>
                <ProfileInput
                    type='text'
                    value={nomeEditado}
                    name='nome'
                    disabled={!editar}
                    onChange={(e) => setNomeEditado(e.target.value)}
                />
                <ProfileInput
                    type='text'
                    value={email}
                    disabled={true}
                />
                <ButtonWrapper>
                    <Button variant='primary' type='button' onClick={handleLogout}>Log out</Button>
                </ButtonWrapper>
            </form>}
        </HeroContent>
        <ProfileBanner />
    </ProfileContainer>
  )
}

export default Profile
