import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import styled from "styled-components";
import Top from "../../components/partials/sections/top";
import About from "../../components/partials/sections/about";
import Search from "../../components/partials/sections/search";
import Faq from "../../components/partials/sections/faq";
import Cta from "../../components/partials/sections/cta";
import Articles from "../../components/partials/sections/articles";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";

const Buttonsbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AirBnb1 = () => (
    <Layout>
        <SEO title="What is a Nonprofit Organization? How to Start a Nonprofit"
             description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."/>
        <Top imageName="nonprofit" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start an Airbnb</h1>
            <p>Airbnb has only been with us since 2008, but over the last few years,
                it’s turned over half a million people into entrepreneurs.</p>
            <Buttonsbox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                    Start Now
                </Button>
            </Buttonsbox>

            <RatingRow>
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>
        <About/>
        <Search/>
        <Faq/>
        <Cta/>
        <Articles/>
    </Layout>
);

export default AirBnb1;
