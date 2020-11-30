import React from "react";
import Layout from "../../components/layout";
import Top from "../../atomic/partials/top";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";
import BlueContainer from "../../atomic/sections/type-of-business/social-media-influencer/blue-container";
import SettingBusiness from "../../atomic/sections/type-of-business/social-media-influencer/setting-business";
import Conclusion from "../../atomic/sections/general/conclusion";
import PageTabs from "../../atomic/sections/type-of-business/social-media-influencer/page-tabs";
import BusinessPlan from "../../atomic/sections/type-of-business/social-media-influencer/boutique-business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/social-media-influencer/business-structure";
import Taxes from "../../atomic/sections/type-of-business/social-media-influencer/taxes";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";

const SocialMediaInfluencer = () => (
    <Layout>
        <SEO title="How to Start a Business as a Social Media Influencer"
             description="Want to turn your social media presence into a thriving influencer business? Learn how influencer marketing works, how to build followers and much more."/>

        <Top ovalColor="green" imageName="social-media-influencer" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Business as a Social Media Influencer</h1>
            <p>Influencer marketing is becoming an increasingly popular way
                to promote companies, brands, products and services.</p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{url: "/", text: "Start Now"}}/>
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <PageTabs/>

        <SettingBusiness/>

        <BlueContainer/>

        <BusinessPlan/>

        <BusinessStructure/>

        <Taxes/>

        <Conclusion to={process.env.ORDER_URL + "/form-order-now.php"} buttonTitle="Start your Social Media Influencer Business with us, today">
            <Heading size={3} style={{fontSize: "40px"}}>Conclusion</Heading>
            <Paragraph big>
                Social media has launched the careers of many successful influencer marketers. If you can find a great
                niche, understand your competitors and put together a solid business plan, you will have every chance
                for success
            </Paragraph>
        </Conclusion>
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export default SocialMediaInfluencer;
