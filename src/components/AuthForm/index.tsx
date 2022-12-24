import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { HeroContainer, HeroContent } from '../Hero/HeroElements'
import Input from '../Input'
import { FormLink, FormSignUp, FormTitle, FormWrapper, SignInBanner } from './AuthFormElements'

function AuthForm() {
    const [ ehCadastro, setEhCadastro ] = useState(false)
    const [ mostraSenha, setMostraSenha ] = useState(false)
    const [ dadosFormulario, setDadosFormulario ] = useState({
        nome: '',
        email: '',
        senha: ''
    })

    const route = useRouter();

    useEffect(() => {

        if(route.pathname === '/signin') {
            setEhCadastro(false)
        } else if (route.pathname === '/signup') { setEhCadastro(true)}
    })

  return (
    <HeroContainer>
      <HeroContent>
        <FormWrapper>
            <form onSubmit={(e) => e.preventDefault()}>
                <FormTitle>
                    { ehCadastro ? 'inscreva-se ja' : 'faça o login'}
                </FormTitle>
                { ehCadastro ? <Input
                    variant='Nome'
                    dadosFormulario={dadosFormulario}
                    setDadosFormulario={setDadosFormulario}
                /> : null }
                <Input
                    variant='E-mail'
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
