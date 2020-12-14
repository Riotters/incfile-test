import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/diy-business-course/about";
import Consultation from "../../atomic/sections/diy-business-course/consultation";
import Form from "../../atomic/sections/diy-business-course/form";
//Texts
import {
	top,
	about,
	consultation,
	form,
} from "../../static/diy-business-course";
import {Heading} from "../../atomic/atoms/typography/heading";

const StartAnLLC = () => {
	return (
		<Layout>
			<SEO
				title="Starting a Business: An Online Course for DIY Entrepreneurs"
				description="Ready to be an entrepreneur? We’ve put together an easy online class to guide you through each of the steps of forming your own business. Sign up now."
			/>
			<Top
				imageName="mrs-bulb-annual-report"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="sun"
				headlineWidth="770"
				textWidth="770"
			>
				<h1>{top.header}</h1>
				<Heading size={2} template={3} style={{ marginBottom: "32px", textAlign: "left" }}>
					{top.header2}
				</Heading>
				<p>{top.text}</p>
			</Top>
			<About content={about} />
			<Consultation content={consultation} />
			<Form content={form} id="js-form" />
		</Layout>
	);
};

export default StartAnLLC;
