import React from 'react';
import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FlexAuthContainer, FlexContainer, LoginLink, SignUpLink, TitleLogo, Wrapper} from './styles';
import {signInSelector} from "../../store/auth/sign-in/sign-in.selector";
import {signUpSelector} from "../../store/auth/sing-up/sign-up.selector";
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
