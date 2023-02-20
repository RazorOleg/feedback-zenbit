import styled from "styled-components";
import city from "../../assets/mainCity.jpg";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
`

export const ContainerImage = styled.div`
  background-image: url(${city});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const MainContentTitle = styled.h1`
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  margin: 0px;
  text-align: center;
  color: #FFFFFF;
`
export const MainContentMessage = styled.h2`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  width: 40%;
  padding: 20px 0px;
  margin: 0px;
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
`