import styled from "styled-components";

export const NewsletterContainer = styled.section`
    width: 93%;
    height: 60vh;
    margin: 0 auto 10rem;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
`

export const NewsletterTitle = styled.h1`
    color: ${props => props.theme.colors.primaryBg};
`

export const NewsletterSubtitle = styled.h3`
    color: ${props => props.theme.colors.primaryBg};
    font-weight: 400;
    padding-bottom: 2rem;
`

export const InputContainer = styled.div`
    background-color: ${props => props.theme.colors.primaryBg};
    padding: 1rem;
    width: 33%;
    display: flex;
    justify-content: space-between;
    border: none;
    border-radius: 100px;
`
export const Input = styled.input`
    border: none;
    width: 70%;
    padding: 1rem;
    font-size: medium;
    font-family: 'Quicksand', sans-serif;
    &:focus{
        outline: none;
    }
`

export const InputButton = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryBg};
    border-radius: 100px;
    border: none;
    padding: 1.5rem 4rem;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};
    }
`
