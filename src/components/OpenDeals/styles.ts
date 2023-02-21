import styled from "styled-components";
import firstDeal from '../../assets/firstDeal.jpg'
import secondDeal from '../../assets/secondDeal.jpg'
import thirdDeal from '../../assets/thirdDeal.jpg'
import fourthDeal from '../../assets/fourthDeal.jpg'

export const Container = styled.div`
  background-color: #E5E5E5;
  padding: 20px 80px;
`

export const Title = styled.h1`
  color: #B29F7E;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
`

export const FlexDealsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 80%;
`
export const DealContainer = styled.div`
    width: 49.5%;
    height: 40vh;
    position: relative;
    margin-bottom: 20px; //ask  
`

export const ContainerImage = styled.div<{city : string}>`
    background-image: url(${props => props.city});
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`

export const DealTitle = styled.div`
    font-family: 'Merriweather', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    color: #FFFFFF;
    padding: 5px 0px;
`
export const InfoContainer = styled.div`
    position: absolute;
    bottom: 5%;
    width: 90%;
    padding: 0px 30px;
`

export const InfoDescContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
`

export const InfoPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
`
export const InfoYieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const InfoSoldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const DealInfo = styled.div`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    padding: 5px 0px;
`

