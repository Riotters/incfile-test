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
import About from "../atomic/sections/other/start-an-llc/about";
import State from "../atomic/sections/other/start-an-llc/state";
import Service from "../atomic/sections/other/start-an-llc/service";
import Faq from "../atomic/sections/other/start-an-llc/faq";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import PacketsSection from "../atomic/sections/learning-center-entity/alaska-corporation/packets";

//Texts
import { top, about, state, service, faq, rocket } from "../static/other/start-an-llc";
import { set } from "lodash";

const StartAnLLC = () => {
  const [dataApi, setDataApi] = React.useState({});
  const renderPackge = (data) => {
    setDataApi(data);
  };
  return (
    <Layout>
      <SEO title="How to Start an LLC | Starting an LLC with Incfile" description="Forming a limited liability company is simple and comes with lots of advantages for your small business or startup. Learn how to create your LLC today." />
      <Top imageName="mrs-bulb-start-an-llc-4300" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="550" textWidth="430">
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
      <State content={state} getDataForVariants={renderPackge} />
      <PacketsSection data={dataApi} />
      <Service content={service} />
      <Faq content={faq} />
      <Rocket content={rocket} />
    </Layout>
  );
};

export default StartAnLLC;
