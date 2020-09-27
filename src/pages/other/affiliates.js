import React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import SEO from "../../components/seo";
//Sections
import Top from "../../atomic/partials/top";
import Button from "../../atomic/molecules/buttons/button";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import OvalSVG from "../../images/ovals/bottom-left-transparent-green3.inline.svg";

import {affiliates, payouts, top} from "../../static/other/affiliates";
import HowItWorksSection from "../../atomic/sections/other/affiliates/how-it-works";
import EnjoyHighestPayouts from "../../atomic/sections/other/affiliates/enjoy-highest-payouts";
import Oval from "../../atomic/atoms/icons/oval";

const VirtualMailBoxes = () => (
    <Layout>
        <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
        <Top imageName="affilitates-top-8164" imageAlt="Affiliates" ovalColor="red-2" headlineWidth="500" textWidth="800">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </Top>
        <Oval className="oval" height="420" width="420" top="0" left="0" y={125}>
            <OvalSVG />
        </Oval>
        <HowItWorksSection content={affiliates} />
        <EnjoyHighestPayouts content={payouts} />
    </Layout>
);

const InnerSection = styled.div`
    position: relative;
    margin-bottom: 100px;
    
    .oval:not(.small) {
        max-width: 100%;
        overflow: hidden;
    }
`;

export default VirtualMailBoxes;