import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import styled from "styled-components";
import Top from "../../components/partials/sections/top";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import AirBnb1Tabs from "../../atomic/sections/type-of-business/airbnb/airbnb-1-tabs";
import AirbnbBusinessPlan from "../../atomic/sections/type-of-business/airbnb/airbnb-business-plan";
import AirBnB1BusinessStructure from "../../atomic/sections/type-of-business/airbnb/business-structure";
import BlueContainer from "../../atomic/sections/type-of-business/airbnb/blue-container";
import SettingBusiness from "../../atomic/sections/type-of-business/airbnb/SettingBusiness";
import OrderNow from "../../atomic/sections/type-of-business/airbnb/order-now";
import Regulations from "../../atomic/sections/type-of-business/airbnb/regulations";
import AirbnbTaxes from "../../atomic/sections/type-of-business/airbnb/airbnb-taxes";
import InfoCardsSection from "../../atomic/partials/info-cards-section";
import InsuranceAirBnb from "../../atomic/sections/type-of-business/airbnb/insurance-airbnb";
import AirBnbOwners from "../../atomic/sections/type-of-business/airbnb/airbnb-owners";
import UseFulTools from "../../atomic/sections/type-of-business/airbnb/useful-tools";
import Rocket from "../../atomic/sections/type-of-business/airbnb/rocket";

const Airbnb = () => (
    <Layout>
        <SEO title="What is a Nonprofit Organization? How to Start a Nonprofit"
             description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."/>
        <Top ovalColor="orange" imageName="airbnb" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start an Airbnb</h1>
            <p>Airbnb has only been with us since 2008, but over the last few years,
                it’s turned over half a million people into entrepreneurs.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                    Start Now
                </Button>
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <AirBnb1Tabs/>

        <BlueContainer/>

        <AirbnbBusinessPlan/>

        <AirBnB1BusinessStructure/>

        <SettingBusiness/>

        <OrderNow/>

        <Regulations/>

        <AirbnbTaxes/>

        <InsuranceAirBnb />

        <AirBnbOwners />

        <UseFulTools />

        <Rocket />
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default Airbnb;
