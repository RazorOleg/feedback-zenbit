import React from 'react';
import SignInForm from '../SignInForm';
import {Container, ContainerImage, Image} from "./styles";


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
