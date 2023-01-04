import styled from 'styled-components'
import { IoIosBed } from 'react-icons/io'
import { FaBath } from 'react-icons/fa'

export const ListingContainer = styled.li`
    width: 40%;
    height: 100%;
    padding: 1rem 1.5rem;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    border-radius: 32px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        scale: 1.02;
    }
`

export const ListingImg = styled.img`
    max-width: 300px;
    height: auto;
    border-radius: 24px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
`

export const ListingInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

`

export const ListingPrice = styled.p`
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    margin-top: 2rem;
`

export const ExtraInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`

export const BedroomIcon = styled(IoIosBed)`
    color: ${props => props.theme.colors.text};
    font-size: 20px;
`

export const BathroomIcon = styled(FaBath)`
    color: ${props => props.theme.colors.text};
    font-size: 20px;
`
