import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { HeroContainer, HeroContent } from '../Hero/HeroElements'
import Input from '../Input'
import { setDoc, doc, serverTimestamp, FieldValue } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FormLink, FormSignUp, FormTitle, FormWrapper, SignInBanner } from './AuthFormElements'
import { app, db } from '../../firebase.config'

function AuthForm() {
    const [ ehCadastro, setEhCadastro ] = useState(false)
    const [ mostraSenha, setMostraSenha ] = useState(false)
    const [ dadosFormulario, setDadosFormulario ] = useState({
        nome: '',
        email: '',
        senha: ''
    })

    interface copiaDadosFormulario {
        nome: string,
        email: string,
        senha?: string,
        timestamp?: FieldValue
    }

    const route = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const auth = getAuth(app)

        if(ehCadastro) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, dadosFormulario.email, dadosFormulario.senha)

                const user = userCredential.user

                if(auth.currentUser) {
                    updateProfile(auth.currentUser, {
                        displayName: dadosFormulario.nome
                    })
                }

                const copiaDadosFormulario: copiaDadosFormulario = {...dadosFormulario}
                delete copiaDadosFormulario.senha
                copiaDadosFormulario.timestamp = serverTimestamp()

                await setDoc(doc(db, 'users', user.uid), copiaDadosFormulario)

                route.push('/')

            } catch (error) {
                alert(error)
            }
        } else {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, dadosFormulario.email, dadosFormulario.senha)

                if(userCredential.user) {
                    route.push('/')
                }
            } catch(error) {
                alert(error)
            }
        }

    }

    console.log(dadosFormulario)
    useEffect(() => {

        if(route.pathname === '/signin') {
            setEhCadastro(false)
        } else if (route.pathname === '/signup') { setEhCadastro(true)}
    })

  return (
    <HeroContainer>
      <HeroContent>
        <FormWrapper>
            <form onSubmit={onSubmit}>
                <FormTitle>
                    { ehCadastro ? 'inscreva-se ja' : 'faça o login'}
                </FormTitle>
                { ehCadastro ? <Input
                    variant='Nome'
                    dadosFormulario={dadosFormulario}
                    setDadosFormulario={setDadosFormulario}
                /> : null }
                <Input
                    variant='Email'
                    dadosFormulario={dadosFormulario}
                    setDadosFormulario={setDadosFormulario}
                />
                <Input
                    variant='Senha'
                    dadosFormulario={dadosFormulario}
                    setDadosFormulario={setDadosFormulario}
                    mostraSenha={mostraSenha}
                    setMostraSenha={setMostraSenha}
                />
                <FormLink href='/forgotpassword'>
                    Esqueceu sua senha?
                </FormLink>
                <Button
                    variant='primary'
                    type='submit'
                >
                    Acessar
                </Button>
                <FormSignUp>
                    <p>
                        Ainda não possui cadastro?&nbsp;
                        <FormLink href='/signup'>
                            Clique aqui
                        </FormLink>
                    </p>
                </FormSignUp>
            </form>
        </FormWrapper>
      </HeroContent>
      <SignInBanner />
    </HeroContainer>
  )
}

export default AuthForm
