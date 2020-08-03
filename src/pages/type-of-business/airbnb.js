import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import styled from "styled-components";
import Top from "../../components/partials/sections/top";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import AirBnb1Tabs from "../../fragments/type-of-business/airbnb-1/airbnb-1-tabs";
import Container from "../../atomic/container";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import {color} from "../../components/styles/colors";
import AirbnbBusinessPlan from "../../fragments/type-of-business/airbnb-1/airbnb-business-plan";
import AirBnB1BusinessStructure from "../../fragments/type-of-business/airbnb-1/business-structure";
import TopImageBox from "../../components/top-image-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import LeftImageRightContent from "../../components/partials/blocks/left-content-right-image";
import BlueContainer from "../../fragments/type-of-business/airbnb-1/blue-container";
import OvalSVGOrange from "../../images/oval-oragen.inline.svg"
import SettingBusiness from "../../fragments/type-of-business/airbnb-1/SettingBusiness";
import OrderNow from "../../fragments/type-of-business/airbnb-1/order-now";
import Regulations from "../../fragments/type-of-business/airbnb-1/regulations";
import AirbnbTaxes from "../../fragments/type-of-business/airbnb-1/airbnb-taxes";

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

        <SettingBusiness />

        <OrderNow />

        <Regulations />

        <AirbnbTaxes />
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
