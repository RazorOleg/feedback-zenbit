import React from "react";
import Header from "../components/Header";
import {Container, ContainerImage, Image} from "../components/Content/styles";
import ResetPasswordForm from "../components/ResetPasswordForm";

export function ResetPassword() {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    return (
        <>
            <Header isEmpty={false}/>
            <Container>
                <ContainerImage>
                    <Image />
                </ContainerImage>
                <ResetPasswordForm />
            </Container>
        </>
    );
}