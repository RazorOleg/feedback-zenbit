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
`

export const TitleLogo = styled.h1`
    font-family: 'Merriweather', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    color: aliceblue;
    width: 10%;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0px 100px;
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

  border: 1px solid #B29F7E;
  border-radius: 5px;
  font-family: 'Merriweather', serif;
`

export const FlexAuthContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
export const SignUpLink = styled(NavLink)`
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-decoration: none;
  width: 160px;
  height: 44px;
  background-color: #B29F7E;
  
  border: 1px solid #B29F7E;
  border-radius: 5px;
  font-family: 'Merriweather', serif;
`