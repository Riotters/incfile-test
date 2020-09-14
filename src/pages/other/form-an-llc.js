import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Perks from "../../atomic/sections/other/perks";
import Trust from "../../atomic/sections/other/trust";
//Sections
import Top from "../../atomic/partials/top";
//Texts
import { top, perks, trust } from "../../static/other/form-an-llc";

const FormAnLLC = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="aaa" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="550">
      <h1>{top.header}</h1>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <Perks content={perks} />
    <Trust content={trust} />
  </Layout>
);

export default FormAnLLC;
