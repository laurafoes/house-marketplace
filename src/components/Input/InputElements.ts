import { FaUserCircle } from "react-icons/fa";
import { BsFillEyeFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import styled from "styled-components";

interface Props {
    mostraSenha: boolean | undefined,
    onClick?: React.MouseEventHandler<SVGElement>
}

export const InputContainer = styled.div`
    background-color: ${props => props.theme.colors.primaryBg};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    margin: 2.5rem 0;
    border-radius: 8px;
`

export const NameIcon = styled(FaUserCircle)`
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
`

export const EmailIcon = styled(MdEmail)`
    font-size: 28px;
    color: ${props => props.theme.colors.primary};
`
export const PasswordIcon = styled(FaLock)`
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
`
export const InputElement = styled.input`
    width: 100%;
    padding: 0.5rem 0;
    margin-left: 2rem;
    border: none;
    outline: none;
    font-family: 'Quicksand', sans-serif;
    font-size: ${props => props.theme.fontSizes.small};
`

export const ViewPassword = styled(BsFillEyeFill)<Props>`
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
    opacity: ${({mostraSenha}) => mostraSenha ? 0.5 : 1 };
`
