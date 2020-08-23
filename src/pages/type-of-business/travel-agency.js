import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../components/partials/sections/top";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import styled from "styled-components";

const TravelAgency = () => (
    <Layout>
        <SEO title="How to Start a Travel Agency"
             description="Everyone likes traveling — new horizons, beautiful destinations and unique experiences mean we love packing our bags and spending time away from work and home."/>

        <Top ovalColor="green" imageName="travel-agency" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start a Travel Agency</h1>
            <p>Everyone likes traveling — new horizons, beautiful
                destinations and unique experiences mean we love packing
                our bags and spending time away from work and home.</p>
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
    </Layout>
);

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export default TravelAgency;
