import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/registered-agent/registered-agent-function";
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
import { about } from "../../../static/research-topics/registered-agent/registered-agent-function";
import { related } from "../../../static/research-topics/registered-agent";
import { Helmet } from "react-helmet";
import {HeadingP} from "../../../atomic/atoms/typography/heading-as-p";

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
				title="What is the main function of the Registered Agent?"
				description="Q & A for LLC and other forms of corporations. Learning Center for
    Incorporating in every state."
			/>{" "}
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
                        "name": "What is the main function of the Registered Agent?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The main function of the Registered Agent is to receive and forward important legal
                        and tax correspondence on behalf of the corporation or LLC. Typical documents delivered to the
                        Registered Agent are Service of Process which is a notification of a pending lawsuit as well as
                        mail from the secretary of state; such as annual reports or tax documents sent by the state’s
                        governing tax authority."
                        }}
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
