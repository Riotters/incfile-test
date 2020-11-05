import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button-action";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/entity-search/georgia-entity-search/about";
import Search from "../atomic/sections/entity-search/georgia-entity-search/search";
import NewRules from "../atomic/sections/entity-search/georgia-entity-search/new-rules";
import SpecificRules from "../atomic/sections/entity-search/georgia-entity-search/specific-rules";
import StartBusiness from "../atomic/sections/entity-search/georgia-entity-search/start-business";
import Faq from "../atomic/sections/entity-search/georgia-entity-search/faq";
import {scrollToElement } from '../helpers/utils';

//Texts
import { top, about, search, newRules, specificRules, startBusiness, faq } from "../static/entity-search/georgia-entity-search";

const GeorgiaEntitySearch = () => (
    <Layout>
        <SEO title="Georiga Entity Search" description="aaa" />
        <Top imageName="mr-bulb-corporation-california-8302" imageAlt="Mrs Bulb and with checklist" ovalColor="love" headlineWidth="700" textWidth="400">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button onClick={e => scrollToElement(e, 'js-business-name-search-form')} content={top.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </Top>
        <About content={about} />
        <Search content={search} id="js-business-name-search-form" />
        <NewRules content={newRules} />
        <SpecificRules content={specificRules} />
        <StartBusiness content={startBusiness} />
        <Faq content={faq} />
    </Layout>
);

export default GeorgiaEntitySearch;
