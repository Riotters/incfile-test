import React from "react";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import CongratulationsSection from "../../atomic/sections/other/thank-you-page/congratulations";
import {top, start, dashboard} from "../../static/other/thank-you-page-v2";
import StartYourBusinessSection from "../../atomic/sections/other/thank-you-page/start-your-business";
import UsingYourClientDashboardSection from "../../atomic/sections/other/thank-you-page/using-your-client-dashboard";

const ThankYouPage = () => (
    <Layout header="v2">
        <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
        <CongratulationsSection content={top} />
        <StartYourBusinessSection content={start} />
        <UsingYourClientDashboardSection content={dashboard}/>
    </Layout>
);


export default ThankYouPage;