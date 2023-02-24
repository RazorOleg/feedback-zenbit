import styled from "styled-components";

export const Container = styled.div`
  background-color: #E5E5E5;
  padding: 20px 80px;

  @media (max-width: 1400px) {
    padding: 20px 75px;
  }

  @media (max-width: 992px) {
    padding: 15px 45px;
  }

  @media (max-width: 767px) {
    padding: 15px 25px;
  }
`

export const Title = styled.h1`
  color: #B29F7E;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;

  @media (max-width: 1400px) {
    font-size: 24px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const FlexDealsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const DealContainer = styled.div`
  width: 49.5%;
  height: 40vh;
  position: relative;
  margin-bottom: 20px; //ask

  @media (max-width: 1400px) {
    height: 32vh;
  }

  @media (max-width: 1100px) {
    height: 28vh;
    margin-bottom: 10px;
  }

  @media (max-width: 850px) {
    height: 26vh;
  }
  
  @media (max-width: 820px) {
    height: 24vh;
  }

  @media (max-width: 780px) {
    height: 22vh;
    margin-bottom: 10px;
  }
  
  @media (max-width: 600px) {
    height: 18vh;
    margin-bottom: 5px;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`

export const ContainerImage = styled.div<{ city: string }>`
  background-image: url(${props => props.city});
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`

export const DealTitle = styled.div`
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  color: #FFFFFF;
  padding: 5px 0px;

  @media (max-width: 1400px) {
    line-height: 32px;
    font-size: 22px;
  }

  @media (max-width: 992px) {
    line-height: 28px;
    font-size: 18px;
    padding: 2px 0px;
  }

  @media (max-width: 767px) {
    line-height: 24px;
    font-size: 14px;
    padding: 0px 0px;
  }
`
export const InfoContainer = styled.div`
  position: absolute;
  bottom: 5%;
  width: 90%;
  padding: 0px 30px;

  @media (max-width: 1400px) {
    padding: 0px 20px;
  }

  @media (max-width: 992px) {
    padding: 0px 15px;
  }
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
  

  @media (max-width: 1100px) {
    font-size: 17px;
    line-height: 20px;
    padding: 2px 0px;
  }
  

  @media (max-width: 790px) {
    font-size: 15px;
  }

  @media (max-width: 680px) {
    font-size: 13px;
    line-height: 18px;
    padding: 0px 0px;
  }

  @media (max-width: 630px) {
    font-size: 12px;
    line-height: 18px;
    padding: 0px 0px;
  }

  @media (max-width: 580px) {
    font-size: 11px;
    line-height: 18px;
    padding: 0px 0px;
  }

  @media (max-width: 420px) {
    line-height: 16px;
    font-size: 11px;
  }

`


