import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../../firebase.config'
import { FormLink, FormSignUp, FormTitle, FormWrapper } from '../AuthForm/AuthFormElements'
import Button from '../Button'
import { Banner, HeroContainer, HeroContent } from '../Hero/HeroElements'
import { InputContainer, InputElement } from '../Input/InputElements'
import { toast } from 'react-toastify'

function ForgotPassword() {
    const [ email, setEmail ] = useState('')

    const onSubmit = async (e: any) => {
        e.preventDefault()

        try{
            const auth = getAuth(app)
            await sendPasswordResetEmail(auth, email)
            toast.success('O e-mail foi enviado')
        } catch(error){
            toast.error('Não foi possível enviar o e-mail.')
            alert(error)
        }
    }

    return (
        <HeroContainer>
            <HeroContent>
                <FormWrapper>
                    <div>
                        <FormTitle>recuperação de senha</FormTitle>
                        <InputContainer>
                                <InputElement
                                    placeholder='Insira seu e-mail'
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                />
                        </InputContainer>
                        <Button
                            variant='primary'
                            type='submit'
                            onClick={onSubmit}
                        >
                            Enviar link de recuperação
                        </Button>
                    </div>
                    <FormSignUp>
                        <FormLink href='/signin'>Fazer o login</FormLink>
                    </FormSignUp>
                </FormWrapper>
            </HeroContent>
            <Banner />
        </HeroContainer>
    )
}

export default ForgotPassword
