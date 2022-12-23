import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { HeroContainer, HeroContent } from '../Hero/HeroElements'
import Input from '../Input'
import { FormLink, FormSignUp, FormTitle, FormWrapper, SignInBanner } from './SignInElements'

function SignIn() {
    const [ mostraSenha, setMostraSenha ] = useState(false)
    const [ dadosFormulario, setDadosFormulario ] = useState({
        nome: '',
        email: '',
        senha: ''
    })

    useEffect(() => {
        console.log(dadosFormulario)

    }, [dadosFormulario])

  return (
    <HeroContainer>
      <HeroContent>
        <FormWrapper>
            <FormTitle>
                increva-se já
            </FormTitle>
            <Input
                variant='Nome'
                dadosFormulario={dadosFormulario}
                setDadosFormulario={setDadosFormulario}
            />
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
            <Button variant='primary'>
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
        </FormWrapper>
      </HeroContent>
      <SignInBanner />
    </HeroContainer>
  )
}

export default SignIn
