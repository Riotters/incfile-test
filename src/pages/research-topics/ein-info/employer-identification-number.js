import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/ein-info/identification-number";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
import { Heading } from "../../../atomic/atoms/typography/heading";
import { HeadingP } from "../../../atomic/atoms/typography/heading-to-p";

//Texts
import {
  top,
  rocket,
  categories,
  service,
  tools,
} from "../../../static/learning-center-entity/help-center-article";
import { about } from "../../../static/research-topics/ein-info/identification-number";
import { related } from "../../../static/research-topics/ein-info";

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
                title="Resources about Employer Identification Numbers | Incfile"
                description="Find information and instructions for getting and managing the EIN number for your business. Read more here."
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
        </Layout>
    );
}

export default HelpCenter;
