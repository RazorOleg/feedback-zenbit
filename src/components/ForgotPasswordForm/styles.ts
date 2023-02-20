import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const ContainerForm = styled.div`
    height: 90vh;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AuthForm = styled.div`
    width: 50%;
`

export const AuthInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

export const Input = styled.input`
    width: 100%;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    height: 48px;
    background-color: #E0E0E0;
`

export const AuthForgotPasswordTitle = styled.div`
    font-family: 'Merriweather', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
`

export const AuthFullNameTitle = styled.div`
    font-family: 'Merriweather', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    padding-top: 20px;
`

export const Error = styled.span`
  font-size: 14px;
  color: red;
  font-style: italic;
  font-family: 'Lato', sans-serif;
`
export const    AuthSendButton = styled.input`
  :disabled {
    background: gray;
    color: black;
  }

  background: #B29F7E;
  border-radius: 5px;
  height: 44px;
  width: 100%;
  margin-top: 30px;
  border-width: 0;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  color: #FFFFFF;
`
/*
export const ResetPasswordLink = styled(NavLink)`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  text-decoration: none;
`

export const AuthSendInput = styled.div`
  :disabled {
    background: gray;
    color: black;
  }
  
  display: flex;
  justify-content: center;
  align-items: center;
  background: #B29F7E;
  border-radius: 5px;
  height: 44px;
  width: 100%;
  margin-top: 30px;
  border-width: 0;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  color: #FFFFFF;
`*/
