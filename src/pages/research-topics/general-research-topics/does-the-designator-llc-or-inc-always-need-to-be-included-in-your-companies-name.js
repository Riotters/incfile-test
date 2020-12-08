import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/general-research/llc-inc-designator-companies-name";
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
import { about } from "../../../static/research-topics/general-research/llc-inc-designator-companies-name";

import { related } from "../../../static/research-topics/general-research";
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
				title="Does the designator “LLC” or “Inc.“ always need to be included in your companies name?"
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
                        "name": "Does the designator “LLC” or “Inc.” always need to be included in your companies
                        name?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "When filing the articles of organization for an LLC or articles of Incorporation for a
                        corporation, the state requires that a designator is included such as “LLC” or “Inc.” which will
                        signify that the company is organized as an LLC or incorporated as a corporation. Many
                        business owners often omit the designator for marketing or advertising purposes.
                        Leaving the word “LLC” or “Inc.” off the company name may have unintended consequences for
                        the company’s owners. It should always be clear that the company is a limited liability company
                        or corporation, in its absence the courts could rule that the owners have entered into a
                        transaction in an individual capacity, and not on behalf of their company. This may result in
                        personal liability for the owners of a company and it is therefore advisable to always include the
                        company designator on all marketing, business cards and websites. Following this basic rule will
                        indicate the existence of an incorporated entity and provide limited liability protection to the
                        owners. It is also highly recommended that the owners of a company always enter into contracts
                        as members of an LLC or officers of a corporation and never as individuals."
                        }}
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
