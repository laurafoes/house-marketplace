import React, { ReactNode } from 'react'
import { MainButton } from './ButtonElements'

interface ButtonProps {
    children: ReactNode,
    variant: 'primary' | 'secondary',
    type: 'button' | 'submit',
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ children, variant, type, onClick }: ButtonProps) {
  return (
    <MainButton variant={variant} type={type} onClick={onClick}>
        { children }
    </MainButton>
  )
}

export default Button
