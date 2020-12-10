import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/registered-agent/own-registered-agent";
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
import { about } from "../../../static/research-topics/registered-agent/own-registered-agent";

import { related } from "../../../static/research-topics/registered-agent";
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
				title="Can I be my own Registered Agent?"
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
                        "mainEntity": [{
                        "@type": "Question",
                        "name": "Can I Be My Own Registered Agent?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can act as your own Registered Agent for a corporation or LLC as long as you
                        have a physical street address in the state where your corporation or LLC is formed. The actual
                        corporation or LLC being formed, however, cannot name itself as its own Registered Agent."
                        }
                        },{
                        "@type": "Question",
                        "name": "Should I Be My Own Registered Agent?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Although becoming a Registered Agent for your LLC or corporation will save you the
                        cost of a professional Registered Agent Service, there are some things you’ll need to consider:
                        The Registered Agent must have a physical street address (not a P.O. Box) in the state where
                        the company is operating. If you’re forming an LLC outside your home state, you will need to
                        use an in-state Registered Agent.
                        You always need to have someone on hand during business hours at the Registered Agent
                        address to sign for important documents.
                        The Registered Agent’s name and address are part of the public record and available through
                        the secretary of state’s website. If you would prefer your name and address aren’t published,
                        you might choose to use a Registered Agent service instead.
                        If you change your business address or move out of state, you would need to file additional
                        documentation with the secretary of state for the new address if you act as your own Registered
                        Agent. This would not be the case if you use a Registered Agent service, making a move or
                        address change much simpler."
                        }
                        },{
                        "@type": "Question",
                        "name": "Can an LLC or Corporation Act as Its Own Registered Agent?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An LLC or corporation cannot name itself as its own Registered Agent. Typically, if
                        you do not use a Registered Agent Service, you would give your personal name as the
                        Registered Agent for your business entity."
                        }
                        },{
                        "@type": "Question",
                        "name": "Using a Registered Agent Service",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you choose not to be your own Registered Agent for your company, you can select
                        a Registered Agent service to act as a Registered Agent for your corporation or LLC. They will
                        accept documents on your behalf and forward them to you as required. This includes:
                        Correspondence from the secretary of state
                        Service of process notices (e.g., if your business is sued or required to appear in court)
                        
                        Official state and federal government correspondence and notifications
                        Tax forms and requests to complete permits, company filings and reports
                        Incfile offers comprehensive Registered Agent services across all 50 states — and if you
                        incorporate through us, we’ll provide the service for free for the first year."
                        }
                        }]
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
