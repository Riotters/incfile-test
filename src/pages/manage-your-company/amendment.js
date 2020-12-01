import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../components/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";

//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/amendment/about";
import Requirements from "../../atomic/sections/manage-your-company/amendment/requirements";
import Faq from "../../atomic/sections/manage-your-company/amendment/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";

//Texts
import { seo, top, about, requirements, faq } from "../../static/manage-your-company/amendment";

const Amendment = () => (
  <Layout>
    <SEO title={seo.title} description={seo.desc} />
    <Top imageName="mr-amendment-name-change" imageWidth="948" imagePositionRight="50%" imageAlt="Mrs Bulb holding a closed sign" ovalColor="orange" imageMobilePosition={0} tabletVariantClass="tablet--shopper" tabletImgScale={1} tabletImgPosX={40} tabletImgPosY={-450}>
      <h1>{top.header}</h1>
      <Buttonsbox>
        <Button to={`${process.env.ORDER_URL}/amendment.php`} theme="primary56" width="200px" arrow>
          Order now
        </Button>
      </Buttonsbox>
      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <Requirements content={requirements} />
    <Faq content={faq} />
    <Benefits bgImage="linear-gradient(to top, rgba(255, 255, 255, 0) 36%, #f2f6ff);" page="amendment" />
    <Articles categoryId={1858} />
  </Layout>
);

export default Amendment;
