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
import About from "../../atomic/sections/learning-center-entity/business-resources/about";
import Resources from "../../atomic/sections/learning-center-entity/business-resources/resources";
import FurtherResources from "../../atomic/sections/learning-center-entity/business-resources/further-resources";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, resources, furtherResources } from "../../static/learning-center-entity/business-resources";

const BusinessResources = () => (
  <Layout>
    <SEO title="Business Resources & Tools for Starting a Company" description="There’s a lot to think about when you’re getting your business off the ground! Our helpful tools and free downloads can get you started. Learn more." />
    <Top imageName="mr-bulb-business-downloads-tools-7829" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" headlineWidth="550">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <Resources content={resources} />
    <FurtherResources content={furtherResources} />
    <Articles />
  </Layout>
);

export default BusinessResources;