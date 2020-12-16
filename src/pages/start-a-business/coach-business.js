import React from "react";
import Layout from "../../components/layout";
import Top from "../../atomic/partials/top";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
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
import InsuranceBusinessSection from "../../atomic/sections/type-of-business/coach/insurance-business";
import UseFulTools from "../../atomic/sections/type-of-business/coach/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import { Heading } from "../../atomic/atoms/typography/heading";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";

const CoachBusiness = () => (
  <Layout>
    <SEO
      title="How to Become a Life or Business Coach"
      description="Becoming a professional coach can be a great way to turn your insight and understanding into practical advice. Learn how with our comprehensive guide."
    />

    <Top
      ovalColor="darkblue"
      imageName="coach-2"
      imageAlt="Mr Bulb with seedling"
      headlineWidth={700}
    >
      <h1>How to Become a Life or Business Coach</h1>
      <p>
        Many of us are seeking out independent advice on how we can improve our
        lives or our businesses.
      </p>
      <ButtonsBox>
        <Button
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

    <CoachTabs />

    <TypeOfCoaching />

    <BlueContainer />

    <CoachBusinessPlan />

    <CoachBusinessStructure />

    <SettingBusiness />

    <OrderNow />

    <Regulations />

    <CoachTaxes />

    <InsuranceBusinessSection />

    <UseFulTools />

    <Conclusion
      to={process.env.ORDER_URL + "/form-order-now.php"}
      buttonTitle="Start your Coach Business with us, today"
    >
      <Heading size={3} style={{ fontSize: "40px" }}>
        Conclusion
      </Heading>
      <Paragraph big>
        Helping other people make positive changes in their life or business is
        an amazing service. If you can find a great niche, understand your
        competitors and put together a solid business plan, you will have every
        chance for success.
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

export default CoachBusiness;
