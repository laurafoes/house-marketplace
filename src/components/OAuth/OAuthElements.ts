import styled from "styled-components";

export const OAuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

export const OAuthTitle = styled.h3`
    margin-top: 2rem;
    align-self: center;
    color: ${props => props.theme.colors.primary}
`

export const GoogleButton = styled.button`
    align-self: center;
    margin-top: 2rem;
    border: none;
    border-radius: 50%;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
    transition: all 300ms;
    width: 64px;
    height: 64px;
    cursor: pointer;
    &:hover{
        scale: 1.1;
    }
`

export const GoogleIcon = styled.img`
    width: 40px;
    height: 40px;
`
