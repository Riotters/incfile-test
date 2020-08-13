import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";

import TextCenterLayout from "../../components/partials/blocks/heading-center";
import styled from "styled-components";
import { color, gradient } from "../../components/styles/colors";
import Container from "../../components/container";
import Adventages from "../../components/adventages"

//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/registered-agent/about"
import Includes from "../../atomic/sections/manage-your-company/registered-agent/includes"
import Offering from "../../atomic/sections/manage-your-company/registered-agent/offering"
import Faq from "../../atomic/sections/manage-your-company/registered-agent/faq"
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, includes, offering, faq } from "../../static/manage-your-company/registered-agent"

const Service = styled.div`
  background-color: ${color.babyblue3};
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  max-width: 970px;
  padding: 140px 0;
  margin: 0 auto;
`;

const adventages = {
  items: [
    {
      headline: "Handling all of Your Documents",
      text: "An always-available Registered Agent who will receive state and IRS mail correspondence, documents and legal proceedings on your LLC’s or corporation’s behalf"
    },
    {
      headline: "Online Dashboard",
      text: "A digital dashboard where you can access, store and retrieve any information we’ve received for your business"
    },
    {
      headline: "Tailored Notifications",
      text: "Email and SMS notification whenever we receive documents for your business"
    },
    {
      headline: "Automatic Mail Forwarding",
      text: "Automatic mail forwarding of all legal correspondence, documentation and information directly to you."
    },
    {
      headline: "First Year Free",
      text: "The first year free ($119 a year after), when you incorporate with Incfile through any of our business packages."
    },
  ]
}

const RegisteredAgent = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-registered-agent" imageAlt="Mrs Bulb register agent service holding a phone" ovalColor="purple">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Includes content={includes} />
    <Offering content={offering} />
    <Faq content={faq} />
    <Benefits />
    <Articles />
  </Layout>
);

export default RegisteredAgent;
