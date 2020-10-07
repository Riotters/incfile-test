import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Top from "../atomic/partials/top";
import Map from "../atomic/sections/states-corporation/main/map";
import States from "../atomic/sections/states-corporation/main/states";
import Articles from "../atomic/sections/articles";
//Texts
import { map, states } from "../static/corporation-state-information";

const StateInformation = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Map content={map} />
    <States content={states} />
    <Articles />
  </Layout>
);

export default StateInformation;
