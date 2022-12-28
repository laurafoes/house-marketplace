import styled from "styled-components";

interface Props {
    variant: 'primary' | 'secondary',
}

export const MainButton = styled.button<Props>`
    background-color: ${({variant}) => variant === 'primary' ? props => props.theme.colors.primary : props => props.theme.colors.primaryBg };
    color: ${({variant}) => variant === 'primary' ? props => props.theme.colors.primaryBg : props => props.theme.colors.text };
    border-color: ${({variant}) => variant === 'primary' ? 'transparent' : props => props.theme.colors.text };
    border-width: 1px;
    border-radius: 8px;
    padding: 1.5rem 2.5rem;
    width: 100%;
    font-family: 'Quicksand', sans-serif;
    transition: all 300ms;
    cursor: pointer;
    &:hover {
        background-color: ${({variant}) => variant === 'primary' ? props => props.theme.colors.secondary : props => props.theme.colors.text };
        color: ${({variant}) => variant === 'primary' ? props => props.theme.colors.primary : props => props.theme.colors.primaryBg };
        border-color: ${({variant}) => variant === 'primary' ? 'transparent' : props => props.theme.colors.text };
    }
`
