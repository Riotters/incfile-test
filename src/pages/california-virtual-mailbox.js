import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import Button from "../atomic/molecules/buttons/button";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";

import {advantages, faqs, top} from "../static/learning-center-entity/california-virtual-mailboxes";
import ArizonaStreetAddrVirtualMXAdvantages from "../atomic/sections/learning-center-entity/arizona-virtual-mailboxes/advantages";
import FaqSection from "../atomic/sections/learning-center-entity/arizona-virtual-mailboxes/faqs";

const VirtualMailBoxes = () => (
    <Layout>
        <SEO title="California Virtual Mailbox & Mail Scanning Service" description="Need a business address in CA? Our virtual mailbox service gives you a real street address and lets you get your mail no matter where you are. Learn more." />
        <Top imageName="mr-contact-new-sales-9845" imageAlt="Mrs Bulb New Sales" ovalColor="green" headlineWidth="500" textWidth="800">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </Top>
        <ArizonaStreetAddrVirtualMXAdvantages content={advantages} />
        <FaqSection content={faqs} />
    </Layout>
);

const StepsGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 70px 30px;
    align-items: center;

    @media screen and (max-width: 769px) {
        display: block;
    }

    @media screen and (min-width: 850px) {
        grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
    }

    & > div {
        padding: 72px 40px 40px;
        align-items: flex-start;
        flex-direction: column;
        text-align: left;
        height: 100%;

        @media screen and (min-width: 769px) {
            padding: 72px 40px 40px;
            width: 470px;

            &:nth-child(even) {
                grid-column: 2;
            }
        }
        
        @media screen and (max-width: 769px) {
            margin-top: 70px;
        }
    }
`;

const InnerSection = styled.div`
    position: relative;
    margin-bottom: 100px;
    
    .oval:not(.small) {
        max-width: 100%;
        overflow: hidden;
    }
`;

export default VirtualMailBoxes;