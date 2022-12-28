import styled from "styled-components";

export const BadgeContainer = styled.button`
    border: 1px solid ${props => props.theme.colors.primaryBg};
    border-radius: 20px;
    background-color: ${props => props.theme.colors.primary};
    font-weight: bold;
    color: ${props => props.theme.colors.primaryBg};
    padding: 0.5rem 3rem;
    transition: all 300ms;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};
        border-color: 'transparent';
    }
`
