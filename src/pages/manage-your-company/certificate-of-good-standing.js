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
import About from "../../atomic/sections/manage-your-company/certificate-of-good-standing/about";
import Help from "../../atomic/sections/manage-your-company/certificate-of-good-standing/help";
import Faq from "../../atomic/sections/manage-your-company/certificate-of-good-standing/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, about, help, faq } from "../../static/manage-your-company/certificate-of-good-standing";

const CertificateOfGoodStanding = () => (
  <Layout>
    <SEO title="Certificate of Good Standing for LLCs & Corporations" description="Learn why your business might need a Certificate of Good Standing and how to easily get one from your Secretary of State. Read more." />
    <Top imageName="mrs-bulb-buildings" imageAlt="Mr Bulb in front of registration office" ovalColor="blue">
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
    <Benefits page="certificate-of-good-standing" />
    <Articles categoryId={335} />
  </Layout>
);

export default CertificateOfGoodStanding;
