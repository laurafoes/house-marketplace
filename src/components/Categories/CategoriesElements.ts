import styled from "styled-components";

export const CategoriesContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.primaryBg};
    display: flex;
    flex-direction: column;
`

export const CategoriesWrapper = styled.div`
    background: ${props => props.theme.colors.secondaryBg};
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem;
    margin: 0 auto;
`

export const ExploreWrapper = styled.div`
    width: auto;
    display: flex;
    gap: 1rem;
`

export const OptionsWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5%;
`

export const Rentals = styled.div`
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: url('https://images.pexels.com/photos/7031723/pexels-photo-7031723.jpeg?auto=compress&cs=tinysrgb&w=600') no-repeat, 0px 0px;
    background-size: cover;
    background-position: bottom;
    border-radius: 60px 20px 20px 20px;
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.25);
    &:hover {
        scale: 1.02;
    }
`

export const Sales = styled.div`
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: url('https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat;
    background-size: cover;
    background-position: bottom;
    border-radius: 20px 60px 20px 20px;
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.25);
    &:hover {
        scale: 1.02;
    }
`

export const LabelContainer = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5rem;
    background-color: white;
    opacity: 0.9;
    border-radius: 0px 0px 20px 20px;
`
