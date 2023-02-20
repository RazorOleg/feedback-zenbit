import React from 'react';
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import OpenDeals from "../components/OpenDeals";

function Main() {
    return (
        <>
            <Header isEmpty={true}/>
            <MainContent />
            <OpenDeals/>
        </>
    );
}

export default Main;