import React from 'react'
import { EmailIcon, InputContainer, NameIcon, PasswordIcon, InputElement, ViewPassword } from './InputElements'

interface InputProps {
    variant: 'Nome' | 'E-mail' | 'Senha',
    nome?: string,
    email?: string,
    senha?: string,
    dadosFormulario: {
        nome: string;
        email: string;
        senha: string;
    },
    setDadosFormulario: React.Dispatch<React.SetStateAction<{
        nome: string;
        email: string;
        senha: string;
    }>>,
    mostraSenha?: boolean,
    setMostraSenha?: React.Dispatch<React.SetStateAction<boolean>>,
}

function Input({ variant, dadosFormulario, setDadosFormulario, mostraSenha, setMostraSenha }: InputProps ) {

    const renderIcon = ( type: InputProps ) => {
        if (type.variant === 'Nome'){
            return <NameIcon />
        } else if (type.variant === 'E-mail') {
            return <EmailIcon />
        } else { return <PasswordIcon />}
    }

  return (
    <InputContainer>
        { renderIcon(variant) }
        <InputElement
            placeholder={variant}
            name={variant.toLowerCase()}
            onChange={(e) => setDadosFormulario({...dadosFormulario, [e.target.name]: e.target.value})}
            type={mostraSenha ? 'text' : 'password'}
        />
        { variant === 'Senha' ? <ViewPassword
            mostraSenha={mostraSenha}
            onClick={() => setMostraSenha ? setMostraSenha(!mostraSenha) : null}
        /> : null }
    </InputContainer>
  )
}

export default Input
