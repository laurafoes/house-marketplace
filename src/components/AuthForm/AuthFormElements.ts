import Link from "next/link";
import styled from "styled-components";

import { Banner } from "../Hero/HeroElements";

export const SignInBanner = styled(Banner)`
    background-image: url('/signin-banner.jpg');
`

export const FormWrapper = styled.section`
    background: rgba(240, 237, 238, 0.6);
    transform: translate(45%, 0px);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 4rem;
    width: 100%;
    height: auto;
    min-width: 540px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
`

export const FormTitle = styled.h2`
    color: ${props => props.theme.colors.primary};
    font-size: 36px;
`
export const FormLink = styled(Link)`
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    margin-bottom: 2rem;
    float: right;
    transition: all 300ms;
    &:hover{
        color: ${props => props.theme.colors.secondary};
    }
`
export const FormSignUp = styled.div`
    align-self: center;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`
