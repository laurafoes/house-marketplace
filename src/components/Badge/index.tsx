import React, { ReactNode } from 'react'
import { BadgeContainer } from './BadgeElements'

interface BagdeProps {
    children: ReactNode,
    onClick?: () => void,
    type?: 'button' | 'submit'
}

function Badge({ children, onClick, type }: BagdeProps) {
  return (
    <BadgeContainer onClick={onClick} type={type}>
        { children }
    </BadgeContainer>
  )
}

export default Badge
