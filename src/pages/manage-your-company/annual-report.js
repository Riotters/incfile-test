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
import {
  top,
  about,
  help,
  faq,
} from "../../static/manage-your-company/annual-report";
import ProductSchema from "../../components/product-schema";
import { servicePrice } from "../../helpers/global-variables";
import { Heading } from "../../atomic/atoms/typography/heading";
import { HeadingP } from "../../atomic/atoms/typography/heading-to-p";

const AnnualReport = () => (
  <Layout>
    <SEO title="Formal LLC & Corporate Annual Reports" description="" />
    <ProductSchema
      productUrl={`${process.env.ORDER_URL}/annual-report.php`}
      productName="Annual Report Filing for LLCs or Corporations"
      productPrice={servicePrice.annualReport}
      productDescription="File the corporate reports required by your Secretary of State. Incfile takes care of it all for you."
    />
    <Top
      imageName="mrs-bulb-annual-report"
      imageAlt="filing an annual report"
      ovalColor="green"
    >
      <Heading size={1}>{top.header}</Heading>
      <HeadingP size={2} big left>
        {top.text}
      </HeadingP>
      <Buttonsbox>
        <Button
          externalLink
          content={top.button[0]}
          theme="primary56"
          width="200px"
          arrow
        />
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
