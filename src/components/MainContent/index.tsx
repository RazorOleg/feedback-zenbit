import React from 'react';
import {Container, ContainerImage, MainContentButton, MainContentMessage, MainContentTitle} from './styles';
import {t} from "i18next";

export default function MainContent() {
    return (
        <Container>
            <ContainerImage>
            <MainContentTitle>The chemical negatively charged</MainContentTitle>
            <MainContentMessage>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while
                the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is
            </MainContentMessage>
            <MainContentButton to={"/sign-in"}>{t("Auth.getStarted")}</MainContentButton>
            </ContainerImage>
        </Container>
    );
}
