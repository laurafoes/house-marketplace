import styled from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    margin-top: -80px;
    padding-top: 80px;
    height: 100vh;
    background-color: ${props => props.theme.colors.primaryBg};
    display: flex;
    justify-content: flex-end;
`

export const Banner = styled.div`
    background-color: aliceblue;
    width: 65%;
    height: 100%;
    border-radius: 60px 0px 0px 20px;
    background-image: url('/hero-banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`
export const HeroContent = styled.div`
    width: 28%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
        color: ${props => props.theme.colors.text}
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 2rem;
`
