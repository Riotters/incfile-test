import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import Button from "../atomic/molecules/buttons/button";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";

import {advantages, faqs, top} from "../static/learning-center-entity/virginia-virtual-mailboxes";
import ArizonaStreetAddrVirtualMXAdvantages from "../atomic/sections/learning-center-entity/arizona-virtual-mailboxes/advantages";
import FaqSection from "../atomic/sections/learning-center-entity/arizona-virtual-mailboxes/faqs";

const VirtualMailBoxes = () => (
    <Layout>
        <SEO title="Virginia Virtual Mailbox & Mail Scanning Service" description="Need a business address in VA? Our virtual mailbox service gives you a real street address and lets you get your mail no matter where you are. Learn more." />
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

export default VirtualMailBoxes;