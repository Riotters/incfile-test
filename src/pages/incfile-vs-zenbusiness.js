import React from "react";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Layout from "../components/layout";
import {
  top,
  about,
  conclusion,
  selections,
} from "../static/incfile-vs-zenbusiness";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import RatingRow from "../atomic/atoms/boxes/rating-row";

import About from "../atomic/sections/incfile-vs/zenbusiness/about";
import Conclusion from "../atomic/sections/incfile-vs/zenbusiness/conclusion";
import Selections from "../atomic/sections/incfile-vs/zenbusiness/selections";

const IncfileVsLegalzoom = () => {
  return (
    <Layout>
      <SEO
        title="Incfile vs. ZenBusiness LLC Incorporation Services"
        description="Wev'e put together an objective review comparing Incfile's company formation services with one of our competitors, ZenBusiness. Read more."
      />

      <Top
        ovalColor="babyblue"
        imageName="mr-bulb-incfile-vs-zenbusiness-2"
        imageAlt="Mr Bulb Incfile vs ZenBusiness"
        headlineWidth={700}
        imageMobilePosition="-8%"
      >
        <h1>{top.header}</h1>
        <p>{top.text}</p>
        <p>{top.text2}</p>
        <RatingRow topMargin="0">
          <CartBlock />
          <RatingBlock />
        </RatingRow>
      </Top>
      <About content={about} />
      <Conclusion content={conclusion} />
      <Selections content={selections} />
    </Layout>
  );
};

export default IncfileVsLegalzoom;
