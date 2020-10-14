import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
//sections
import Unboxnig from "../../atomic/sections/other/corporate-llc-kit/unboxing";

import { unboxing, getFormationKit } from "../../static/other/corporate-llc-kit"
import ReviewFeaturesKitSection from "../../atomic/sections/other/corporate-llc-kit/review-features";

const CorporateLlcKit = () => (
    <Layout header="v2">
        <SEO title="LLC Kit | Incfile Personlized Corporate Kit | LLC Corporate Kit" description="Incfile offers your LLC or corporate kit. Learn what an LLC Kit is and how to obtain one" />
        <Unboxnig content={unboxing} />
        <ReviewFeaturesKitSection content={getFormationKit} />
    </Layout>
);

export default CorporateLlcKit;
