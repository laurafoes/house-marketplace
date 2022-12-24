import React, { ReactNode } from 'react'
import { MainButton } from './ButtonElements'

interface ButtonProps {
    children: ReactNode,
    variant: 'primary' | 'secondary',
    type: 'button' | 'submit'
}

function Button({ children, variant, type }: ButtonProps) {
  return (
    <MainButton variant={variant} type={type}>
        { children }
    </MainButton>
  )
}

export default Button
