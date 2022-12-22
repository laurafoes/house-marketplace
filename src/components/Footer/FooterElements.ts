import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 3rem 10rem 6rem;
    background-color: ${props => props.theme.colors.secondaryBg};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    gap: 10rem;
    justify-content: center;
    align-items: center;
`

export const ColWrapper = styled.div`
    width: 100%;
    padding-top: 2rem;
    align-self: flex-start;
`

export const ColTitle = styled.h2`
    margin-bottom: 2rem;
`

export const ItemsWrapper = styled.ul`
    list-style-type: none;
`
export const Item = styled.li`
    padding-bottom: 2rem;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        color: ${props => props.theme.colors.primary}
    }
`

export const SocialMediaWrapper = styled.div`
    margin: 2rem 0;
    display: flex;
    gap: 2rem;
`

export const SocialMediaLink = styled(Link)`
    transition: all 300ms;
    &:hover{
        scale: 1.3;
    }
`
