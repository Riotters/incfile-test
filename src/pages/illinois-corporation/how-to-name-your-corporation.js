import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import Requirements from "../../atomic/sections/learning-center-entity/state-information-california/requirements";
import LearnMore from "../../atomic/sections/learning-center-entity/state-information-california/learn-more";
import QuickLinks from "../../atomic/sections/learning-center-entity/state-information-california/quick-links";
import Variants from "../../atomic/sections/learning-center-entity/state-information-california/variants";
import Subscription from "../../atomic/sections/learning-center-entity/state-information-california/subscription";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, tabPages, naming, launchBusiness, requirements, learnMore, quickLinks, variants, subscription } from "../../static/learning-center-entity/state-information-illinois";
import LeftTabPages from "../../atomic/sections/choose-your-business/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import ContentMap from "../../atomic/partials/content-map";
import CorporationLayout from "../../atomic/partials/corporation-layout";

const StateInformation = () => (
    <Layout>
        <SEO title="How to Name Your Illinois Corporation | IL Business Name Registration " description="Choosing the right name for your business is vitally important. Read Incfile&#039;s guide to naming corporations in Illinois for everything you need to know." />
        <Top imageName="mr-bulb-corporation-california-8302" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" textWidth="530">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.buttons[0]} theme="primary56" arrow />
            </Buttonsbox>
        </Top>
        <CorporationLayout>
            <LeftTabPages content={tabPages} nonDIY />
            <MainPageContent>
                <ContentMap content={naming} />
            </MainPageContent>
        </CorporationLayout>
        <Rocket content={launchBusiness} />
        <Requirements content={requirements} />
        <LearnMore content={learnMore} />
        <QuickLinks content={quickLinks} />
        <Variants content={variants} />
        <Subscription content={subscription} />
        <Articles />
    </Layout>
);

export default StateInformation;