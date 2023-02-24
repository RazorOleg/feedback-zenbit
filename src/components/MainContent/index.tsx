import React from 'react';
import {Container, ContainerImage, MainContentButton, MainContentMessage, MainContentTitle} from '@mainContent/styles';
import {useTranslation} from "react-i18next";

export default function MainContent() {
    const { t } = useTranslation();
    return (
        <Container>
            <ContainerImage>
                <MainContentTitle>{t("MainContent.title")}</MainContentTitle>
                <MainContentMessage>{t("MainContent.message")}
                </MainContentMessage>
                <MainContentButton to={"/sign-in"}>{t("MainContent.getStarted")}</MainContentButton>
            </ContainerImage>
        </Container>
    );
}
