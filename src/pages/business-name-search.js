import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/business-name-search/about";
import Care from "../atomic/sections/learning-center-entity/business-name-search/care";
import Features from "../atomic/sections/learning-center-entity/business-name-search/features";
import Faq from "../atomic/sections/learning-center-entity/business-name-search/faq";
import Articles from "../components/partials/sections/articles";
//Texts
import { top, about, care, faq, features } from "../static/learning-center-entity/business-name-search";

const BusinessNameSearch = () => (
  <Layout>
    <SEO title="Business Name Search | Is Your Company Name Available?<" description="Starting a new business? Check to see if your preferred business name is available in your state with Incfile’s easy name search tool. Try it now." />
    <Top imageName="mr-bulb-business-name-search-5927" imageAlt="Mrs Bulb and with checklist" ovalColor="blue" headlineWidth="500">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.buttons[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Care content={care} />
    <Features content={features} />
    <Faq content={faq} />
    <Articles />
  </Layout>
);

export default BusinessNameSearch;
