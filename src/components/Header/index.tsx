import React from 'react';
import { useTranslation } from "react-i18next";
import {FlexAuthContainer, FlexContainer, LoginLink, SignUpLink, TitleLogo, Wrapper} from './styles';
import {NavLink, Route, useNavigate} from "react-router-dom";
import {AuthLinkToLogin} from "../SignInForm/styles";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {signInSelector} from "../../store/auth/sign-in/sign-in.selector";
import {signUpSelector} from "../../store/auth/sing-up/sign-up.selector";
import Main from "../../pages/Main";
import {SignIn} from "../../pages/SignIn";
import {logout} from "../../store/auth/sign-in/sign-in.slice";


function Header({isEmpty} : {isEmpty : boolean}) {
    const { t } = useTranslation();
    const singInToken = useSelector(signInSelector);
    const singUpToken = useSelector(signUpSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <Wrapper>{isEmpty && <FlexContainer>
            <TitleLogo>{t("Header.logo")}</TitleLogo>
            <FlexAuthContainer>
                {singUpToken.token || singInToken.token ? (
                    <LoginLink to={"sign-in"} onClick={handleLogout}>{t("Auth.logOut")}</LoginLink>
                ) : (
                    <LoginLink to={"sign-in"}>{t("Auth.logIn")}</LoginLink>
                )}
            <SignUpLink to={"sign-up"}>{t("Auth.signUp")}</SignUpLink>
            </FlexAuthContainer>
        </FlexContainer>}
        </Wrapper>
    );
}

export default Header;
