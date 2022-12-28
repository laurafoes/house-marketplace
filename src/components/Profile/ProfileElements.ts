import styled from "styled-components";
import { Banner, HeroContainer } from "../Hero/HeroElements";
import { InputElement } from "../Input/InputElements";

export const ProfileContainer = styled(HeroContainer)`
    gap: 4rem;
    h3 {
        color: ${props => props.theme.colors.primary}
    }
`

export const ProfileBanner = styled(Banner)`
    background-image: url(/profile.svg);
    background-size: 35%;
    background-position: center;
    background-color: ${props => props.theme.colors.primary};
    background-blend-mode: screen;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ProfileInput = styled(InputElement)`
    border: 1px solid ${props => props.theme.colors.primary};
    margin: 2rem 0;
    padding: 2rem 2rem;
    border-radius: 8px;
`

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
`
