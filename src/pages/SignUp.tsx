import React from "react";
import Header from "@components/Header";
import {Container, ContainerImage, Image} from "@components/Content/styles";
import SignUpForm from "@components/SignUpForm";

export function SignUp() {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    return (
        <>
            <Header isEmpty={false}/>
            <Container>
                <ContainerImage>
                    <Image />
                </ContainerImage>
                <SignUpForm />
            </Container>
        </>
    );
}
