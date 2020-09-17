import React from 'react';
import Layout from "../../components/layout";
import styled from 'styled-components';
import SEO from "../../components/seo";

import Top from '../../atomic/states-llc/top';
import Button from "../../atomic/molecules/buttons/button";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
import LeftTabPages from '../../atomic/states-llc/left-tab-pages';
import MainPageContent from '../../atomic/states-llc/page-content';
import WrapperContent from '../../atomic/states-llc/wrapper-content';
import AfterFormingLLCSection from '../../atomic/sections/other/after-forming-llc';

// content
import { tabPages, rocket } from "../../static/states-llc/texas/general";
import { pageContent } from "../../static/other/after-forming-llc";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 769px) {
        flex-direction: ${props => (props.layout !== "grid" ? "row" : "column")};
    }
`

const AfterFormingLLC = () => (
    <Layout>
        <SEO title={pageContent.seo.title} description={pageContent.seo.desc} />

        <Top
            imageName="typewriter-01.inline"
            imageAlt="Frequently question"
            headlineWidth={500} stateName="TX"
            imageWidthLG={40}
            imageOffsetRightLG={0}
        >
            <h1>{pageContent.top.title}</h1>
            <Buttonsbox>
            <Button content={pageContent.top.button} width="500px" theme="primary56" arrow />
            </Buttonsbox>
            <RatingRow topMargin="48">
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>

        <WrapperContent>
            <Wrapper>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <AfterFormingLLCSection content={pageContent.content} />
                </MainPageContent>
            </Wrapper>
        </WrapperContent>

        <Rocket content={rocket} />

    </Layout>
);

export default AfterFormingLLC;