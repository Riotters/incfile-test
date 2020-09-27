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
import Creating from "../../atomic/sections/other/form-your-corporation/creating";
import Opinions from "../../atomic/sections/other/form-your-corporation/opinions";
//Texts
import { top, creating, opinions } from "../../static/other/form-your-corporation";

const FormAnLLC = () => (
  <Layout>
    <SEO title="Form Your Corporation" description="aaa" />
    <Top imageName="mr-bulb-form-your-corporation-4492" imageAlt="aaa" ovalColor="sun" headlineWidth="450">
      <h1>{top.header}</h1>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <Creating content={creating} />
    <Opinions content={opinions} />
  </Layout>
);

export default FormAnLLC;
