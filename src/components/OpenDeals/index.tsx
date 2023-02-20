import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    Container, DealContainer, DealInfo, DealTitle, FirstContainerImage, FlexDealsContainer,
    FourthContainerImage,
    InfoContainer,
    InfoDescContainer,
    InfoPriceContainer, InfoSoldContainer, InfoYieldContainer,
    SecondContainerImage,
    ThirdContainerImage,
    Title
} from './styles';
import {citySelector} from "../../store/city/city.selector";
import {toast} from "react-toastify";
import {getCityQuery} from "../../store/city/city.slice";


function OpenDeals() {
    const city = useSelector(citySelector);
    const dispatch = useDispatch();
    console.log(city, "cityToken")
    useEffect(() => {
        dispatch(getCityQuery()).then(
            (res: any) => {
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
            <Title>Open Deals</Title>
            <FlexDealsContainer>
                {
                    city.isLoading ? <h1>Loading...</h1> : city.cities.map(
                        (city : any) => (<DealContainer>
                            <FirstContainerImage city={city.img}>
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
                            </FirstContainerImage>
                        </DealContainer>)
                    )
                }
            </FlexDealsContainer>
        </Container>
    );
}

export default OpenDeals;