import React from "react";
import Layout from "../../components/layout";
import Top from "../../components/partials/sections/top";
import SEO from "../../components/seo";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";
import BlueContainer from "../../atomic/sections/type-of-business/boutique-clothing-business/blue-container";
import SettingBusiness from "../../atomic/sections/type-of-business/boutique-clothing-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/boutique-clothing-business/order-now";
import Regulations from "../../atomic/sections/type-of-business/boutique-clothing-business/regulations";
import BoutiqueTaxes from "../../atomic/sections/type-of-business/boutique-clothing-business/boutique-taxes";
import InsuranceBusiness from "../../atomic/sections/type-of-business/boutique-clothing-business/insurance-business";
import UseFulTools from "../../atomic/sections/type-of-business/boutique-clothing-business/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BoutiqueClothingTabs
    from "../../atomic/sections/type-of-business/boutique-clothing-business/boutique-clothing-tabs";
import TypeOfBusiness from "../../atomic/sections/type-of-business/boutique-clothing-business/type-of-business";
import BoutiqueBusinessPlan
    from "../../atomic/sections/type-of-business/boutique-clothing-business/boutique-business-plan";
import BoutiqueBusinessStructure
    from "../../atomic/sections/type-of-business/boutique-clothing-business/boutique-business-structure";
import {Heading} from "../../atomic/atoms/typography/heading";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";

const BoutiqueClothingBusiness = () => (
    <Layout>
        <SEO title="How to Start a Traditional or Online Boutique Clothing Business"
             description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."/>

        <Top ovalColor="purple" imageName="bouthique-clothing-main" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Traditional or Online Boutique Clothing Business</h1>
            <p>Fashion and beautiful clothing have always been in demand,
                and if you have an eye for style, a boutique clothing business
                could be ideal for you.</p>
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

        <BoutiqueClothingTabs />

        <TypeOfBusiness/>

        <BlueContainer/>

        <BoutiqueBusinessPlan/>

        <BoutiqueBusinessStructure />

        <SettingBusiness/>

        <OrderNow/>

        <Regulations/>

        <BoutiqueTaxes/>

        <InsuranceBusiness/>

        <UseFulTools/>

        <Conclusion to="/" buttonTitle="Start your Boutique Clothing Business with us, today" width="490px">
            <Heading size={3} style={{fontSize: "48px"}}>
                Conclusion
            </Heading>
            <Paragraph big>
                With a strong eye for style and good business acumen, you can start a successful retail clothing company. If you can find a great niche, understand your competitors and put together a solid business plan, you will have every chance for success.
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

export default BoutiqueClothingBusiness;
