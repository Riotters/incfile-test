import React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import SEO from "../../components/seo";
//Sections
import Top from "../../atomic/partials/top";
import {business_formation, top} from "../../static/manage-your-company/home-page-v3";
import Button from "../../atomic/molecules/buttons/button";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import BusinessFormation from "../../atomic/sections/manage-your-company/home-page-v3/business-formation";

//mrs-review-stars-5481

const HomePageV3 = () => (
    <Layout>
        <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
        <Top imageName="home-page-v3-top-9458" imageAlt="Start your own company" ovalColor="green" headlineWidth="700" textWidth="700">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </Top>
        <BusinessFormation content={business_formation}/>

    </Layout>
);

export default HomePageV3;