import Link from 'next/link'
import React from 'react'
import { MenuItem, MenuItems, NavContainer, UserIcon } from './NavbarElements'

function Navbar() {
  return (
    <NavContainer>
        <Link href={'/'}>
            <h1>o lar.</h1>
        </Link>
        <MenuItems>
            <MenuItem as="a" href="/">Home</MenuItem>
            <MenuItem as="a" href="/sobre">Sobre</MenuItem>
            <MenuItem as="a" href="/explorar">Explorar</MenuItem>
            <MenuItem as="a" href="/ofertas">Ofertas</MenuItem>
            <MenuItem as="a" href="/perfil">Perfil</MenuItem>
        </MenuItems>
        <Link href={'/perfil'}>
            <UserIcon />
        </Link>
    </NavContainer>
  )
}

export default Navbar
