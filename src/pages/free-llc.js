import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import Fee from "../atomic/sections/other/free-llc/fee";
import Start from "../atomic/sections/other/free-llc/start";
import Industry from "../atomic/sections/other/free-llc/industry";
import Catch from "../atomic/sections/other/free-llc/catch";
//Texts
import { top, fee, start, industry, isCatch } from "../static/other/free-llc";

const GeneralResearchTopics = () => (
    <Layout>
        <SEO title="Free LLC Filing | Register Your LLC Online for Free" description="Let Incfile take care of the paperwork for you—for free! Form your business today for $0 + your state’s fee. Learn more." />
        <Top imageName="mrs-bulb-free-llc-5591" imageAlt="Mrs Bulb and with checklist" ovalColor="blue" headlineWidth="800">
            <h1>{top.header}</h1>
            <RatingRow topMargin="64">
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>
        <Fee content={fee} />
        <Start content={start} />
        <Industry content={industry} />
        <Catch content={isCatch} />
    </Layout>
);

export default GeneralResearchTopics;
