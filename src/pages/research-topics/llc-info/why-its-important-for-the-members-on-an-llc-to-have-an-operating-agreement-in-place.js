import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/llc-info/llc-members-operating-agreement";
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
import { about } from "../../../static/research-topics/llc-info/llc-members-operating-agreement";
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
				title="Why it's important for the members on an LLC to have an operating agreement in place?"
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
                        "name": "Why it’s important for the members on an LLC to have an operating agreement in
                        place?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Understanding why the LLC needs to have an operating agreement in place starts
                        with having a grasp on how corporations are governed. For the most part the affairs of a
                        corporation are largely governed according to the state statutes. The contrary is true for LLC’s.
                        The state statutes for the LLC provide default provisions that will be exercised in the absence of
                        a corresponding provision in the LLC’s operating agreement which means that they only come
                        into play if the terms are not outlined in the operating agreement. While the LLC is registered at
                        the state level the internal affairs of the company are governed by the operating agreement.
                        This is why most state require an LLC to adopt an operating agreement.
                        The fundamental elements of an operating agreement should include provisions that outline the
                        following:
                        Equity structure ; contributions, allocations of profits, losses and distributions.
                        Management, voting, limitation on liability and indemnification.
                        Record keeping and books.
                        Anti-dilution protections, transfer restriction, buyouts, dissolution or liquidation.
                        Confidentiality agreements.
                        Provisions governing law and dispute resolution.
                        In closing the operating agreement is a vital instrument in outlining the governance and
                        operating conditions of an LLC. The more due diligence that is done when crafting an operating
                        agreement; the less will default to the state statues. If you need help or need revision with the
                        operating agreement provided by us please contact us so that we can assist in adding or
                        removing any provisions that may cause foreseeable acrimony between the members in the
                        future."
                        }}
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
