import styled from "styled-components";
import { FaUserCircle } from 'react-icons/fa'

export const NavContainer = styled.nav`
    background-color: ${props => props.theme.colors.primaryBg};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem;
    margin: 0 auto;
`

export const MenuItems = styled.ul `
    width: 45%;
    height: auto;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
`

export const MenuItem = styled.li `
    cursor: pointer;
    text-transform: uppercase;
    transition: all 300ms;
    letter-spacing: 0.1em;
    &:hover {
        color: ${props => props.theme.colors.secondary}
    }
`

export const UserIcon = styled(FaUserCircle)`
    color: ${props => props.theme.colors.primary};
    font-size: 42px;
`
