import React from "react";
import Header from "../components/Header";
import {Container, ContainerImage, Image} from "../components/Content/styles";
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