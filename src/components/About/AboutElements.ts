import styled from 'styled-components'
import { Banner, HeroContainer } from '../Hero/HeroElements'

export const AboutContainer = styled(HeroContainer)`
    gap: 12px;
`

export const Subtitle = styled.h3`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.small};
`

export const Title = styled.h2`
    color: ${props => props.theme.colors.primary};
    font-size: 32px;
    &:last-of-type {
        margin-top: 2rem;
    }
`

export const AboutBanner = styled(Banner)`
    background-image: url(/about-banner.jpg);
`
