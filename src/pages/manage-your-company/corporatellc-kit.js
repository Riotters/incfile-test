import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//sections
import Top from "../../atomic/partials/top";
import Unboxnig from "../../atomic/sections/manage-your-company/corporate-llc-kit/unboxing";
import GetFormationKit from "../../atomic/sections/manage-your-company/corporate-llc-kit/get-formation-kit";

//texts
import { top, unboxing, getFormationKit } from "../../static/corporate-llc-kit"
import Cta from "../../atomic/sections/general/cta";
import ProductSchema from "../../components/product-schema";
import { servicePrice } from "../../helpers/global-variables";

const CorporateLlcKit = () => (
    <Layout>
        <SEO title="LLC Kit | Incfile Personlized Corporate Kit | LLC Corporate Kit" description="Incfile offers your LLC or corporate kit. Learn what an LLC Kit is and how to obtain one" />
        <ProductSchema
            productUrl={`${process.env.ORDER_URL}/kit-info.php`}
            productName="Business Formation Kit"
            productPrice={servicePrice.kit}
            productDescription="Your official state documents will be delivered in a high quality and professional kit with your company name stamped along the spine of the book."
        />
        <Top imageName="mrs-bulb-llc-corporate-kit" imageAlt="Mr. Bulb getting LLC or corporate kit" ovalColor="blue">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </Top>
        <Unboxnig content={unboxing} />
        <GetFormationKit content={getFormationKit} />
        <Cta />
        {/* <Articles /> */}
    </Layout>
);

export default CorporateLlcKit;
