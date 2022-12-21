import React, { ReactNode } from 'react'
import { MainButton } from './ButtonElements'

interface ButtonProps {
    children: ReactNode,
    variant: 'primary' | 'secondary',
}

function Button({ children, variant }: ButtonProps) {
  return (
    <MainButton variant={variant}>
        { children }
    </MainButton>
  )
}

export default Button
