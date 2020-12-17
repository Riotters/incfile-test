import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/business-taxes/c-corp-taxing";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
//Texts
import {
  top,
  rocket,
  categories,
  service,
  tools,
} from "../../../static/learning-center-entity/help-center-article";
import { about } from "../../../static/research-topics/business-taxes/c-corp-taxing";
import { related } from "../../../static/research-topics/business-taxes";

const HelpCenter = () => {
  const currentUri =
    typeof window !== "undefined" ? window.location.pathname : "";
  const relatedInfo = {
    header: `Related Articles`,
    text: `Other users were also interested in knowing about…`,
    buttons: related.buttons.filter((item) => {
      return item.url !== currentUri;
    }),
  };

  React.useEffect(() => {
    const el = document.getElementById("answers");
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  return (
    <Layout>
      <SEO
        title="How is a C Corporation Taxed? | Archive articles"
        description="Q & A for LLC and other forms of corporations. Learning Center for
    Incorporating in every state."
      />
      <Top
        imageName="mrs-bulb-help-center-article"
        imageAlt="Mrs Bulb and with checklist"
        ovalColor="green"
      >
        <Heading size={2} template={1} left>
          {top.header}
        </Heading>
        <p>{top.text}</p>
        <Searchbar />
      </Top>
      <About content={about} />
      <Related content={relatedInfo} />
      <Categories content={categories} />
      <Service content={service} />
      <Tools content={tools} />
      <Rocket content={rocket} />
    </Layout>
  );
};

export default HelpCenter;
