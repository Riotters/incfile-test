import React from "react";
import Layout from "../../components/layout";
import Top from "../../components/partials/sections/top";
import SEO from "../../components/seo";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";
import CoachTabs from "../../atomic/sections/type-of-business/coach/coach-tabs";
import TypeOfCoaching from "../../atomic/sections/type-of-business/coach/type-of-coaching";
import BlueContainer from "../../atomic/sections/type-of-business/coach/blue-container";
import CoachBusinessPlan from "../../atomic/sections/type-of-business/coach/coach-business-plan";
import CoachBusinessStructure from "../../atomic/sections/type-of-business/coach/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/coach/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/coach/order-now";
import Regulations from "../../atomic/sections/type-of-business/coach/regulations";
import CoachTaxes from "../../atomic/sections/type-of-business/coach/coach-taxes";
import InsuranceBusiness from "../../atomic/sections/type-of-business/coach/insurance-business";
import UseFulTools from "../../atomic/sections/type-of-business/coach/useful-tools";
import Conclusion from "../../atomic/sections/type-of-business/coach/rocket";

const Coach = () => (
    <Layout>
        <SEO title="What is a Nonprofit Organization? How to Start a Nonprofit"
             description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."/>

        <Top ovalColor="blue" imageName="coach-2" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Become a Life or Business Coach</h1>
            <p>If you can provide practical advice and guidance to help people
                change their perspective, you could have the makings of a great coach.</p>
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

        <CoachTabs />

        <TypeOfCoaching />

        <BlueContainer />

        <CoachBusinessPlan />

        <CoachBusinessStructure />

        <SettingBusiness />

        <OrderNow />

        <Regulations />

        <CoachTaxes />

        <InsuranceBusiness />

        <UseFulTools />

        <Conclusion />
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export default Coach;
