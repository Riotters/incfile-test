import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/annual-report/about";
import Help from "../../atomic/sections/manage-your-company/annual-report/help";
import Faq from "../../atomic/sections/manage-your-company/annual-report/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, about, help, faq } from "../../static/manage-your-company/annual-report";
import ProductSchema from "../../components/product-schema";

const AnnualReport = () => (
    <Layout>
        <SEO title="File LLC Annual Report | Business Annual Reports | Information on Filling Annual Business Reports" description="File LLC and Corporation Annual Reports using Incfile for all your document needs." />
        <ProductSchema
            productUrl="hptts://orders.incfile.com/annual-report.php"
            productName="Annual Report Filing for LLCs or Corporations"
            productPrice="99"
            productDescription="File the corporate reports required by your Secretary of State. Incfile takes care of it all for you."
        />
        <Top imageName="mrs-bulb-annual-report" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.button[0]} theme="primary56" width="200px" arrow />
            </Buttonsbox>
            <RatingRow>
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>
        <About content={about} />
        <Help content={help} />
        <Faq content={faq} />
        <Benefits page="annual-report" />
        <Articles categoryId={334} />
    </Layout>
);

export default AnnualReport;
