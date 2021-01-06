import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/llc-info/llc-taxed-as-an-s-corp";
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
import { about } from "../../../static/research-topics/llc-info/llc-taxed-as-an-s-corp";
import { related } from "../../../static/research-topics/llc-info";
import { Helmet } from "react-helmet";
import { HeadingP } from "../../../atomic/atoms/typography/heading-to-p";

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
        title="Can Limited Liability Copmany (LLC) be taxed as an S Corporation?"
        description="Q & A for LLC and other forms of corporations. Learning Center for Incorporating in every state."
      />
      <Top
        imageName="mrs-bulb-help-center-article"
        imageAlt="Mrs Bulb and with checklist"
        ovalColor="green"
      >
        <Heading size={2} template={1} left>
          {top.header}
        </Heading>
        <HeadingP size={3}>{top.text}</HeadingP>
        <Searchbar />
      </Top>
      <About content={about} />
      <Related content={relatedInfo} />
      <Categories content={categories} />
      <Service content={service} />
      <Tools content={tools} />
      <Rocket content={rocket} />
      <Helmet>
        <script type="application/ld+json">
          {`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": {
                        "@type": "Question",
                        "name": "Can a Limited Liability Company (LLC) be taxed as an S Corporation?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "One of the truly unique features of an LLC is that it can simulate the tax treatment of
                        another entity type which could provide a more favorable tax treatment. By default the IRS
                        classifies single member LLC’s as disregarded entities and assigns them the same tax
                        treatment that is designated to a sole proprietorship. In cases where the LLC has more than one
                        member the IRS will treat it as a partnership.
                        The LLC has the privilege of foregoing either one of the two designated tax classifications by
                        electing to be treated as as an S Corporation. The S Corporation can provide the members of
                        an LLC with the ability to compartmentalize ordinary income and earned income. While earned
                        income is subject to self employment taxes currently around 15.2 percent ordinary income is taxed at
                        the personal income tax rate and is not subject to self employment taxes. In most cases the
                        members would receive a salary for their work that is subject to self employment taxes and then
                        any income received beyond the salary would be considered a non dividend income distribution
                        and treated for tax purposes as ordinary income.
                        In order receive the tax classification of an S Corporation the LLC must file the IRS Form 2553
                        within 75 days of the date of formation. Otherwise it can take the election by filing in subsequent
                        years by filing the same IRS Form 2553 by the calendar day of March 15th. If you are interested
                        in receiving this tax treatment please contact us upon placing your order so that we may
                        prepare the necessary IRS Form and deliver it with your filing."
                        }
                        }
                    }`}
        </script>
      </Helmet>
    </Layout>
  );
};

export default HelpCenter;
