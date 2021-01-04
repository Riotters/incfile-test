import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { Heading } from "../../atomic/atoms/typography/heading";
import Conclusion from "../../atomic/sections/general/conclusion";
import Bootstrapping from "../../atomic/sections/type-of-business/summer-business/bootstrapping";
import SummerBusinessIdea from "../../atomic/sections/type-of-business/summer-business/summer-business-idea";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/summer-business/validating-business-idea";
import BusinessPlan from "../../atomic/sections/type-of-business/summer-business/business-plan";
import BusinessStructure from "../../atomic/sections/type-of-business/summer-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/summer-business/setting-business";
import Regulations from "../../atomic/sections/type-of-business/summer-business/regulations";
import Taxes from "../../atomic/sections/type-of-business/summer-business/taxes";
import ToolsAndLinks from "../../atomic/sections/type-of-business/summer-business/tools";
import CompleteCheckListSection from "../../atomic/sections/type-of-business/general/complete-checklist-section";

const SummerBusiness = () => (
    <Layout>
        <SEO
            title="Summer Business Ideas | Starting a Summer Business"
            description="We want to help you get your summer business off the ground! Read our guide for ideas, tips, and important things to know before starting a business."
        />

        <Top
            ovalColor="babyblue"
            imageName="summer-business-main"
            imageAlt="how to start a summer business"
            headlineWidth={700}
        >
            <h1>How to Start a Summer Business</h1>
            <p>
                If you’re not ready to jump into running your own business full time, a
                summer business could be ideal. These types of ventures are seasonal and
                designed around the warmer times of the year, when tourists travel and
                everyone wants to enjoy the sunshine.
      </p>
            <ButtonsBox>
                <Button
                    externalLink
                    theme="primary56"
                    marginMD="0 24px 0 0"
                    arrow
                    content={{
                        url: `${process.env.ORDER_URL}/form-order-now.php`,
                        text: "Start Now",
                    }}
                />
            </ButtonsBox>

            <RatingRow>
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>

        <Bootstrapping />

        <SummerBusinessIdea />

        <ValidatingBusinessIdea />

        <BusinessPlan />

        <BusinessStructure />

        <SettingBusiness />

        <CompleteCheckListSection />

        <Regulations />

        <Taxes />

        <ToolsAndLinks />

        <Conclusion
            to={process.env.ORDER_URL + "/form-order-now.php"}
            buttonTitle="Start your Summer Business with us, today"
        >
            <Heading size={3} style={{ fontSize: "40px" }}>
                Conclusion
      </Heading>
            <Paragraph big>
                A seasonal business is a great way to see if you want to go into
                entrepreneurship full time. Summer businesses are a low-risk way to test
                the waters and see if owning a business is right for you. If you can
                find a great niche, understand your competitors and put together a solid
                business plan, you will have every chance for success.
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

export default SummerBusiness;
