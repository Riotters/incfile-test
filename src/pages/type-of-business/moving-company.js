import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../components/partials/sections/top";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";
import MovingCompanyTabs from "../../atomic/sections/type-of-business/moving-company/moving-company-tabs";
import TypeOfMoving from "../../atomic/sections/type-of-business/moving-company/type-of-moving";
import ValidatingBusinessIdea from "../../atomic/sections/type-of-business/moving-company/validating-business";
import MovingBusinessPlan from "../../atomic/sections/type-of-business/moving-company/business-plan";
import MovingBusinessStructure from "../../atomic/sections/type-of-business/moving-company/business-structure";
import BusinessOperations from "../../atomic/sections/type-of-business/moving-company/business-operations";
import OrderNow from "../../atomic/sections/type-of-business/moving-company/order-now";
import Regulations from "../../atomic/sections/type-of-business/moving-company/regulations";
import InsuranceBusiness from "../../atomic/sections/type-of-business/moving-company/insurance-business";
import UseFulTools from "../../atomic/sections/type-of-business/moving-company/useful-tools";
import Conclusion from "../../atomic/sections/general/conclusion";
import BusinessOwners from "../../atomic/sections/type-of-business/moving-company/business-owners";
import TextCenterLayout from "../../atomic/partials/heading-left";

const MovingCompanyPage = () => (
    <Layout>
        <SEO title="Moving Company"/>

        <Top ovalColor="orange" imageName="moving-company-bg" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Moving Company</h1>
            <p>A residential or commercial moving business could be
                a great way for you to start a successful company.</p>
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

        <MovingCompanyTabs />

        <TypeOfMoving />

        <ValidatingBusinessIdea />

        <MovingBusinessPlan />

        <MovingBusinessStructure />

        <BusinessOperations />

        <OrderNow />

        <Regulations />

        <InsuranceBusiness />

        <BusinessOwners />

        <UseFulTools />

        <Conclusion to="/" buttonTitle="Start your Moving Business with us, today">
            <TextCenterLayout headline="Conclusion" text="As you can see, there are some great opportunities to start a successful relocation and moving business. If you can find a great niche, understand your competitors and put together a solid business plan, you will have every chance for success." />
        </Conclusion>
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default MovingCompanyPage;
