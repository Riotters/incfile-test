import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";
import {Heading} from "../../atomic/atoms/typography/heading";
import TheArtOfBootstrapping from "../../atomic/sections/type-of-business/with-no-money-business/the-art-of-bootstrapping";
import Conclusion from "../../atomic/sections/general/conclusion";
import Bootstrapping from "../../atomic/sections/type-of-business/with-no-money-business/bootstrapping";
import LackOfMoney from "../../atomic/sections/type-of-business/with-no-money-business/lack-of-money";
import Expecting from "../../atomic/sections/type-of-business/with-no-money-business/expecting";
import TypeBusinessIntroduce from "../../atomic/sections/type-of-business/with-no-money-business/type-business-introduce";
import TypeBusiness from "../../atomic/sections/type-of-business/with-no-money-business/type-business";
import BusinessPlan from "../../atomic/sections/type-of-business/with-no-money-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/with-no-money-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/with-no-money-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/with-no-money-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/with-no-money-business/regulations";
import Taxes from "../../atomic/sections/type-of-business/with-no-money-business/taxes";
import TaxesIntroduce from "../../atomic/sections/type-of-business/with-no-money-business/taxes-introduce";
import ToolsAndLinks from "../../atomic/sections/type-of-business/with-no-money-business/tools";

const WithNoMoneyBusiness = () => (
    <Layout>
        <SEO title="How to Start a Business with Little or No Money"
             description="There’s something very powerful about the idea of starting a business, but what can you do if money is a major obstacle? Many businesses require significant capital expenditure, and if you don’t have the funds to begin your venture, that will be an issue. All is not lost though - with some creative thinking and a slightly different approach, you can “bootstrap” your business with very little cash."/>

        <Top ovalColor="babyblue" imageName="with-no-money-business-main" imageAlt="Mr Bulb with seedling"
             headlineWidth={700}>
            <h1>How to Start a Business with Little or No Money</h1>
            <p>
                There’s something very powerful about the idea of starting a business,
                but what can you do if money is a major obstacle? Many businesses
                require significant capital expenditure, and if you don’t have the funds
                to begin your venture, that will be an issue. All is not lost though -
                with some creative thinking and a slightly different approach,
                you can “bootstrap” your business with very little cash.
            </p>
            <ButtonsBox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow content={{text: "Start Now", url: "/"}} />
            </ButtonsBox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <Bootstrapping />
        
        <LackOfMoney />

        <Expecting />

        <TypeBusinessIntroduce />

        <TypeBusiness />

        <TheArtOfBootstrapping/>

        <BusinessPlan />

        <BusinessStructure />

        <SettingBusiness />

        <OrderNow />

        <Regulations />

        <TaxesIntroduce />

        <Taxes />

        <ToolsAndLinks />

        <Conclusion to={process.env.ORDER_URL + "/form-order-now.php"} buttonTitle="Start your No Money Business with us, today">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                We hope this guide has shown you that starting a business with no money isn’t just possible, it’s practical. You can start with nothing and build something unique that will make a powerful difference in your life and the lives of all the people you touch.
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

export default WithNoMoneyBusiness;
