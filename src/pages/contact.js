import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Button from "../components/button";
import ClientDashboardSection from "../atomic/sections/contact/client-dashboard-introduction";
import SupportFormSection from "../atomic/sections/contact/support-form";
import ContactInfoSection from "../atomic/sections/contact/conatact-info";

// Content
import { existing } from "../static/contact";

const Contact = () => (
  <Layout>
    <SEO title="Contact Incfile | Incfile Customer Service" description="Whether you need help with your Incfile dashboard or want to track the status of your order, we'll get you what you need. Contact us today." />

    <Top imageName="hero-contact-existing-clients" heightSM="75vh" ovalColor="yellow" alt="existing clients">
      <h1>We're Here To Help</h1>
      <p>Phone support available Monday - Friday from 9am to 6pm CST or submit a question and we'll respond as quickly as possible.</p>
      <Button to="/contact/existing-clients/" theme="primary56" width="250px" arrow>
        Contact our support
      </Button>
    </Top>

    <ClientDashboardSection content={existing} isNewSale={false} />
    <SupportFormSection isNewSale={false} />
    <ContactInfoSection content={existing.phone} isNewSale={false} />
  </Layout>
);

export default Contact;
