import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button-action";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/annual-report/about";
import NextState from "../atomic/sections/learning-center-entity/annual-report/next-state";
import Faq from "../atomic/sections/learning-center-entity/annual-report/faq";
import { scrollToElement } from "../helpers/utils";

//Texts
import {
	top,
	about,
	nextStateDue,
	faq,
} from "../static/learning-center-entity/annual-raport";

const AnnualReport = () => {
	return (
		<Layout>
			<SEO
				title="When is my filing due? Business Filing Deadline Tool | Incfile"
				description="Need to know your next due date with your state's business department? Use Incfile's easy tool to stay on top of your filing requirements. Learn more."
			/>
			<Top
				imageName="mr-bulb-annual-report-due-date-tool"
				imageAlt="business filing deadline tool"
				ovalColor="sun"
				headlineWidth="560"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<Buttonsbox>
					<Button
						onClick={(e) => scrollToElement(e, "js-check-duedate-form")}
						content={top.buttons[0]}
						theme="primary56"
					/>
				</Buttonsbox>
			</Top>
			<About content={about} />
			<NextState content={nextStateDue} id="js-check-duedate-form" />
			<Faq content={faq} />
		</Layout>
	);
};

export default AnnualReport;
