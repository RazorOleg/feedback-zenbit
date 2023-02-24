import React from 'react';
import SignInForm from '@components/SignInForm';
import {Container, ContainerImage, Image} from "@content/styles";


function Content() {
    return (
        <Container>
        <ContainerImage>
            <Image />
        </ContainerImage>
            <SignInForm />
        </Container>
    );
}

export default Content;
