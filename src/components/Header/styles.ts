import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #172234;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  

  @media (max-width: 992px) {
    height: 8vh;
  }
  
`

export const TitleLogo = styled.h1`
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  color: aliceblue;
  width: 10%;

 
  
  @media (max-width: 1400px) {
    font-size: 24px;
    width: 15%;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    width: 20%;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    width: 30%;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0px 100px;
  
  @media (max-width: 1400px) {
    margin: 0px 75px;
  }

  @media (max-width: 992px) {
    margin: 0px 45px;
  }

  @media (max-width: 767px) {
    margin: 0px 25px;
  }
  
`
export const LoginLink = styled(NavLink)`
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #B29F7E;
  text-decoration: none;
  width: 160px;
  height: 44px;
  font-size: 20px;
  border: 1px solid #B29F7E;
  border-radius: 5px;
  font-family: 'Merriweather', serif;

  @media (max-width: 1200px) {
    width: 140px;
    height: 40px;
    font-size: 18px;
  }

  @media (max-width: 992px) {
    width: 100px;
    height: 36px;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    width: 80px;
    height: 32px;
  }
`

export const FlexAuthContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 992px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 70%;
  }
  
`
export const SignUpLink = styled(NavLink)`
  margin: 0px 0px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-decoration: none;
  width: 160px;
  height: 44px;
  background-color: #B29F7E;
  font-size: 20px;
  border: 1px solid #B29F7E;
  border-radius: 5px;
  font-family: 'Merriweather', serif;

  @media (max-width: 1200px) {
    width: 140px;
    height: 40px;
    font-size: 18px;
  }

  @media (max-width: 992px) {
    width: 100px;
    height: 36px;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    width: 80px;
    height: 32px;
  }
`