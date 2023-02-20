import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import {Container, ContainerImage, Image} from "../components/Content/styles";
import SignInForm from "../components/SignInForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

export function ForgotPassword() {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    return (
        <>
            <Header isEmpty={false}/>
            <Container>
                <ContainerImage>
                    <Image />
                </ContainerImage>
                <ForgotPasswordForm />
            </Container>
        </>
    );
}