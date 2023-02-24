import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    Container, DealContainer, DealInfo, DealTitle, ContainerImage, FlexDealsContainer,
    InfoContainer,
    InfoDescContainer,
    InfoPriceContainer, InfoSoldContainer, InfoYieldContainer,
    Title
} from '@openDeals/styles';
import {citySelector} from "@store/city/city.selector";
import {toast} from "react-toastify";
import {getCityQuery} from "@store/city/city.slice";
import {useTranslation} from "react-i18next";
import {ICity, IResponse} from '@openDeals/type';


function OpenDeals() {
    const { t } = useTranslation();
    const city = useSelector(citySelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCityQuery()).then(
            (res: IResponse) => {
                if (res.error?.message) {
                    toast.error(res.error.message, {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
            },
        );
    }, []);
    return (
        <Container>
            <Title>{t("OpenDeals.openDeals")}</Title>
            <FlexDealsContainer>
                {
                    city.isLoading ? <Title>{t("OpenDeals.loading")}</Title> : city.cities.map(
                        (city : ICity) => (<DealContainer>
                            <ContainerImage city={city.img}>
                                <InfoContainer>
                                    <DealTitle>{city.title}</DealTitle>
                                    <InfoDescContainer>
                                        <InfoPriceContainer>
                                            <DealInfo>{city.price}</DealInfo>
                                            <DealInfo>{city.ticket}</DealInfo>
                                        </InfoPriceContainer>
                                        <InfoYieldContainer>
                                            <DealInfo>{city.yield}</DealInfo>
                                            <DealInfo>{city.day}</DealInfo>
                                        </InfoYieldContainer>
                                        <InfoSoldContainer>
                                            <DealInfo>{city.sold}</DealInfo> 
                                        </InfoSoldContainer>
                                    </InfoDescContainer>
                                </InfoContainer>
                            </ContainerImage>
                        </DealContainer>)
                    )
                }
            </FlexDealsContainer>
        </Container>
    );
}

export default OpenDeals;