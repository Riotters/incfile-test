import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import {advantages, faqs, top} from "../static/learning-center-entity/oregon-virtual-mailboxes";
import ArizonaStreetAddrVirtualMXAdvantages from "../atomic/sections/learning-center-entity/arizona-virtual-mailboxes/advantages";
import FaqSection from "../atomic/sections/learning-center-entity/arizona-virtual-mailboxes/faqs";
import VirtualMailboxTopSection from "../components/virtual-mailbox/top-section";

const VirtualMailBoxes = () => (
    <Layout>
        <SEO title="Oregon Virtual Mailbox & Mail Scanning Service" description="Need a business address in OR? Our virtual mailbox service gives you a real street address and lets you get your mail no matter where you are. Learn more." />
        <VirtualMailboxTopSection content={top} state="Oregon" />
        <ArizonaStreetAddrVirtualMXAdvantages content={advantages} />
        <FaqSection content={faqs} />
    </Layout>
);

export default VirtualMailBoxes;