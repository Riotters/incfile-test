import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import ClientDashboardSection from "../../atomic/sections/contact/client-dashboard-introduction";
import SupportFormSection from "../../atomic/sections/contact/support-form";
import ContactInfoSection from "../../atomic/sections/contact/conatact-info";

// Content
import { existing } from "../../static/contact";

const ExistingClients = () => (
    <Layout>
        <SEO title="Existing Clients | Incfile Customer Service" description="Have a question about your Incfile order or need help with your dashboard? Find useful links or send us a message here." />

        <Top imageName="hero-contact-existing-clients" heightSM="75vh" ovalColor="yellow" alt="existing clients">
            <h1>We're Here To Help</h1>
            <p>Phone support available Monday - Friday from 9am to 6pm CST or submit a question and we'll respond as quickly as possible.</p>
        </Top>

        <ClientDashboardSection content={existing}
            isNewSale={false} />
        <SupportFormSection isNewSale={false} id="js-contact-form" />
        <ContactInfoSection content={existing.phone} isNewSale={false} />
    </Layout>
);

export default ExistingClients;
