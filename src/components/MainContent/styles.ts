import styled from "styled-components";
import city from "../../assets/mainCity.jpg";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  
  @media (max-width: 992px) {
    height: 92vh;
  }
`

export const ContainerImage = styled.div`
  background-image: url(${city});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
`
export const MainContentTitle = styled.h1`
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  margin: 0px;
  text-align: center;
  color: #FFFFFF;
  
  
  @media (max-width: 1200px) {
    padding: 0px 75px;
    font-size: 54px;
  }

  @media (max-width: 992px) {
    font-size: 42px;
    padding: 0px 45px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
    padding: 0px 25px;
  }
`
export const MainContentMessage = styled.h2`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  width: 40%;
  padding: 20px 0px;
  margin: 0px;

  @media (max-width: 1200px) {
    font-size: 24px;
    padding: 20px 75px;
    width: 50%;
  }

  @media (max-width: 992px) {
    font-size: 22px;
    padding: 20px 45px;
    width: 60%;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    padding: 20px 25px;
    width: 70%;
  }

  @media (max-width: 500px) {
    text-align: justify;
  }
`
export const MainContentButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 54px;
  
  text-decoration: none;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  color: white;
  background-color: transparent;

  @media (max-width: 1200px) {
    font-size: 18px;
    width: 150px;
    height: 50px;
  }

  @media (max-width: 992px) {
    font-size: 16px;
    width: 140px;
    height: 45px;
  }

  @media (max-width: 992px) {
    font-size: 16px;
    width: 130px;
    height: 40px;
  }
  
`