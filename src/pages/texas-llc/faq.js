import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import styled from 'styled-components'

// Components
import Top from '../../atomic/states-llc/top'
import RatingRow from "../../atomic/atoms/boxes/rating-row"
import CartBlock from "../../atomic/molecules/blocks/cart-block"
import RatingBlock from "../../atomic/molecules/blocks/rating-block"
import ContentHeader from '../../atomic/states-llc/taxes-header';
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import WrapperContent from '../../atomic/states-llc/wrapper-content'
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket"

// Content
import { tabPages, rocket } from "../../static/states-llc/texas/general";
import { businessTaxesPageContent } from "../../static/states-llc/texas/business-taxes";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 769px) {
        flex-direction: ${props => (props.layout !== "grid" ? "row" : "column")};
    }
`

const TexasBusinessTaxes = () => (
    <Layout>
        <SEO
        title="Texas Business & Sales Taxes | Incfile.com"
        description="Do you have an Texas LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more."
        />

        <Top imageName="mrs-bulb-question" imageAlt="Frequently question" headlineWidth={700} stateName="TX">
            <h1>Frequently Asked Questions About Texas LLCs</h1>
            <p>When you’re starting an LLC in the Lone Star state, you’ll have plenty of questions. We’ve gathered together all of the most frequently asked questions to help you get your Texas LLC up and running. From registering your company in Texas to business licenses and franchise taxes, we’ve got you covered. We’ve answered your questions below and linked extensively to our guides, tools and other services, which make everything fast and easy.</p>
            
            <RatingRow topMargin="0">
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

    <WrapperContent>
        <Wrapper>
        <LeftTabPages content={tabPages} />
        <MainPageContent>asdasd</MainPageContent>
        </Wrapper>
    </WrapperContent>
    
    <Rocket content={rocket} />

  </Layout>
);

export default TexasBusinessTaxes;