import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/state-info/publish-inc-notice-georgia";
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
import { about } from "../../../static/research-topics/state-info/publish-inc-notice-georgia";

import { related } from "../../../static/research-topics/state-info";
import { Helmet } from "react-helmet";

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
				title="How To Publish Your Notice Of Incorporation In Georgia | Archive articles"
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
			<Helmet>
				<script type="application/ld+json">
					{`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                        "@type": "Question",
                        "name": "What are the publishing requirements of a Georgia Corporation?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "All corporations must publish a notice of intent to incorporate in a newspaper which
                        is the official legal organ of the county where the initial registered office of the corporation is to
                        be located. The notice should be published once a week for two consecutive weeks and it
                        should contain the name of the corporation, the name of the registered agent and the address of
                        the registered office in Georgia."
                        }
                        },{
                        "@type": "Question",
                        "name": "When do you have to publish your notice of incorporation in Georgia and what is the
                        cost?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Each corporation in Georgia should send their notice of incorporation, along with a
                        $40.00 publication fee, directly to the newspaper no later than the next business day after filing
                        articles of incorporation with the Georgia Secretary of State."
                        }
                        },{
                        "@type": "Question",
                        "name": "What information needs to be in the published notice?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A Georgia Corporation must publish a notice of incorporation that includes: The
                        name of the corporation. The name and address of your initial registered agent.
                        Send your notice to the legal organ in the form of a letter such as:
                        Dear Publisher:
                        Please publish once a week for two consecutive weeks the following notice:
                        Notice is hereby given that articles of incorporation that will incorporate (name of corporation)
                        have been delivered to the Secretary of State in accordance with Georgia Business Corporation
                        Code. The initial registered office of the corporation is located at (address of registered office)
                        and its initial registered agent at such address is (name of registered agent)
                        Enclosed is a check in the amount of $40.00.
                        Sincerely,
                        (Authorized signature)"
                        }
                        },{
                        "@type": "Question",
                        "name": "Can I publish in any paper in Georgia?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Publish a notice of incorporation in the official legal organ of the county of the initial
                        
                        registered office. The Georgia Superior Court Clerks can help you find the contact information
                        for the paper that you need to publish in. Legal organs are journals that publish public notices
                        and are published by the county probate judge, sheriff and clerk of the court. If you sign up for
                        registered agent service with Northwest Registered Agent, your legal organ is the Fulton County
                        Daily Report, published in Atlanta and it is the most widely read legal organ in Georgia.
                        Contact Fulton County Daily Report at the following mailing address:
                        190 Pryor Street
                        Atlanta, GA 30303-3607
                        Phone: (404) 521-1227"
                        }
                        },{
                        "@type": "Question",
                        "name": "What business entities must publish a notice of incorporation in Georgia?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Only domestic corporations, for profit and nonprofit, must publish a notice of intent to
                        incorporate in Georgia. Foreign corporations and Limited Liability Companies have no
                        publication requirements in Georgia."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the cost of publication of intent to incorporate in Georgia?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The publication fee of intent to incorporate is set by Georgia law at $40.00."
                        }
                        },{
                        "@type": "Question",
                        "name": "What is the penalty if you fail to publish a notice of incorporation in Georgia?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There is no penalty in Georgia for failure to publish a notice of intent to incorporate."
                        }
                        },{
                        "@type": "Question",
                        "name": "Does Georgia Secretary of State want proof that you published your annual
                        statement?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Do not file your proof of publication with the Secretary of State of Georgia. Keep
                        your affidavit with your corporate records."
                        }
                        }]
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
