import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/state-info/ny-publication-requirement";
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
import { about } from "../../../static/research-topics/state-info/ny-publication-requirement";

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
				title="How to Meet the New York LLC Publication Requirement"
				description="Want to know how to get your certification of publication in New York? Learn about the NY LLC publication requirement & how to meet it."
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
                        "name": "How to Meet New York LLC Publication Requirements",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you’re starting a limited liability company in the state of New York, there’s an extra
                        step you’ll need to take once you’ve filed your Articles of Organization. You will need to publish
                        information about your business in two newspapers. This is known as the “New York LLC
                        Publication Requirement” and it’s a necessary part of starting a business in the state. You’ll
                        need to complete this process if you’re creating a domestic or foreign LLC in NY, and you’ll
                        have to do so within 120 days of starting your LLC."
                        }
                        },{
                        "@type": "Question",
                        "name": "Here’s how to get a certificate of publication in NY",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. Start an LLC in the state of New York (we can help with that).
                        2. The New York Department of State will provide you with a filing receipt.
                        3. Contact the County Clerk in the same county where your LLC has its principal office.
                        4. The County Clerk will advise you of two newspapers where you will need to file a notice that
                        you’ve formed an LLC.
                        5. You’ll need to include certain details about your LLC (more on that below).
                        6. You’ll need to publish once a week for six successive weeks.
                        7. Once you’ve completed publication, the newspaper will send you an “Affidavit of Publication.”
                        8. Finally, you should file a “Certificate of Publication” with the New York Department of State.
                        Let’s break these steps down."
                        }
                        },{
                        "@type": "Question",
                        "name": "Form Your New York LLC",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There’s a formal process to start a business, and we have a complete NY LLC guide
                        that tells you what you need to do. Once your Articles of Organization have been filed, you’ll
                        receive a filing receipt, which you’ll need for the next step."
                        }
                        },{
                        "@type": "Question",
                        "name": "Find Your County Clerk’s Contact Details",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You’ll need to get in touch with your local County Clerk, which will be in the same
                        county as your LLC’s “principal office.” You can find their details through a quick Google search.
                        
                        Visit their website and find out how they want you to get in touch — typically via mail or an in-
                        person visit."
                        
                        }
                        },{
                        "@type": "Question",
                        "name": "The County Clerk Will Tell You Where to Publish Your Notices",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Send the County Clerk a copy of your NY Department of State LLC filing receipt.
                        Once they’ve received that, they’ll tell you where to publish a notice of the formation of your
                        LLC. The two newspapers they ask you to publish in may vary or rotate, so it’s important to get
                        a formal notification from them prior to publishing — you cannot choose the newspapers
                        yourself. Typically, they will tell you to publish in both a daily and a weekly newspaper."
                        }
                        },{
                        "@type": "Question",
                        "name": "Contact Newspapers to Publish an NY LLC Notice",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Publishing the details of your LLC is standard in NY state, so the newspapers should
                        have a fairly simple way for you to meet those requirements. Typically, the notice published by
                        the newspapers will need to include:
                        The name of your LLC.
                        The date the LLC was formed (you can get this from your Articles of Organization).
                        The county where your main office is located.
                        The street address of your LLC.
                        A statement that the Secretary of State has been designated as an agent of the LLC upon
                        whom process against it may be served.
                        The address where the NY Secretary of State may forward any process against the LLC.
                        The name and address of your Registered Agent.
                        A statement that the Registered Agent is to be the agent of the LLC upon whom process against
                        it may be served.
                        The purpose of the LLC, which can be a statement like “the purpose of the LLC is to engage in
                        any lawful act or activity.”
                        The date the LLC will dissolve. If you plan to run your LLC indefinitely, you can use the word
                        “perpetual” here."
                        }
                        },{
                        "@type": "Question",
                        "name": "Publish Your NY LLC Notice for Six Weeks",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It’s not sufficient to just publish your LLC in two separate newspapers for one week.
                        NY state law requires you to publish the notice for six consecutive weeks. Because this is a
                        standard requirement, the newspapers should have an easy process you can use for repeat
                        publication."
                        }
                        },{
                        "@type": "Question",
                        "name": "Receive an Affidavit of Publication from the Newspapers",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "After you’ve met publication requirements, each newspaper will send you an Affidavit
                        of Publication. Don’t worry, you’re almost done."
                        }
                        },{
                        
                        "@type": "Question",
                        "name": "File a Certificate of Publication with the Department of State",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Finally, you should fill out a Certificate of Publication. Once you’ve done that, attach
                        the affidavit and send it to the Department of State. You will also need to pay a $50 fee for the
                        Department of State to process your Certificate of Publication."
                        }
                        },{
                        "@type": "Question",
                        "name": "Why Does New York Have This Requirement?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It dates back to when newspapers were the main means of notifying the public.
                        Although the way we receive information and consume media has changed, the requirements
                        for publication haven’t."
                        }
                        },{
                        "@type": "Question",
                        "name": "What Happens If I Fail to Comply with the LLC Publication Requirement?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The NY Department of State can suspend your authority to do business. Needless to
                        say, this can be very problematic, so it’s important you meet the requirements. Although it can
                        be a burdensome cost for an LLC, you do need to comply."
                        }
                        },{
                        "@type": "Question",
                        "name": "How Much Does It Cost to Meet Publication Requirements?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You’ll need to pay newspapers to publish details about your LLC, and then pay the
                        Department of State to process the Certificate of Publication. The cost of publishing in a daily or
                        weekly newspaper can vary widely, and could be up to $1,000."
                        }
                        },{
                        "@type": "Question",
                        "name": "How Soon Do I Need to Publish These Notices?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You should do so within 120 days of starting your NY LLC."
                        }
                        }]
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
