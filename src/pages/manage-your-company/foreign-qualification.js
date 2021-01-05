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
import About from "../../atomic/sections/manage-your-company/foreign-qualification/about";
import Basics from "../../atomic/sections/manage-your-company/foreign-qualification/basics";
import Help from "../../atomic/sections/manage-your-company/foreign-qualification/help";
import Faq from "../../atomic/sections/manage-your-company/foreign-qualification/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
//Text
import {
  top,
  about,
  basics,
  help,
  faq,
} from "../../static/manage-your-company/foreign-qualification";
import ProductSchema from "../../components/product-schema";
import { servicePrice } from "../../helpers/global-variables";

const ForeignQualification = () => (
  <Layout>
    <SEO
      title="File Foreign LLC Qualification | Certificate of Authority"
      description="To do business in another state, you may need to file a foreign qualification for a certificate of authority. Have Incfile file the paperwork for you.  "
    />

    <ProductSchema
      productUrl={`${process.env.ORDER_URL}foreign-qual.php`}
      productName="Registered AgentForeign Qualification Filing"
      productPrice={servicePrice.foreignQual}
      productDescription="File the correct paperwork to legally do business in states other than your state of incorporation."
    />

    <Top
      imageName="mrs-bulb-foreign-qualification"
      imageAlt="Filing a Foreign Qualification"
      headlineWidth="515"
      ovalColor="green"
    >
      <h1>{top.header}</h1>
      <p>{top.text}</p>
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
    <Basics content={basics} />
    <Help content={help} />
    <Faq content={faq} />
    <Benefits page="foreign-qualification" />
    <Articles categoryId={309} />
  </Layout>
);

export default ForeignQualification;
